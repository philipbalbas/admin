module Query = [%relay.query
  {|
    query ExamsListQuery($id: ID!) {
      getCategory(id: $id) {
        id
        name
        exams {
          id
          name
          description
          type_: type
        }
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
  let queryData = Query.use(~variables={id: id}, ());

  switch (queryData.getCategory) {
  | Some(category) =>
    let dataSource =
      switch (category.exams) {
      | Some(exams) => exams
      | None => [||]
      };
    let columns: array(Table.column('a, unit)) = [|
      {title: "Name", dataIndex: "name", key: "name", render: None},
      {
        title: "Type",
        dataIndex: "type_",
        key: "id",
        render:
          Some((text, _, _) => {stringifyExamType(text)->React.string}),
      },
      {
        title: "Description",
        dataIndex: "description",
        key: "description",
        render: None,
      },
    |];

    <div> <Table columns dataSource pagination=false /> </div>;
  | None => React.null
  };
};