open React;
open Ant;
open Next;

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
  let make = (~dataSource, ~initTargetKeys, ~onChange) => {
    let (targetKeys, setTargetKeys) = useState(_ => initTargetKeys);
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

    <div>
      <FormCardTableTransfer
        dataSource
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
};

[@react.component]
let make = (~categoryId) => {
  let (rationaleActive, setRationaleActive) = useState(_ => true);
  let (selectedChoiceIds, setSelectedChoiceIds) = useState(_ => [||]);
  let (createCard, isCreatingCard) = CreateCardMutation.use();
  let (upsertExams, isUpsertingExam) = UpsertCardExamsMutation.use();
  let (upsertChoices, isUpsertingChoices) = UpsertCardChoicesMutation.use();
  let (upsertAnswers, isUpsertingAnswers) = UpsertCardAnswersMutation.use();

  let (form, _) = Form.useForm();

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

  let choiceSearch = text =>
    Fuse.make(choices, {"keys": [|"content"|], "useExtendedSearch": true})
    |> Fuse.search(text);

  let resetFields = () => {
    form |> Form.resetFields();
  };

  let onFinish = values => {
    let state = stateFromJs(values);
    createCard(
      ~variables={
        input: {
          inputData: {
            question: state.question,
            topicId: state.topicId,
            type_: `SINGLE,
            rationale: state.rationale,
            level: `UNDERSTAND,
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
  };

  let loading =
    isCreatingCard
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

  <Form
    form
    name="card"
    layout=`horizontal
    labelCol={"span": 2}
    wrapperCol={"span": 22}
    initialValues={"type_": `SINGLE, "choiceIds": [||]}
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
        initTargetKeys=[||]
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
        {loading ? "Upating" : "Create"}->string
      </Button>
      <Link href="/[categoryId]/cards" _as={j|/$categoryId/cards|j}>
        <Button loading> "Cancel"->string </Button>
      </Link>
    </Form.Item>
  </Form>;
};