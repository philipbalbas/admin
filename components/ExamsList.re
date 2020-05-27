module Query = [%relay.query
  {|
    query ExamsListQuery($categoryId: ID!) {
      listExams(filter: {
        categoryId: $categoryId
      }) {
        id
        name
        description
        type_: type
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
let make = (~id="") => {
  open Ant;
  let queryData = Query.use(~variables={categoryId: id}, ());

  switch (queryData.listExams) {
  | Some(exams) =>
    let columns:
      array(
        Table.column('a, ExamsListQuery_graphql.Types.response_listExams),
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
              <Next.Link
                href="/[categoryId]/exams/[examId]"
                _as={j|/$id/exams/$examId|j}>
                <a> content->React.string </a>
              </Next.Link>;
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
    |];

    <div> <Table columns dataSource=exams pagination=false /> </div>;
  | None => React.null
  };
};