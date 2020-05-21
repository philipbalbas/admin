open Ant;

module Query = [%relay.query
  {|
  query CategorySelectQuery {
    listCategories {
      name
      id
    }
  }
|}
];

[@react.component]
let make = () => {
  let queryData = Query.use(~variables=(), ());
  let content =
    switch (queryData.listCategories) {
    | Some(categories) =>
      categories->Belt.Array.mapWithIndex((i, cat) => {
        <Select.Option key={i->string_of_int} value={cat.id}>
          cat.name->React.string
        </Select.Option>
      })
      |> React.array
    | _ =>
      <Select.Option key="0" value="0"> "Nada"->React.string </Select.Option>
    };

  <Select className="w-40"> content </Select>;
};