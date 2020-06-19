open React;
open Ant;
open Next;

module Query = [%relay.query
  {|
    query GetModuleQuery($id: ID!) {
      getModule(id: $id) {
        id
        name
        description
        subjects {
          id
          name
          description
          order
        }
      }
    }
|}
];

[@react.component]
let make = (~categoryId, ~moduleId) => {
  let queryData = Query.use(~variables={id: moduleId}, ());
  switch (queryData.getModule) {
  | Some(module_) =>
    let name = module_.name;
    let dataSource =
      switch (module_.subjects) {
      | Some(subjects) => subjects
      | None => [||]
      };

    let columns:
      array(
        Table.column(
          'a,
          GetCategoryQuery_graphql.Types.response_getCategory_modules,
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
                  href="/[categoryId]/modules/[moduleId]/subjects/[subjectId]/edit"
                  _as={j|/$categoryId/modules/$moduleId/subjects/$subjectId/edit|j}>
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
        <div className="mb-8">
          <div className="font-bold text-2xl"> name->string </div>
          <div> module_.description->string </div>
        </div>
        <Link
          href="/[categoryId]/modules/[moduleId]/subjects/create"
          _as={j|/$categoryId/modules/$moduleId/subjects/create|j}>
          <Button
            _type=`primary
            style={"display": "inline-flex", "alignItems": "center"}
            icon={<Icons.PlusOutlined />}>
            "Create Subject"->string
          </Button>
        </Link>
      </div>
      <Table columns dataSource pagination=false rowKey={item => item##id} />
    </>;
  | None => React.null
  };
};