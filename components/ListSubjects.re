open Ant;
open React;
open Next;

module Query = [%relay.query
  {|
    query ListSubjectsQuery($filter: SubjectsFilter) {
      listSubjects(filter: $filter) {
        id
        name
        order
        description
      }
    }
  |}
];

[@react.component]
let make = (~categoryId="") => {
  let filter: Query.Types.subjectsFilter = {
    categoryId: Some(categoryId),
    moduleId: None,
    order: Some(`ASC),
  };

  let queryData = Query.use(~variables={filter: Some(filter)}, ());

  let dataSource =
    switch (queryData.listSubjects) {
    | Some(subjects) => subjects
    | None => [||]
    };

  let columns:
    array(
      Table.column(
        string,
        ListSubjectsQuery_graphql.Types.response_listSubjects,
      ),
    ) = [|
    {title: "Name", dataIndex: "name", key: "name", render: None},
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
      <div className="font-bold text-2xl mb-8"> "Subjects Page"->string </div>
      <Link
        href="/[categoryId]/subjects/create"
        _as={j|/$categoryId/subjects/create|j}>
        <Button> "Create Subject"->string </Button>
      </Link>
    </div>
    <Table dataSource columns pagination=false />
  </>;
};