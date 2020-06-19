open Ant;
open React;
open Next;

module Query = [%relay.query
  {|
    query ListTopicsQuery($filter: TopicsFilter) {
      listTopics(filter: $filter) {
        id
        name
        description
        order
        subject {
          id
          name
        }
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
      title: "Topics",
      dataIndex: [|"name"|],
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
      onCell: None,
    },
    {
      title: "Description",
      dataIndex: [|"description"|],
      key: "description",
      render: None,
      onCell: None,
    },
    {
      title: "Order",
      dataIndex: [|"order"|],
      key: "order",
      render: None,
      onCell: None,
    },
    {
      title: "",
      dataIndex: [||],
      key: "action",
      render:
        Some(
          (_, record, _) => {
            let topicId = record.id;
            <>
              <Link
                href="/[categoryId]/topics/[topicId]/edit"
                _as={j|/$categoryId/topics/$topicId/edit|j}>
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
      onCell: None,
    },
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
    <Table dataSource columns pagination=false rowKey={item => item##id} />
  </>;
};