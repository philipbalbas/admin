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

module UpdateExamMutation = [%relay.mutation
  {|
    mutation FormExamUpdateMutation($input: UpdateExamInput!) {
      updateExam(input: $input) {
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

module TopicsQuery = [%relay.query
  {|
    query FormExamTopicsQuery($categoryId: ID!) {
      listTopics(filter: {
        categoryId: $categoryId
      }) {
        id
        name
      }
    }
  |}
];

module UpsertExamTopicsMutation = [%relay.mutation
  {|
    mutation FormExamUpsertTopicsMutation($input: UpsertExamTopicsInput!) {
      upsertExamTopics(input: $input) {
        result {
          id
          name
        }
      }
    }
  |}
];

module UpsertExamCardsMutation = [%relay.mutation
  {|
    mutation FormExamUpsertCardsMutation($input: UpsertExamCardsInput!) {
      upsertExamCards(input: $input) {
        result {
          id
          name
        }
      }
    }
|}
];

module ExamQuery = [%relay.query
  {|
    query FormExamQuery($id: ID!) {
      getExam(id: $id) {
        name
        description
        type_: type
        order
        topics {
          id
        }
        cards {
          key: id
        }
      }
    }
  |}
];

module CardsQuery = [%relay.query
  {|
    query FormExamCardsQuery($categoryId: ID!) {
      listCards(filter: {
        categoryId: $categoryId
      }) {
        key: id
        question
      }
    }
  |}
];

type mutationType = [ | `CREATE | `UPDATE];

[@bs.deriving jsConverter]
type state = {
  name: string,
  description: string,
  type_: FormExamCreateMutation_graphql.enum_ExamType,
  order: option(int),
  topicIds: array(string),
  cardIds: array(string),
};
module CardsTableTransfer = {
  [@react.component]
  let make = (~dataSource, ~initTargetKeys, ~onChange=?) => {
    let (targetKeys, setTargetKeys) = useState(_ => initTargetKeys);

    useEffect1(
      () => {
        switch (onChange) {
        | Some(onChange) => onChange(targetKeys)
        | None => ()
        };
        Some(() => ());
      },
      [|targetKeys|],
    );

    let columns:
      array(Table.column(string, CardsQuery.Types.response_listCards)) = [|
      {
        title: "Questions",
        dataIndex: [|"question"|],
        key: "question",
        render: None,
        onCell: None,
      },
    |];

    let cardSearch = text =>
      Fuse.make(
        dataSource,
        {"keys": [|"question"|], "useExtendedSearch": true},
      )
      |> Fuse.search(text);

    <TableTransfer
      dataSource
      filterOption={(value, option) => {
        let res = cardSearch(value);
        res->Belt.Array.some(c => {c##item##key == option##key});
      }}
      titles=[|"Cards"->string, "Active"->string|]
      targetKeys
      columns
      onChange={(nextTargetKeys, _, _) => {setTargetKeys(nextTargetKeys)}}
    />;
  };
};

[@react.component]
let make = (~categoryId="", ~examId="", ~mutationType: mutationType) => {
  let (createExam, isCreatingExam) = CreateExamMutation.use();
  let (updateExam, isUpdatingExam) = UpdateExamMutation.use();
  let (upsertTopics, isUpsertingTopics) = UpsertExamTopicsMutation.use();
  let (upsertCards, isUpsertingCards) = UpsertExamCardsMutation.use();

  let (form, _) = Form.useForm();
  let examQueryData = ExamQuery.use(~variables={id: examId}, ());

  let topicsQueryData =
    TopicsQuery.use(
      ~variables={
        {categoryId: categoryId};
      },
      (),
    );

  let cardsQueryData =
    CardsQuery.use(~variables={categoryId: categoryId}, ());

  let cards =
    switch (cardsQueryData.listCards) {
    | Some(cards) => cards
    | None => [||]
    };

  let exam =
    switch (examQueryData.getExam) {
    | Some(exam) => exam
    | None => {
        name: "",
        description: "",
        type_: `COMPREHENSIVE,
        order: None,
        topics: None,
        cards: None,
      }
    };

  let examCardIds =
    exam.cards
    ->Belt.Option.mapWithDefault([||], cards => cards)
    ->Belt.Array.map(card => card.key);

  let topics =
    switch (topicsQueryData.listTopics) {
    | Some(topics) => topics
    | None => [||]
    };

  let topicSearch = text =>
    Fuse.make(topics, {"keys": [|"name"|], "useExtendedSearch": true})
    |> Fuse.search(text);

  let resetFields = () => {
    switch (mutationType) {
    | `CREATE => form |> Form.resetFields()
    | `UPDATE => ()
    };
  };

  let createMutation = state =>
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
              upsertTopics(
                ~variables={
                  input: {
                    inputData: {
                      topicIds: state.topicIds,
                      examId: exam.id,
                    },
                  },
                },
                (),
              )
              |> ignore;
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

  let updateMutation = state =>
    updateExam(
      ~variables={
        input: {
          inputData: {
            id: examId,
            name: Some(state.name),
            description: Some(state.description),
            type_: Some(state.type_),
            order: state.order,
          },
        },
      },
      ~onCompleted=
        (res, err) => {
          switch (res.updateExam) {
          | Some(response) =>
            switch (response.result) {
            | Some(exam) =>
              let name = exam.name;
              Message.(message |> success({j| Exam $name updated  |j}));
              upsertTopics(
                ~variables={
                  input: {
                    inputData: {
                      topicIds: state.topicIds,
                      examId: exam.id,
                    },
                  },
                },
                (),
              )
              |> ignore;

              upsertCards(
                ~variables={
                  input: {
                    inputData: {
                      cardIds: state.cardIds,
                      examId: exam.id,
                    },
                  },
                },
                (),
              )
              |> ignore;

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

  let onFinish = values => {
    let state = stateFromJs(values);
    switch (mutationType) {
    | `CREATE => createMutation(state)
    | `UPDATE => updateMutation(state)
    };
  };

  let buttonText =
    switch (mutationType) {
    | `CREATE => "Create"
    | `UPDATE => "Update"
    };

  let loading = isCreatingExam || isUpdatingExam || isUpsertingTopics;

  <Form
    form
    labelCol={"span": 4}
    wrapperCol={"span": 20}
    name="category"
    initialValues={
      "name": exam.name,
      "description": exam.description,
      "type_": exam.type_,
      "order": exam.order,
      "topicIds":
        exam.topics
        ->Belt.Option.mapWithDefault([||], topic => topic)
        ->Belt.Array.map(topic => topic.id),
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
    <Form.Item label={<div> "Topic"->string </div>} name="topicIds">
      <Select
        mode=`multiple
        showSearch=true
        filterOption={(value, option) => {
          let res = topicSearch(value);
          res->Belt.Array.some(c => {c##item##id == option##key});
        }}>
        {topics->Belt.Array.map(topic =>
           <Select.Option key={topic.id} value={topic.id}>
             {topic.name}->string
           </Select.Option>
         )}
      </Select>
    </Form.Item>
    {mutationType == `UPDATE
       ? <Form.Item label={"Cards"->string} name="cardIds">
           <CardsTableTransfer dataSource=cards initTargetKeys=examCardIds />
         </Form.Item>
       : React.null}
    <Form.Item wrapperCol={"offset": 4, "span": 20}>
      <Button loading className="mr-4" _type=`primary htmlType="submit">
        buttonText->string
      </Button>
      <Button loading onClick={_ => Next.Router.router |> Next.Router.back()}>
        "Cancel"->string
      </Button>
    </Form.Item>
  </Form>;
};