open ReasonUrql;
open Hooks;
open Queries;

let str = ReasonReact.string;

[@react.component]
let make = () => {
  let request = ListPages.make();
  let ({response}, _) = useQuery(~request, ());

  switch (response) {
  | Fetching => "Fetching"->str
  | NotFound => "No Data"->str
  | Error(_e) => "Error"->str
  | Data(data) =>
    switch (data##pages) {
    | None => "No items"->str
    | Some(pages) => <List items=pages entity=Page />
    }
  };
};