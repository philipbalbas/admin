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

module UpdateSubjectMutation = [%relay.mutation
  {|
    mutation FormSubjectUpdateMutation($input: UpdateSubjectInput! ) {
      updateSubject(input: $input) {
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
        description
        order
      }
    }
  |}
];

module SubjectQuery = [%relay.query
  {|
    query FormSubjectQuery($id: ID!) {
      getSubject(id: $id) {
        name
        description
        order
        module_: module {
          id
        }
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

type mutationType = [ | `CREATE | `UPDATE];

[@react.component]
let make =
    (~categoryId="", ~moduleId=?, ~subjectId="", ~mutationType: mutationType) => {
  let (createSubject, isCreatingSubject) = CreateSubjectMutation.use();
  let (updateSubject, isUpdatingSubject) = UpdateSubjectMutation.use();

  let modulesQueryData =
    ModulesQuery.use(
      ~variables={
        filter: Some({categoryId: Some(categoryId), order: Some(`ASC)}),
      },
      (),
    );

  let subjectQueryData = SubjectQuery.use(~variables={id: subjectId}, ());

  let subject =
    switch (subjectQueryData.getSubject) {
    | Some(subject) => subject
    | None => {
        name: "",
        description: None,
        order: None,
        module_: {
          id: "",
        },
      }
    };

  let passedModuleId =
    switch (mutationType) {
    | `CREATE => Belt.Option.getWithDefault(moduleId, "")
    | `UPDATE => subject.module_.id
    };

  let (form, _) = Form.useForm();

  let resetFields = () => {
    form |> Form.resetFields();
  };

  let createMutation = state => {
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

  let updateMutation = state => {
    updateSubject(
      ~variables={
        input: {
          inputData: {
            name: Some(state.name),
            description: Some(state.description),
            order: state.order,
            moduleId: Some(state.moduleId),
            id: subjectId,
          },
        },
      },
      ~onCompleted=
        (res, err) => {
          switch (res.updateSubject) {
          | Some(response) =>
            switch (response.result) {
            | Some(category) =>
              let name = category.name;
              Message.(message |> success({j| Subject $name updated  |j}));
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

  let onFinish = values => {
    let state = stateFromJs(values);
    switch (mutationType) {
    | `CREATE => createMutation(state)
    | `UPDATE => updateMutation(state)
    };
  };

  let modules =
    switch (modulesQueryData.listModules) {
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

  let buttonText =
    switch (mutationType) {
    | `CREATE => "Create"
    | `UPDATE => "Update"
    };

  let loading = isCreatingSubject || isUpdatingSubject;

  <Form
    form
    labelCol={"span": 4}
    wrapperCol={"span": 20}
    name="subject"
    onFinish
    initialValues={
      "moduleId": passedModuleId,
      "name": subject.name,
      "description": subject.description,
      "order": subject.order,
    }>
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
      <Button loading className="mr-4" _type=`primary htmlType="submit">
        buttonText->string
      </Button>
      <Link href=returnHref _as=returnAs>
        <Button loading> "Cancel"->string </Button>
      </Link>
    </Form.Item>
  </Form>;
};