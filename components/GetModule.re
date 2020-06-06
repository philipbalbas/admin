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
          string,
          GetCategoryQuery_graphql.Types.response_getCategory_modules,
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
        <div className="mb-8">
          <div className="font-bold text-2xl"> name->string </div>
          <div> module_.description->string </div>
        </div>
        <Link
          href="/[categoryId]/modules/[moduleId]/subjects/create"
          _as={j|/$categoryId/modules/$moduleId/subjects/create|j}>
          <Button> "Create Subject"->string </Button>
        </Link>
      </div>
      <Table columns dataSource pagination=false />
    </>;
  | None => React.null
  };
};