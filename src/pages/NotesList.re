open ReasonUrql;
open Hooks;
open Queries;

let str = ReasonReact.string;

[@react.component]
let make = () => {
  let request = ListNotes.make();
  let ({response}, _) = useQuery(~request, ());

  switch (response) {
  | Fetching => "Fetching"->str
  | NotFound => "No Data"->str
  | Error(_e) => "Error"->str
  | Data(data) =>
    switch (data##notes) {
    | None => "No items"->str
    | Some(notes) => <List items=notes entity=Note />
    }
  };
};