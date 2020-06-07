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
        title: "Name",
        dataIndex: "name",
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
        dataIndex: "type_",
        key: "id",
        render: Some((text, _, _) => stringifyExamType(text)->React.string),
      },
      {
        title: "Description",
        dataIndex: "description",
        key: "description",
        render: None,
      },
      {title: "Order", dataIndex: "order", key: "order", render: None},
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
      <Table columns dataSource=exams pagination=false />
    </>;
  | None => React.null
  };
};