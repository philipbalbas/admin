open Ant;
open React;

module CreateCategoryMutation = [%relay.mutation
  {|
    mutation FormCategoryCreateMutation($input: CreateCategoryInput! ) {
      createCategory(input: $input) {
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

let initialValues = {name: "", description: ""};

[@react.component]
let make = () => {
  let (createCategory, isCreatingCategory) = CreateCategoryMutation.use();

  let form = Form.useForm()->Js.Array.unsafe_get(0);

  let resetFields = () => {
    form |> Form.resetFields();
  };

  let onFinish = values => {
    let state = stateFromJs(values);
    createCategory(
      ~variables={
        input: {
          inputData: {
            name: state.name,
            description: state.description,
          },
        },
      },
      ~onCompleted=
        (res, err) => {
          switch (res.createCategory) {
          | Some(response) =>
            switch (response.result) {
            | Some(category) =>
              let name = category.name;
              Message.(message |> success({j| Category $name created  |j}));
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

  <div className="container mx-auto p-4 w-4/6">
    <div className="text-2xl mb-4"> "Create Category"->string </div>
    <Form
      form
      labelCol={"span": 4}
      wrapperCol={"span": 20}
      name="category"
      onFinish>
      <Form.Item
        label={"Name"->string}
        rules=[|{"required": true, "message": "Name is required"}|]
        name="name">
        <Input />
      </Form.Item>
      <Form.Item label={"Description"->string} name="description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={"offset": 4, "span": 20}>
        <Button
          loading=isCreatingCategory
          className="mr-4"
          _type=`primary
          htmlType="submit">
          "Create"->string
        </Button>
        <Next.Link href="/" _as="/">
          <Button loading=isCreatingCategory> "Cancel"->string </Button>
        </Next.Link>
      </Form.Item>
    </Form>
  </div>;
};