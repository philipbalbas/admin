open Ant;
open React;

module CreateModuleMutation = [%relay.mutation
  {|
    mutation FormModuleCreateMutation($input: CreateModuleInput! ) {
      createModule(input: $input) {
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

module UpdateModuleMutation = [%relay.mutation
  {|
    mutation FormModuleUpdateMutation($input: UpdateModuleInput!) {
      updateModule(input: $input) {
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

module GetModuleQuery = [%relay.query
  {|
    query FormModuleQuery($id: ID!) {
      getModule(id: $id) {
        name
        description
        order
      }
    }
  |}
];

[@bs.deriving jsConverter]
type state = {
  name: string,
  description: string,
  order: int,
};

type mutationType = [ | `CREATE | `UPDATE];

[@react.component]
let make = (~categoryId="", ~moduleId="", ~mutationType: mutationType) => {
  let (createModule, isCreatingModule) = CreateModuleMutation.use();
  let (updateModule, isUpdatingModule) = UpdateModuleMutation.use();

  let queryData = GetModuleQuery.use(~variables={id: moduleId}, ());

  let module_ =
    switch (queryData.getModule) {
    | Some(module_) => module_
    | None => {name: "", description: "", order: None}
    };

  let (form, _) = Form.useForm();

  let resetFields = () => {
    form |> Form.resetFields();
  };

  let createMutation = state => {
    createModule(
      ~variables={
        input: {
          inputData: {
            name: state.name,
            description: state.description,
            categoryId,
            order: Some(state.order),
          },
        },
      },
      ~onCompleted=
        (res, err) => {
          switch (res.createModule) {
          | Some(response) =>
            switch (response.result) {
            | Some(module_) =>
              let name = module_.name;
              Message.(message |> success({j| Module $name created  |j}));
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
    updateModule(
      ~variables={
        input: {
          inputData: {
            name: Some(state.name),
            description: Some(state.description),
            categoryId: Some(categoryId),
            order: Some(state.order),
            id: moduleId,
          },
        },
      },
      ~onCompleted=
        (res, err) => {
          switch (res.updateModule) {
          | Some(response) =>
            switch (response.result) {
            | Some(module_) =>
              let name = module_.name;
              Message.(message |> success({j| Module $name updated  |j}));
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

  let title =
    switch (mutationType) {
    | `CREATE => "Create"
    | `UPDATE => "Update"
    };

  let loading = isCreatingModule || isUpdatingModule;

  <Form
    form
    labelCol={"span": 4}
    wrapperCol={"span": 20}
    name="module"
    initialValues={
      "name": module_.name,
      "description": module_.description,
      "order": module_.order,
    }
    onFinish>
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
        title->string
      </Button>
      <Next.Link href="/[categoryId]/modules" _as={j|/$categoryId/modules|j}>
        <Button loading> "Cancel"->string </Button>
      </Next.Link>
    </Form.Item>
  </Form>;
};