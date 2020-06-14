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

module UpdateTopicMutation = [%relay.mutation
  {|
    mutation FormTopicUpdateMutation($input: UpdateTopicInput!) {
      updateTopic(input: $input) {
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

module TopicQuery = [%relay.query
  {|
    query FormTopicQuery($id: ID!) {
      getTopic(id: $id) {
        name
        description
        order
        subject {
          id
        }
      }
    }
|}
];

type mutationType = [ | `CREATE | `UPDATE];

[@bs.deriving jsConverter]
type state = {
  subjectId: string,
  name: string,
  description: string,
  order: option(int),
};

[@react.component]
let make =
    (~categoryId="", ~subjectId=?, ~topicId="", ~mutationType: mutationType) => {
  let (createTopic, isCreatingTopic) = CreateTopicMutation.use();
  let (updateTopic, isUpdatingTopic) = UpdateTopicMutation.use();

  let subjectsQueryData =
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

  let topicQueryData = TopicQuery.use(~variables={id: topicId}, ());

  let topic =
    switch (topicQueryData.getTopic) {
    | Some(topic) => topic
    | None => {
        name: "",
        description: None,
        order: None,
        subject: {
          id: "",
        },
      }
    };

  let passedSubjectId =
    switch (mutationType) {
    | `CREATE => Belt.Option.getWithDefault(subjectId, "")
    | `UPDATE => topic.subject.id
    };

  let form = Form.useForm()->Js.Array.unsafe_get(0);

  let resetFields = () => {
    form |> Form.resetFields();
  };

  let createMutation = state => {
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
              Message.(message |> success({j| Topic $name created  |j}));
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
    updateTopic(
      ~variables={
        input: {
          inputData: {
            name: Some(state.name),
            description: Some(state.description),
            order: state.order,
            subjectId: Some(state.subjectId),
            id: topicId,
          },
        },
      },
      ~onCompleted=
        (res, err) => {
          switch (res.updateTopic) {
          | Some(response) =>
            switch (response.result) {
            | Some(category) =>
              let name = category.name;
              Message.(message |> success({j| Topic $name created  |j}));
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

  let subjects =
    switch (subjectsQueryData.listSubjects) {
    | Some(module_) => module_
    | None => [||]
    };

  let returnHref =
    switch (subjectId) {
    | Some(_id) => "/[categoryId]/subjects/[subjectId]"
    | None => "/[categoryId]/topics"
    };

  let returnAs =
    switch (subjectId) {
    | Some(subjectId) => {j|/$categoryId/subjects/$subjectId|j}
    | None => {j|/$categoryId/topics|j}
    };

  let buttonText =
    switch (mutationType) {
    | `CREATE => "Create"
    | `UPDATE => "Update"
    };

  let loading = isCreatingTopic || isUpdatingTopic;

  <Form
    form
    labelCol={"span": 4}
    wrapperCol={"span": 20}
    name="subject"
    initialValues={
      "subjectId": passedSubjectId,
      "name": topic.name,
      "description": topic.description,
      "order": topic.order,
    }
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
      <Button loading className="mr-4" _type=`primary htmlType="submit">
        buttonText->string
      </Button>
      <Link href=returnHref _as=returnAs>
        <Button loading> "Cancel"->string </Button>
      </Link>
    </Form.Item>
  </Form>;
};