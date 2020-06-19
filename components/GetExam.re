open React;
open Ant;
open Next;

module ExamQuery = [%relay.query
  {|
    query GetExamQuery($id: ID!) {
      getExam(id: $id) {
        id
        name
        description
        cards {
          id
          question
          type_: type
          rationale
          choices {
            content
            id
          }
          answers {
            content
            id
          }
        }
        topics {
          id
          name
        }
      }
    }
  |}
];

module CardsQuery = [%relay.query
  {|
    query GetExamCardsQuery($id: ID!) {
      listCards(filter: {
        categoryId: $id
      }) {
        id
        question
      }
    }
|}
];

let stringifyCardType = type_ =>
  switch (type_) {
  | `SINGLE => "Single"
  | `MULTIPLE => "Multiple"
  | _ => "None"
  };

[@react.component]
let make = (~examId="", ~categoryId) => {
  let examQueryData = ExamQuery.use(~variables={id: examId}, ());

  switch (examQueryData.getExam) {
  | Some(exam) =>
    let dataSource =
      switch (exam.cards) {
      | Some(cards) => cards
      | None => [||]
      };

    let columns:
      array(
        Table.column('a, GetExamQuery_graphql.Types.response_getExam_cards),
      ) = [|
      {
        title: "Question",
        dataIndex: [|"question"|],
        key: "question",
        render: None,
        onCell: None,
      },
      {
        title: "Rationale",
        dataIndex: [|"rationale"|],
        key: "rationale",
        render: None,
        onCell: None,
      },
      {
        title: "Level",
        dataIndex: [|"level"|],
        key: "level",
        render: None,
        onCell: None,
      },
      {
        title: "Type",
        dataIndex: [|"type_"|],
        key: "type_",
        render:
          Some((_, row, _) => {stringifyCardType(row.type_)->React.string}),
        onCell: None,
      },
    |];

    let expandedRowRender =
        (item: GetExamQuery_graphql.Types.response_getExam_cards, _) => {
      let answers =
        Belt.(
          Option.mapWithDefault(item.answers, [||], arr => arr)
          ->Array.map(answer => answer.id)
        );

      let choiceColumn:
        array(
          Table.column(
            string,
            GetExamQuery_graphql.Types.response_getExam_cards_choices,
          ),
        ) = [|
        {
          title: "Choices",
          dataIndex: [|"content"|],
          key: "content",
          render:
            Some(
              (text, row, _) => {
                let id = row.id;
                let isAnswer = Js.Array.includes(id, answers);
                let className = isAnswer ? "text-green-600" : "text-red-600";
                <div className> text->string </div>;
              },
            ),
          onCell: None,
        },
      |];

      let dataSource =
        switch (item.choices) {
        | Some(choices) => choices
        | None => [||]
        };

      <Table
        columns=choiceColumn
        dataSource
        pagination=false
        rowKey={item => item##id}
      />;
    };

    <div>
      <div className="flex justify-between items-start">
        <div className="mb-8">
          <div className="font-bold text-2xl"> exam.name->string </div>
          <div> exam.description->string </div>
        </div>
        <div className="flex">
          <Button
            onClick={_ => Next.Router.router |> Next.Router.back()}
            className="mr-4"
            htmlType="submit"
            icon={<Icons.PlusOutlined />}>
            "Edit Exam"->string
          </Button>
          <Link href="" _as="">
            <Button
              _type=`primary
              style={"display": "inline-flex", "alignItems": "center"}
              icon={<Icons.PlusOutlined />}>
              "Add New Card"->string
            </Button>
          </Link>
        </div>
      </div>
      <Table
        dataSource
        columns
        rowKey={item => item##id}
        expandable={
          ...Table.defaultExpandable,
          expandedRowRender: Some(expandedRowRender),
        }
      />
    </div>;
  | None => React.null
  };
};