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
  let (state, dispatch) =
    useReducer(
      (state, action) =>
        switch (action) {
        | UpdateName(name) => {...state, name}
        | UpdateDescription(description) => {...state, description}
        | Clear => initialValues
        },
      initialValues,
    );

  let (createCategory, isCreatingCategory) = CreateModuleMutation.use();

  let [|form|] = Form.useForm();

  let resetFields = () => {
    form |> Form.resetFields();
    dispatch(Clear);
  };

  let handleSubmit = state => {
    createCategory(
      ~variables={
        input: {
          inputData: {
            name: state.name,
            description: state.description,
            categoryId,
          },
        },
      },
      ~onCompleted=
        (res, err) => {
          switch (res.createModule) {
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

  <Form form labelCol={"span": 4} wrapperCol={"span": 20} name="category">
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
    <Form.Item wrapperCol={"offset": 4, "span": 20}>
      <Button
        loading=isCreatingCategory
        className="mr-4"
        _type=`primary
        onClick={_ => handleSubmit(state)}
        htmlType="submit">
        "Create"->string
      </Button>
      <Next.Link href="/[categoryId]/modules" _as={j|/$categoryId/modules|j}>
        <Button loading=isCreatingCategory> "Cancel"->string </Button>
      </Next.Link>
    </Form.Item>
  </Form>;
};