open React;
open Ant;
open Next;

module CardQuery = [%relay.query
  {|
    query FormCardQuery($id: ID!) {
      getCard(id: $id) {
        question
        rationale
        choices {
          content
          id
        }
        answers {
          content
          id
        }
        exams {
          name
          id
        }
        topic {
          id
          name
        }
        level
        type_: type
      }
    }
  |}
];

module TopicsQuery = [%relay.query
  {|
    query FormCardTopicsQuery($categoryId: ID!) {
      listTopics(filter: {
        categoryId: $categoryId
      }) {
        id
        name
      }
    }
  |}
];

module ExamsQuery = [%relay.query
  {|
    query FormCardExamsQuery($categoryId: ID!) {
      listExams(filter: {
        categoryId: $categoryId
      }) {
        id
        name
      }
    }
|}
];

module ChoicesQuery = [%relay.query
  {|
  query FormCardChoicesQuery {
    listChoices {
      key: id
      content
    }
  }
|}
];

module CreateCardMutation = [%relay.mutation
  {|
    mutation FormCardCreateMutation($input:  CreateCardInput!) {
      createCard(input: $input) {
        result {
          id
          question
          rationale
          type_: type
          level
        }
      }
    }
  |}
];

module UpdateCardMutation = [%relay.mutation
  {|
    mutation FormCardUpdateMutation($input: UpdateCardInput!) {
      updateCard(input: $input) {
        result {
          id
          question
          rationale
          type_: type
          level
        }
      }
    }
  |}
];

module UpsertCardExamsMutation = [%relay.mutation
  {|
    mutation FormCardUpsertExamsMutation($input: UpsertCardExamsInput!) {
      upsertCardExams(input: $input) {
        result {
          id
          question
        }
      }
    }
  |}
];

module UpsertCardChoicesMutation = [%relay.mutation
  {|
    mutation FormCardUpsertChoicesMutation($input: UpsertCardChoicesInput!) {
      upsertCardChoices(input: $input) {
        result {
          id
          question
        }
      }
    }
  |}
];

module UpsertCardAnswersMutation = [%relay.mutation
  {|
  mutation FormCardUpsertAnswersMutation($input: UpsertCardAnswersInput!) {
    upsertCardAnswers(input: $input) {
      result {
        id
        question
      }
    }
  }
|}
];

