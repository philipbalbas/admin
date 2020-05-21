module Query = [%relay.query
  {|
  query GetCategoryQuery($id: ID!) {
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
  open Ant;
  open Next;
  let queryData = Query.use(~variables={id: id}, ());

  let content =
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
            GetCategoryQuery_graphql.Types.response_getCategory_modules,
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
                  <a> text->React.string </a>
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
      <div>
        category.name->React.string
        <div> <Table columns dataSource pagination=false /> </div>
      </div>;
    | None => React.null
    };
  <> content </>;
};