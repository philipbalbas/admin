open React;
open Ant;
open Next;

module Query = [%relay.query
  {|
    query ListCardsQuery($filter: CardFilter) {
      listCards(filter: $filter) {
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
        topic {
          name
        }
        exams {
          id
          name
        }
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
let make = (~categoryId="") => {
  let filter: Query.Types.cardFilter = {
    categoryId: Some(categoryId),
    examId: None,
    topicId: None,
    level: None,
  };

  let queryData = Query.use(~variables={filter: Some(filter)}, ());

  let dataSource =
    switch (queryData.listCards) {
    | Some(cards) => cards
    | _ => [||]
    };

  let columns:
    array(Table.column('a, ListCardsQuery_graphql.Types.response_listCards)) = [|
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
      title: "Type",
      dataIndex: [|"type_"|],
      key: "type_",
      render:
        Some((_, row, _) => {stringifyCardType(row.type_)->React.string}),
      onCell: None,
    },
    {
      title: "Topic",
      dataIndex: [|"topic", "name"|],
      key: "",
      render: None,
      onCell: None,
    },
    {
      title: "Exams",
      dataIndex: [|"exams"|],
      key: "tags",
      render:
        Some(
          (_, row, _) => {
            let exams =
              switch (row.exams) {
              | Some(exams) => exams
              | None => [||]
              };

            exams->Belt.Array.map(exam =>
              <Tag key={exam.id}> exam.name->string </Tag>
            )
            |> array;
          },
        ),
      onCell: None,
    },
  |];

  let expandedRowRender =
      (item: ListCardsQuery_graphql.Types.response_listCards, _i) => {
    let answers =
      Belt.(
        Option.mapWithDefault(item.answers, [||], arr => arr)
        ->Array.map(answer => answer.id)
      );

    let choiceColumn:
      array(
        Table.column(
          string,
          ListCardsQuery_graphql.Types.response_listCards_choices,
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

  <>
    <div className="flex justify-between items-start">
      <div className="font-bold text-2xl mb-8"> "Cards Page"->string </div>
      <Link
        href="/[categoryId]/cards/create" _as={j|/$categoryId/cards/create|j}>
        <Button
          _type=`primary
          style={"display": "inline-flex", "alignItems": "center"}
          icon={<Icons.PlusOutlined />}>
          "Create Card"->string
        </Button>
      </Link>
    </div>
    <Table
      dataSource
      columns
      pagination=false
      rowKey={item => item##id}
      expandable={
        ...Table.defaultExpandable,
        expandedRowRender: Some(expandedRowRender),
      }
    />
  </>;
};