module ChoicesTableTransfer = {
  [@react.component]
  let make = (~dataSource, ~value, ~onChange) => {
    let (targetKeys, setTargetKeys) = useState(_ => value);
    let (modalVisible, setModalVisible) = useState(_ => false);

    let onCancel = () => {
      setModalVisible(_ => false);
    };

    useEffect1(
      () => {
        onChange(targetKeys);
        Some(() => ());
      },
      [|targetKeys|],
    );

    let choiceSearch = text =>
      Fuse.make(
        dataSource,
        {"keys": [|"content"|], "useExtendedSearch": true},
      )
      |> Fuse.search(text);

    <div>
      <FormCardTableTransfer
        dataSource
        filterOption={(value, option) => {
          let res = choiceSearch(value);
          res->Belt.Array.some(c => {c##item##key == option##key});
        }}
        titles=[|"Choices List"->string, "Active Choices"->string|]
        targetKeys
        onChange={(nextTargetKeys, _, _) => {setTargetKeys(nextTargetKeys)}}
      />
      <Button _type=`dashed onClick={_ => {setModalVisible(_ => true)}}>
        <FontAwesomeIcon icon=FontAwesomeIcon.faPlus />
        "Create New Choice"->string
      </Button>
      <ModalChoiceForm visible=modalVisible onCancel mutationType=`CREATE />
    </div>;
  };
};

type cardType = [ | `SINGLE | `MULTIPLE];

[@bs.deriving jsConverter]
type state = {
  question: string,
  type_: cardType,
  rationale: option(string),
  topicId: string,
  examIds: array(string),
  choiceIds: array(string),
  answerIds: array(string),
  level: FormCardCreateMutation_graphql.enum_CardLevel,
};

type mutationType = [ | `CREATE | `UPDATE];

[@react.component]
let make = (~categoryId, ~cardId="", ~mutationType: mutationType) => {
  let (rationaleActive, setRationaleActive) = useState(_ => true);
  let (selectedChoiceIds, setSelectedChoiceIds) = useState(_ => [||]);
  let (createCard, isCreatingCard) = CreateCardMutation.use();
  let (updateCard, isUpdatingCard) = UpdateCardMutation.use();
  let (upsertExams, isUpsertingExam) = UpsertCardExamsMutation.use();
  let (upsertChoices, isUpsertingChoices) = UpsertCardChoicesMutation.use();
  let (upsertAnswers, isUpsertingAnswers) = UpsertCardAnswersMutation.use();

  let (form, _) = Form.useForm();

  let cardQueryData = CardQuery.use(~variables={id: cardId}, ());

  let card =
    switch (cardQueryData.getCard) {
    | Some(card) => card
    | None => {
        question: "",
        rationale: None,
        level: `ANALYSE,
        type_: `SINGLE,
        choices: None,
        answers: None,
        exams: None,
        topic: {
          id: "",
          name: "",
        },
      }
    };

  let topicsQueryData =
    TopicsQuery.use(
      ~variables={
        {categoryId: categoryId};
      },
      (),
    );

  let examsQueryData =
    ExamsQuery.use(
      ~variables={
        {categoryId: categoryId};
      },
      (),
    );

  let choicesQueryData = ChoicesQuery.use(~variables=(), ());

  let topics =
    switch (topicsQueryData.listTopics) {
    | Some(topics) => topics
    | None => [||]
    };

  let exams =
    switch (examsQueryData.listExams) {
    | Some(exams) => exams
    | None => [||]
    };

  let choices =
    switch (choicesQueryData.listChoices) {
    | Some(choices) => choices
    | None => [||]
    };

  let topicSearch = text =>
    Fuse.make(topics, {"keys": [|"name"|], "useExtendedSearch": true})
    |> Fuse.search(text);

  let examSearch = text =>
    Fuse.make(exams, {"keys": [|"name"|], "useExtendedSearch": true})
    |> Fuse.search(text);

  let resetFields = () => {
    switch (mutationType) {
    | `CREATE => form |> Form.resetFields()
    | `UPDATE => ()
    };
  };

  let createMutation = state =>
    createCard(
      ~variables={
        input: {
          inputData: {
            question: state.question,
            topicId: state.topicId,
            type_: `SINGLE,
            rationale: state.rationale,
            level: state.level,
          },
        },
      },
      ~onCompleted=
        (res, err) => {
          switch (res.createCard) {
          | Some(response) =>
            switch (response.result) {
            | Some(card) =>
              let question = card.question;
              Message.(message |> success({j| Card $question created  |j}));
              upsertExams(
                ~variables={
                  input: {
                    inputData: {
                      examIds: state.examIds,
                      cardId: card.id,
                    },
                  },
                },
                (),
              )
              |> ignore;

              upsertChoices(
                ~variables={
                  input: {
                    inputData: {
                      cardId: card.id,
                      choiceIds: state.choiceIds,
                    },
                  },
                },
                (),
              )
              |> ignore;

              upsertAnswers(
                ~variables={
                  input: {
                    inputData: {
                      cardId: card.id,
                      answerIds: state.answerIds,
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
    updateCard(
      ~variables={
        input: {
          inputData: {
            id: cardId,
            question: Some(state.question),
            topicId: Some(state.topicId),
            type_: Some(`SINGLE),
            rationale: state.rationale,
            level: Some(state.level),
          },
        },
      },
      ~onCompleted=
        (res, err) => {
          switch (res.updateCard) {
          | Some(response) =>
            switch (response.result) {
            | Some(card) =>
              let question = card.question;
              Message.(message |> success({j| Card $question created  |j}));
              upsertExams(
                ~variables={
                  input: {
                    inputData: {
                      examIds: state.examIds,
                      cardId: card.id,
                    },
                  },
                },
                (),
              )
              |> ignore;

              upsertChoices(
                ~variables={
                  input: {
                    inputData: {
                      cardId: card.id,
                      choiceIds: state.choiceIds,
                    },
                  },
                },
                (),
              )
              |> ignore;

              upsertAnswers(
                ~variables={
                  input: {
                    inputData: {
                      cardId: card.id,
                      answerIds: state.answerIds,
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

  let onFinish = values => {
    let state = stateFromJs(values);
    switch (mutationType) {
    | `CREATE => createMutation(state)
    | `UPDATE => updateMutation(state)
    };
  };

  let loading =
    isCreatingCard
    || isUpdatingCard
    || isUpsertingExam
    || isUpsertingChoices
    || isUpsertingAnswers;

  let selectedChoices =
    choices
    ->Belt.List.fromArray
    ->Belt.List.keep(choice =>
        selectedChoiceIds |> Js.Array.includes(choice.key)
      )
    ->Belt.List.toArray;

  let handleValidator = (_, values, cb) =>
    if (Belt.Array.length(values) > 1) {
      cb("No more than 1 answer");
    } else {
      Js.Promise.resolve();
    };

  let buttonText =
    switch (mutationType) {
    | `CREATE => "Create"
    | `UPDATE => "Update"
    };

  <Form
    form
    name="card"
    layout=`horizontal
    labelCol={"span": 2}
    wrapperCol={"span": 22}
    initialValues={
      "question": card.question,
      "rationale": card.rationale,
      "type_": card.type_,
      "level": card.level,
      "answerIds":
        card.answers
        ->Belt.Option.mapWithDefault([||], answer => answer)
        ->Belt.Array.map(answer => answer.id),
      "choiceIds":
        card.choices
        ->Belt.Option.mapWithDefault([||], choice => choice)
        ->Belt.Array.map(choice => choice.id),
      "examIds":
        card.exams
        ->Belt.Option.mapWithDefault([||], exam => exam)
        ->Belt.Array.map(exam => exam.id),
      "topicId": card.topic.id,
    }
    onFinish>
    <Form.Item label={<div> "Question"->string </div>} name="question">
      <Slate.Editor />
    </Form.Item>
    <Form.Item label={<div> "Type"->string </div>} name="type_">
      <Radio.Group>
        <Radio.Button value=`SINGLE> "Single Answer"->string </Radio.Button>
        <Radio.Button value=`MULTIPLE>
          "Multiple Choice"->string
        </Radio.Button>
      </Radio.Group>
    </Form.Item>
    <Form.Item label={<div> "Level"->string </div>} name="level">
      <Radio.Group>
        <Radio.Button value=`REMEMBER> "Remember"->string </Radio.Button>
        <Radio.Button value=`UNDERSTAND> "Understand"->string </Radio.Button>
        <Radio.Button value=`APPLY> "Apply"->string </Radio.Button>
        <Radio.Button value=`ANALYSE> "Analyse"->string </Radio.Button>
        <Radio.Button value=`EVALUTE> "Evaluate"->string </Radio.Button>
        <Radio.Button value=`CREATE> "Create"->string </Radio.Button>
      </Radio.Group>
    </Form.Item>
    <Form.Item label={<div> "Topic"->string </div>} name="topicId">
      <Select
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
    <Form.Item label={<div> "Exams"->string </div>} name="examIds">
      <Select
        showSearch=true
        mode=`multiple
        filterOption={(value, option) => {
          let res = examSearch(value);
          res->Belt.Array.some(c => {c##item##id == option##key});
        }}>
        {exams->Belt.Array.map(exam =>
           <Select.Option key={exam.id} value={exam.id}>
             {exam.name}->string
           </Select.Option>
         )}
      </Select>
    </Form.Item>
    <Form.Item label={"Choices"->string} name="choiceIds">
      <ChoicesTableTransfer
        dataSource=choices
        value={
          card.choices
          ->Belt.Option.mapWithDefault([||], choice => choice)
          ->Belt.Array.map(choice => choice.id)
        }
        onChange={values => setSelectedChoiceIds(_ => values)}
      />
    </Form.Item>
    <Form.Item
      label={"Answer"->string}
      name="answerIds"
      rules=[|{"validator": handleValidator}|]>
      <Select mode=`multiple>
        {selectedChoices->Belt.Array.map(choice =>
           <Select.Option key={choice.key} value={choice.key}>
             choice.content->string
           </Select.Option>
         )}
      </Select>
    </Form.Item>
    <Form.Item label={<div> "Rationale"->string </div>} name="rationale">
      <Slate.Editor />
    </Form.Item>
    <Form.Item wrapperCol={"offset": 2, "span": 22}>
      <Button className="mr-4" _type=`primary htmlType="submit" loading>
        {loading ? "Upating" : buttonText}->string
      </Button>
      <Link href="/[categoryId]/cards" _as={j|/$categoryId/cards|j}>
        <Button loading> "Cancel"->string </Button>
      </Link>
    </Form.Item>
  </Form>;
};
