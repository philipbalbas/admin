open Ant;
open React;
open Next;

module CreateSubjectMutation = [%relay.mutation
  {|
    mutation FormSubjectCreateMutation($input: CreateSubjectInput! ) {
      createSubject(input: $input) {
        result {
          id
          name
          description
          order
        }
      }
    }
  |}
];

module ModulesQuery = [%relay.query
  {|
  query FormSubjectModulesQuery($filter: ModuleFilter) {
    listModules(filter: $filter) {
      id
      name
    }
  }
|}
];

type state = {
  moduleId: string,
  name: string,
  description: string,
  order: option(int),
};

type action =
  | UpdateModuleId(string)
  | UpdateName(string)
  | UpdateDescription(string)
  | UpdateOrder(int)
  | Clear;

let initialValues = {moduleId: "", name: "", description: "", order: None};

[@react.component]
let make = (~categoryId="", ~moduleId=?) => {
  let (state, dispatch) =
    useReducer(
      (state, action) =>
        switch (action) {
        | UpdateModuleId(moduleId) => {...state, moduleId}
        | UpdateName(name) => {...state, name}
        | UpdateDescription(description) => {...state, description}
        | UpdateOrder(order) => {...state, order: Some(order)}
        | Clear => {...initialValues, moduleId: state.moduleId}
        },
      initialValues,
    );

  useEffect1(
    () => {
      switch (moduleId) {
      | Some(moduleId) => dispatch(UpdateModuleId(moduleId))
      | None => ()
      };
      Some(() => ());
    },
    [|moduleId|],
  );

  let (createSubject, isCreatingSubject) = CreateSubjectMutation.use();

  let queryData =
    ModulesQuery.use(
      ~variables={
        filter: Some({categoryId: Some(categoryId), order: Some(`ASC)}),
      },
      (),
    );

  let [|form|] = Form.useForm();

  let resetFields = () => {
    form |> Form.resetFields();
    dispatch(Clear);
  };

  let handleSubmit = state => {
    createSubject(
      ~variables={
        input: {
          inputData: {
            name: state.name,
            description: Some(state.description),
            order: state.order,
            moduleId: state.moduleId,
          },
        },
      },
      ~onCompleted=
        (res, err) => {
          switch (res.createSubject) {
          | Some(response) =>
            switch (response.result) {
            | Some(category) =>
              let name = category.name;
              Message.(message |> success({j| Subject $name created  |j}));
              resetFields();
            | None => ()
            }
          | None => ()
          };
          switch (err) {
          | Some(err) =>
            let _ =
              Belt.Array.map(err, e => {
                Message.(message |> error(e.message))
              });
            ();
          | None => ()
          };
        },
      (),
    )
    |> ignore;
  };

  let modules =
    switch (queryData.listModules) {
    | Some(module_) => module_
    | None => [||]
    };

  let returnHref =
    switch (moduleId) {
    | Some(_id) => "/[categoryId]/modules/[moduleId]"
    | None => "/[categoryId]/subjects"
    };

  let returnAs =
    switch (moduleId) {
    | Some(moduleId) => {j|/$categoryId/modules/$moduleId|j}
    | None => {j|/$categoryId/subjects|j}
    };

  <Form
    form
    labelCol={"span": 4}
    wrapperCol={"span": 20}
    name="subject"
    initialValues={"moduleId": moduleId}>
    <Form.Item
      label={"Module"->string}
      rules=[|{"required": true, "message": "Module is required"}|]
      name="moduleId">
      <Select
        onChange={text => dispatch(UpdateModuleId(text))}
        defaultValue=moduleId>
        {modules->Belt.Array.map(module_ =>
           <Select.Option key={module_.id} value={module_.id}>
             module_.name->string
           </Select.Option>
         )}
      </Select>
    </Form.Item>
    <Form.Item
      label={"Name"->string}
      rules=[|{"required": true, "message": "Name is required"}|]
      name="name">
      <Input
        onChange={e =>
          dispatch(UpdateName(ReactEvent.Synthetic.target(e)##value))
        }
      />
    </Form.Item>
    <Form.Item
      label={"Description"->string}
      name="description"
      rules=[|{"required": true, "message": "Description is required"}|]>
      <Input.TextArea
        onChange={e =>
          dispatch(UpdateDescription(ReactEvent.Synthetic.target(e)##value))
        }
      />
    </Form.Item>
    <Form.Item label={"Order"->React.string} name="order">
      <Input.Number
        onChange={value => dispatch(UpdateOrder(value))}
        _type="number"
      />
    </Form.Item>
    <Form.Item wrapperCol={"offset": 4, "span": 20}>
      <Button
        loading=isCreatingSubject
        className="mr-4"
        _type=`primary
        onClick={_ => handleSubmit(state)}
        htmlType="submit">
        "Create"->string
      </Button>
      <Link href=returnHref _as=returnAs>
        <Button loading=isCreatingSubject> "Cancel"->string </Button>
      </Link>
    </Form.Item>
  </Form>;
};