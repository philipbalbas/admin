open Ant;
open React;

module CreateCategoryMutation = [%relay.mutation
  {|
    mutation FormCategoryCreateMutation($input: CreateCategoryInput!) {
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

module UpdateCategoryMutation = [%relay.mutation
  {|
    mutation FormCategoryUpdateMutation($input: UpdateCategoryInput!) {
      updateCategory(input: $input) {
        result {
          id
          name
          description
        }
      }
    }
|}
];

module GetCategoryQuery = [%relay.query
  {|
    query FormCategoryQuery($id: ID!) {
      getCategory(id: $id) {
        name
        description
      }
    }
  |}
];

[@bs.deriving jsConverter]
type state = {
  name: string,
  description: string,
};

type mutationType = [ | `CREATE | `UPDATE];

[@react.component]
let make = (~categoryId="", ~mutationType: mutationType) => {
  let (createCategory, isCreatingCategory) = CreateCategoryMutation.use();
  let (updateCategory, isUpdatingCategory) = UpdateCategoryMutation.use();
  let queryData = GetCategoryQuery.use(~variables={id: categoryId}, ());

  let category =
    switch (queryData.getCategory) {
    | Some(category) => category
    | None => {name: "", description: ""}
    };

  let title =
    switch (mutationType) {
    | `CREATE => "Create"
    | `UPDATE => "Update"
    };

  let (form, _) = Form.useForm();

  let resetFields = () => {
    form |> Form.resetFields();
  };

  let createMutation = state => {
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

  let updateMutation = state => {
    updateCategory(
      ~variables={
        input: {
          inputData: {
            name: Some(state.name),
            description: Some(state.description),
            id: categoryId,
          },
        },
      },
      ~onCompleted=
        (res, err) => {
          switch (res.updateCategory) {
          | Some(response) =>
            switch (response.result) {
            | Some(category) =>
              let name = category.name;
              Message.(message |> success({j| Category $name updated  |j}));
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

  let loading = isCreatingCategory || isUpdatingCategory;

  <div className="container mx-auto p-4 w-4/6">
    <div className="text-2xl mb-4"> {j|$title Category|j}->string </div>
    <Form
      form
      labelCol={"span": 4}
      wrapperCol={"span": 20}
      name="category"
      initialValues={
        "name": category.name,
        "description": category.description,
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
      <Form.Item wrapperCol={"offset": 4, "span": 20}>
        <Button loading className="mr-4" _type=`primary htmlType="submit">
          title->string
        </Button>
        <Next.Link href="/" _as="/">
          <Button loading> "Cancel"->string </Button>
        </Next.Link>
      </Form.Item>
    </Form>
  </div>;
};