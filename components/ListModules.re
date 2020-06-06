open Ant;
open Next;
open React;

module Query = [%relay.query
  {|
  query ListModulesQuery($id: ID!) {
    getCategory(id: $id) {
      id
      name
      modules {
        id
        name
        description
      }
    }
  }
|}
];

[@react.component]
let make = (~id="") => {
  let queryData = Query.use(~variables={id: id}, ());

  switch (queryData.getCategory) {
  | Some(category) =>
    let dataSource =
      switch (category.modules) {
      | Some(mods) => mods
      | None => [||]
      };
    let columns:
      array(
        Table.column(
          string,
          ListModulesQuery_graphql.Types.response_getCategory_modules,
        ),
      ) = [|
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render:
          Some(
            (text, row, _) => {
              let moduleId = row.id;
              <Link
                href="/[categoryId]/modules/[moduleId]"
                _as={j|/$id/modules/$moduleId|j}>
                <a> text->string </a>
              </Link>;
            },
          ),
      },
      {
        title: "Description",
        dataIndex: "description",
        key: "description",
        render: None,
      },
      // {title: "", dataIndex: "", key: "description", render: None},
    |];
    let name = category.name;
    <>
      <div className="flex justify-between items-start">
        <div className="font-bold text-2xl mb-8">
          {j|$name Modules|j}->string
        </div>
        <Link
          href="/[categoryId]/modules/create" _as={j|/$id/modules/create|j}>
          <Button
            _type=`primary
            style={"display": "inline-flex", "alignItems": "center"}
            icon={<Icons.PlusOutlined />}>
            "Create Module"->string
          </Button>
        </Link>
      </div>
      <Table columns dataSource pagination=false />
    </>;
  | None => null
  };
};