open React;
open Ant;
open Next;

module Query = [%relay.query
  {|
    query ListExamsQuery($categoryId: ID!) {
      listExams(filter: {
        categoryId: $categoryId
      }) {
        id
        name
        description
        type_: type
        order
        topics {
          id
          name
        }
      }
    }
  |}
];

let stringifyExamType = type_ =>
  switch (type_) {
  | `COMPREHENSIVE => "Comprehensive"
  | `MOCK => "Mock"
  | `PRACTICE => "Practice"
  | _ => "None"
  };

[@react.component]
let make = (~categoryId="") => {
  let queryData = Query.use(~variables={categoryId: categoryId}, ());

  switch (queryData.listExams) {
  | Some(exams) =>
    let columns:
      array(
        Table.column('a, ListExamsQuery_graphql.Types.response_listExams),
      ) = [|
      {
        title: "Exams",
        dataIndex: [|"name"|],
        key: "name",
        render:
          Some(
            (text, row, _) => {
              let content = Js.String.make(text);
              let examId = row.id;
              <Link
                href="/[categoryId]/exams/[examId]"
                _as={j|/$categoryId/exams/$examId|j}>
                <a> content->React.string </a>
              </Link>;
            },
          ),
      },
      {
        title: "Type",
        dataIndex: [|"type_"|],
        key: "id",
        render: Some((text, _, _) => stringifyExamType(text)->React.string),
      },
      {
        title: "Description",
        dataIndex: [|"description"|],
        key: "description",
        render: None,
      },
      {title: "Order", dataIndex: [|"order"|], key: "order", render: None},
      {
        title: "Topics",
        dataIndex: [|"topics"|],
        key: "topics",
        render:
          Some(
            (_, row, _) => {
              let topics =
                switch (row.topics) {
                | Some(topics) => topics
                | None => [||]
                };
              topics->Belt.Array.map(topic =>
                <Tag key={topic.id}> topic.name->string </Tag>
              )
              |> array;
            },
          ),
      },
      {
        title: "",
        dataIndex: [||],
        key: "action",
        render:
          Some(
            (_, record, _) => {
              let examId = record.id;
              <>
                <Link
                  href="/[categoryId]/exams/[examId]/edit"
                  _as={j|/$categoryId/exams/$examId/edit|j}>
                  <a>
                    <FontAwesomeIcon
                      icon=FontAwesomeIcon.faEdit
                      className="text-blue-400 hover:text-blue-700 cursor-pointer"
                    />
                  </a>
                </Link>
              </>;
            },
          ),
      },
    |];

    <>
      <div className="flex justify-between items-start">
        <div className="font-bold text-2xl mb-8"> "Exams List"->string </div>
        <Link
          href="/[categoryId]/exams/create"
          _as={j|/$categoryId/exams/create|j}>
          <Button
            _type=`primary
            style={"display": "inline-flex", "alignItems": "center"}
            icon={<Icons.PlusOutlined />}>
            "Create Exam"->string
          </Button>
        </Link>
      </div>
      <Table
        columns
        dataSource=exams
        pagination=false
        rowKey={item => item##id}
      />
    </>;
  | None => React.null
  };
};