open Ant;
open React;
open Next;

module CreateTopicMutation = [%relay.mutation
  {|
  mutation FormTopicCreateMutation($input: CreateTopicInput!) {
    createTopic(input: $input) {
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

module SubjectsQuery = [%relay.query
  {|
    query FormTopicSubjectsQuery($filter: SubjectsFilter) {
      listSubjects(filter: $filter) {
        id
        name
      }
    }
|}
];

[@bs.deriving jsConverter]
type state = {
  subjectId: string,
  name: string,
  description: string,
  order: option(int),
};

[@react.component]
let make = (~categoryId="", ~subjectId=?) => {
  let (createTopic, isCreatingTopic) = CreateTopicMutation.use();

  let queryData =
    SubjectsQuery.use(
      ~variables={
        filter:
          Some({
            categoryId: Some(categoryId),
            moduleId: None,
            order: Some(`ASC),
          }),
      },
      (),
    );

  let form = Form.useForm()->Js.Array.unsafe_get(0);

  let resetFields = () => {
    form |> Form.resetFields();
  };

  let onFinish = values => {
    let state = stateFromJs(values);
    createTopic(
      ~variables={
        input: {
          inputData: {
            name: state.name,
            description: Some(state.description),
            order: state.order,
            subjectId: state.subjectId,
            content: None,
          },
        },
      },
      ~onCompleted=
        (res, err) => {
          switch (res.createTopic) {
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

  let subjects =
    switch (queryData.listSubjects) {
    | Some(module_) => module_
    | None => [||]
    };

  let returnHref =
    switch (subjectId) {
    | Some(_id) => "/[categoryId]/subjects/[subjectId]"
    | None => "/[categoryId]/subjects"
    };

  let returnAs =
    switch (subjectId) {
    | Some(subjectId) => {j|/$categoryId/subjects/$subjectId|j}
    | None => {j|/$categoryId/subjects|j}
    };

  <Form
    form
    labelCol={"span": 4}
    wrapperCol={"span": 20}
    name="subject"
    initialValues={"subjectId": subjectId}
    onFinish>
    <Form.Item
      label={"Subject"->string}
      rules=[|{"required": true, "message": "Subject is required"}|]
      name="subjectId">
      <Select>
        {subjects->Belt.Array.map(subject =>
           <Select.Option key={subject.id} value={subject.id}>
             subject.name->string
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
        loading=isCreatingTopic
        className="mr-4"
        _type=`primary
        htmlType="submit">
        "Create"->string
      </Button>
      <Link href=returnHref _as=returnAs>
        <Button loading=isCreatingTopic> "Cancel"->string </Button>
      </Link>
    </Form.Item>
  </Form>;
};