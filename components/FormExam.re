open Ant;
open React;

module CreateExamMutation = [%relay.mutation
  {|
    mutation FormExamCreateMutation($input: CreateExamInput! ) {
      createExam(input: $input) {
        result {
          id
          name
          description
          type_: type
          order
        }
      }
    }
  |}
];

type state = {
  name: string,
  description: string,
  type_: FormExamCreateMutation_graphql.enum_ExamType,
  order: option(int),
};

type action =
  | UpdateName(string)
  | UpdateDescription(string)
  | UpdateType(FormExamCreateMutation_graphql.enum_ExamType)
  | UpdateOrder(int)
  | Clear;

let initialValues = {
  name: "",
  description: "",
  type_: `COMPREHENSIVE,
  order: None,
};

[@react.component]
let make = (~categoryId="") => {
  let (state, dispatch) =
    useReducer(
      (state, action) =>
        switch (action) {
        | UpdateName(name) => {...state, name}
        | UpdateDescription(description) => {...state, description}
        | UpdateType(type_) => {...state, type_}
        | UpdateOrder(order) => {...state, order: Some(order)}
        | Clear => initialValues
        },
      initialValues,
    );

  let (createModule, isCreatingModule) = CreateExamMutation.use();

  let [|form|] = Form.useForm();

  let resetFields = () => {
    form |> Form.resetFields();
    dispatch(Clear);
  };

  let handleSubmit = state => {
    createModule(
      ~variables={
        input: {
          inputData: {
            name: state.name,
            description: state.description,
            categoryId,
            type_: state.type_,
            order: state.order,
          },
        },
      },
      ~onCompleted=
        (res, err) => {
          switch (res.createExam) {
          | Some(response) =>
            switch (response.result) {
            | Some(exam) =>
              let name = exam.name;
              Message.(message |> success({j| Exam $name created  |j}));
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
    <Form.Item
      label={"Type"->string}
      name="type_"
      rules=[|{"required": true, "message": "Type is required"}|]>
      <Select
        onChange={text => dispatch(UpdateType(text))}
        defaultValue={state.type_}>
        <Select.Option key="1" value=`COMPREHENSIVE>
          "Comprehensive"->string
        </Select.Option>
        <Select.Option key="2" value=`MOCK> "Mock"->string </Select.Option>
        <Select.Option key="3" value=`PRACTICE>
          "Practice"->string
        </Select.Option>
      </Select>
    </Form.Item>
    <Form.Item label={"Order"->string} name="order">
      <Input.Number
        onChange={value => dispatch(UpdateOrder(value))}
        _type="number"
      />
    </Form.Item>
    <Form.Item wrapperCol={"offset": 4, "span": 20}>
      <Button
        loading=isCreatingModule
        className="mr-4"
        _type=`primary
        onClick={_ => handleSubmit(state)}
        htmlType="submit">
        "Create"->string
      </Button>
      <Next.Link href="/[categoryId]/exams" _as={j|/$categoryId/exams|j}>
        <Button loading=isCreatingModule> "Cancel"->string </Button>
      </Next.Link>
    </Form.Item>
  </Form>;
};