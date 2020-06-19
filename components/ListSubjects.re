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
        module_: module {
          name
        }
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
    {
      title: "Subjects",
      dataIndex: [|"name"|],
      key: "name",
      render:
        Some(
          (text, row, _) => {
            let id = row.id;
            <Link
              href="/[categoryId]/subjects/[subjectId]"
              _as={j|/$categoryId/subjects/$id|j}>
              <a> text->string </a>
            </Link>;
          },
        ),
    },
    {
      title: "Description",
      dataIndex: [|"description"|],
      key: "description",
      render: None,
    },
    {
      title: "Module",
      dataIndex: [|"module_", "name"|],
      key: "module",
      render: None,
    },
    {title: "Order", dataIndex: [|"order"|], key: "order", render: None},
    {
      title: "",
      dataIndex: [||],
      key: "action",
      render:
        Some(
          (_, record, _) => {
            let subjectId = record.id;
            <>
              <Link
                href="/[categoryId]/subjects/[subjectId]/edit"
                _as={j|/$categoryId/subjects/$subjectId/edit|j}>
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
      <div className="font-bold text-2xl mb-8"> "Subjects Page"->string </div>
      <Link
        href="/[categoryId]/subjects/create"
        _as={j|/$categoryId/subjects/create|j}>
        <Button
          _type=`primary
          style={"display": "inline-flex", "alignItems": "center"}
          icon={<Icons.PlusOutlined />}>
          "Create Subject"->string
        </Button>
      </Link>
    </div>
    <Table dataSource columns pagination=false rowKey={item => item##id} />
  </>;
};