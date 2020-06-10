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

[@bs.deriving jsConverter]
type state = {
  moduleId: string,
  name: string,
  description: string,
  order: option(int),
};

[@react.component]
let make = (~categoryId="", ~moduleId=?) => {
  let (createSubject, isCreatingSubject) = CreateSubjectMutation.use();

  let queryData =
    ModulesQuery.use(
      ~variables={
        filter: Some({categoryId: Some(categoryId), order: Some(`ASC)}),
      },
      (),
    );

  let form = Form.useForm()->Js.Array.unsafe_get(0);

  let resetFields = () => {
    form |> Form.resetFields();
  };

  let onFinish = values => {
    let state = stateFromJs(values);
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
    onFinish
    initialValues={"moduleId": moduleId}>
    <Form.Item
      label={"Module"->string}
      rules=[|{"required": true, "message": "Module is required"}|]
      name="moduleId">
      <Select>
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
      <Input />
    </Form.Item>
    <Form.Item
      label={"Description"->string}
      name="description"
      rules=[|{"required": true, "message": "Description is required"}|]>
      <Input.TextArea />
    </Form.Item>
    <Form.Item label={"Order"->React.string} name="order">
      <Input.Number _type="number" />
    </Form.Item>
    <Form.Item wrapperCol={"offset": 4, "span": 20}>
      <Button
        loading=isCreatingSubject
        className="mr-4"
        _type=`primary
        htmlType="submit">
        "Create"->string
      </Button>
      <Link href=returnHref _as=returnAs>
        <Button loading=isCreatingSubject> "Cancel"->string </Button>
      </Link>
    </Form.Item>
  </Form>;
};