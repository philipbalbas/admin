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

[@bs.deriving jsConverter]
type state = {
  name: string,
  description: string,
  type_: FormExamCreateMutation_graphql.enum_ExamType,
  order: option(int),
};

[@react.component]
let make = (~categoryId="") => {
  let (createExam, isCreatingExam) = CreateExamMutation.use();

  let form = Form.useForm()->Js.Array.unsafe_get(0);

  let resetFields = () => {
    form |> Form.resetFields();
  };

  let onFinish = values => {
    let state = stateFromJs(values);
    createExam(
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

  <Form
    form
    labelCol={"span": 4}
    wrapperCol={"span": 20}
    name="category"
    initialValues={"type_": `COMPREHENSIVE}
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
    <Form.Item
      label={"Type"->string}
      name="type_"
      rules=[|{"required": true, "message": "Type is required"}|]>
      <Radio.Group>
        <Radio.Button key="1" value=`COMPREHENSIVE>
          "Comprehensive"->string
        </Radio.Button>
        <Radio.Button key="2" value=`MOCK> "Mock"->string </Radio.Button>
        <Radio.Button key="3" value=`PRACTICE>
          "Practice"->string
        </Radio.Button>
      </Radio.Group>
    </Form.Item>
    <Form.Item label={"Order"->string} name="order">
      <Input.Number _type="number" />
    </Form.Item>
    <Form.Item wrapperCol={"offset": 4, "span": 20}>
      <Button
        loading=isCreatingExam
        className="mr-4"
        _type=`primary
        htmlType="submit">
        "Create"->string
      </Button>
      <Next.Link href="/[categoryId]/exams" _as={j|/$categoryId/exams|j}>
        <Button loading=isCreatingExam> "Cancel"->string </Button>
      </Next.Link>
    </Form.Item>
  </Form>;
};