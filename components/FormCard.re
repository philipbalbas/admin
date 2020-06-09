open React;
open Ant;
open Next;

module Query = [%relay.query
  {|
    query FormCardChoicesQuery {
      listChoices {
        id
        content
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

type cardType = [ | `SINGLE | `MULTIPLE];

type state = {
  question: string,
  type_: cardType,
  rationale: option(string),
  topicId: string,
  examIds: array(string),
};

type action =
  | UpdateQuestion(string)
  | UpdateType(cardType)
  | UpdateRationale(string)
  | UpdateTopicId(string)
  | UpdateExamIds(array(string))
  | ToggleRationale(bool)
  | Clear;

let initialValues = {
  question: "",
  type_: `SINGLE,
  rationale: None,
  topicId: "",
  examIds: [||],
};

[@react.component]
let make = (~categoryId) => {
  let (state, dispatch) =
    React.useReducer(
      (state, action) => {
        switch (action) {
        | UpdateQuestion(question) => {...state, question}
        | UpdateType(type_) => {...state, type_}
        | UpdateRationale(rationale) => {
            ...state,
            rationale: Some(rationale),
          }
        | ToggleRationale(bool) => {
            ...state,
            rationale: bool ? Some("") : None,
          }
        | UpdateExamIds(examIds) => {...state, examIds}
        | UpdateTopicId(topicId) => {...state, topicId}
        | Clear => initialValues
        }
      },
      {
        question: "",
        type_: `SINGLE,
        rationale: Some(""),
        topicId: "",
        examIds: [||],
      },
    );

  let (rationaleActive, setRationaleActive) = React.useState(_ => true);

  let (createCard, isCreatingCard) = CreateCardMutation.use();
  let (upsertExams, isUpsertingExam) = UpsertCardExamsMutation.use();

  let [|form|] = Form.useForm();

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

  let topicSearch = text =>
    Fuse.make(topics, {"keys": [|"name"|], "useExtendedSearch": true})
    |> Fuse.search(text);

  let examSearch = text =>
    Fuse.make(exams, {"keys": [|"name"|], "useExtendedSearch": true})
    |> Fuse.search(text);

  let handleQuestion = text => dispatch(UpdateQuestion(text));
  let handleRationale = text => dispatch(UpdateRationale(text));

  let resetFields = () => {
    form |> Form.resetFields();
    dispatch(Clear);
  };

  let handleSubmit = state => {
    createCard(
      ~variables={
        input: {
          inputData: {
            question: state.question,
            topicId: state.topicId,
            type_: `SINGLE,
            rationale: state.rationale,
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
              // resetFields();
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

  let handleRationaleToggle = value => {
    setRationaleActive(_ => value);
    dispatch(ToggleRationale(value));
  };

  let loading = isCreatingCard || isUpsertingExam;

  <Form layout=`horizontal labelCol={"span": 8} wrapperCol={"span": 16}>
    <Form.Item label={<div> "Question"->string </div>}>
      <Slate.Editor onChange=handleQuestion />
    </Form.Item>
    <Form.Item label={<div> "Type"->string </div>}>
      <Radio.Group
        value={state.type_}
        onChange={e =>
          dispatch(UpdateType(ReactEvent.Synthetic.target(e)##value))
        }>
        <Radio value=`SINGLE> "Single Answer"->string </Radio>
        <Radio value=`MULTIPLE> "Multiple Choice"->string </Radio>
      </Radio.Group>
    </Form.Item>
    <Form.Item label={<div> "Topic"->string </div>}>
      <Select
        onChange={topicId => dispatch(UpdateTopicId(topicId))}
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
    <Form.Item label={<div> "Exam"->string </div>}>
      <Select
        onChange={examIds => dispatch(UpdateExamIds(examIds))}
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
    // <Form.Item label={<div> "Choices"->string </div>}>
    //   <Form.List name="names">
    //     {(fields, {add, remove}) => {
    //        <div>
    //          {fields->Belt.Array.mapWithIndex((i, field) =>
    //             <Spread props=field>
    //               <Form.Item>
    //                 <ChoiceDropdown
    //                   length={Js.Array.length(fields)}
    //                   field
    //                   add
    //                   remove
    //                   search
    //                 />
    //               </Form.Item>
    //             </Spread>
    //           )
    //           |> array}
    //          <Button type_=`dashed onClick={_ => {add()}}>
    //            <Icons.PlusOutlined />
    //            "Add field"->string
    //          </Button>
    //        </div>;
    //      }}
    //   </Form.List>
    // </Form.Item>
    <Form.Item label={<div> "Rationale"->string </div>}>
      {rationaleActive ? <Slate.Editor onChange=handleRationale /> : null}
      <Switch
        checked=rationaleActive
        onChange={(value, _e) => handleRationaleToggle(value)}
      />
    </Form.Item>
    <Form.Item wrapperCol={"offset": 8, "span": 16}>
      <Button loading onClick={_ => handleSubmit(state)}>
        {loading ? "Upating" : "Create"}->string
      </Button>
      <Link href="/[categoryId]/cards" _as={j|/$categoryId/cards|j}>
        <Button loading> "Cancel"->string </Button>
      </Link>
    </Form.Item>
  </Form>;
};