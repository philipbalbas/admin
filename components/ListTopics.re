open Ant;
open React;
open Next;

module Query = [%relay.query
  {|
    query ListTopicsQuery($filter: TopicsFilter) {
      listTopics(filter: $filter) {
        id
        name
        order
      }
    }
|}
];

[@react.component]
let make = (~categoryId="") => {
  let filter: Query.Types.topicsFilter = {
    categoryId: Some(categoryId),
    moduleId: None,
    subjectId: None,
    order: Some(`ASC),
  };

  let queryData = Query.use(~variables={filter: Some(filter)}, ());

  let dataSource =
    switch (queryData.listTopics) {
    | Some(topics) => topics
    | None => [||]
    };

  let columns:
    array(
      Table.column(string, ListTopicsQuery_graphql.Types.response_listTopics),
    ) = [|
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render:
        Some(
          (text, row, _) => {
            let id = row.id;
            <Link
              href="/[categoryId]/topics/[topicId]"
              _as={j|/$categoryId/topics/$id|j}>
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
    {title: "Order", dataIndex: "order", key: "order", render: None},
  |];

  <>
    <div className="flex justify-between items-start">
      <div className="font-bold text-2xl mb-8"> "Topics Page"->string </div>
      <Link
        href="/[categoryId]/topics/create"
        _as={j|/$categoryId/topics/create|j}>
        <Button
          _type=`primary
          style={"display": "inline-flex", "alignItems": "center"}
          icon={<Icons.PlusOutlined />}>
          "Create Topic"->string
        </Button>
      </Link>
    </div>
    <Table dataSource columns pagination=false />
  </>;
};