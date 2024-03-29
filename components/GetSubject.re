open React;
open Ant;
open Next;

module Query = [%relay.query
  {|
    query GetSubjectQuery($id: ID!) {
      getSubject(id: $id) {
        name
        description
        topics {
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
let make = (~subjectId, ~categoryId) => {
  let queryData = Query.use(~variables={id: subjectId}, ());

  switch (queryData.getSubject) {
  | Some(subject) =>
    let dataSource =
      switch (subject.topics) {
      | Some(topics) => topics
      | None => [||]
      };

    let columns:
      array(
        Table.column(
          'a,
          GetSubjectQuery_graphql.Types.response_getSubject_topics,
        ),
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
                  href="/[categoryId]/subjects/[subjectId]/topics/[topicId]/edit"
                  _as={j|/$categoryId/subjects/$subjectId/topics/$topicId/edit|j}>
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

    let description =
      Belt.Option.mapWithDefault(subject.description, "Add Description", text =>
        text
      );
    <>
      <div className="flex justify-between items-start">
        <div className="mb-8">
          <div className="font-bold text-2xl"> subject.name->string </div>
          <div> description->string </div>
        </div>
        <Link
          href="/[categoryId]/subjects/[subjectId]/topics/create"
          _as={j|/$categoryId/subjects/$subjectId/topics/create|j}>
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
  | None => <div> "Subject does not exist"->string </div>
  };
};