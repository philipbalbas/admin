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
        }
      }
    }
  |}
];

[@bs.deriving jsConverter]
type state = {
  name: string,
  description: string,
};

type action =
  | UpdateName(string)
  | UpdateDescription(string)
  | Clear;

let initialValues = {name: "", description: ""};

[@react.component]
let make = (~categoryId="") => {
  let (createModule, isCreatingModule) = CreateModuleMutation.use();

  let form = Form.useForm()->Js.Array.unsafe_get(0);

  let resetFields = () => {
    form |> Form.resetFields();
  };

  let onFinish = values => {
    let state = stateFromJs(values);
    createModule(
      ~variables={
        input: {
          inputData: {
            name: state.name,
            description: state.description,
            categoryId,
            order: None,
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

  <Form
    form labelCol={"span": 4} wrapperCol={"span": 20} name="module" onFinish>
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
    <Form.Item wrapperCol={"offset": 4, "span": 20}>
      <Button
        loading=isCreatingModule
        className="mr-4"
        _type=`primary
        htmlType="submit">
        "Create"->string
      </Button>
      <Next.Link href="/[categoryId]/modules" _as={j|/$categoryId/modules|j}>
        <Button loading=isCreatingModule> "Cancel"->string </Button>
      </Next.Link>
    </Form.Item>
  </Form>;
};