open ReasonUrql;
open Hooks;
open Utils;

[@react.component]
let make = () => {
  let request = Queries.ListCategories.make();
  let ({response}, _) = useQuery(~request, ());

  switch (response) {
  | Fetching => "Fetching"->str
  | NotFound => "No Data"->str
  | Error(_e) => "Error"->str
  | Data(data) =>
    switch (data##listCategories) {
    | None => "No Items"->str
    | Some(categories) =>
      let itemsList =
        categories
        |> Array.mapi((i, cat: Queries.category) => {
             <Ant.Select.Option key={i->string_of_int} value={cat.id}>
               cat.name->str
             </Ant.Select.Option>
           })
        |> React.array;

      <Ant.Select className="w-40"> itemsList </Ant.Select>;
    }
  };
};