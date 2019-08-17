open ReasonUrql;
open Hooks;
open Queries;

let str = ReasonReact.string;

[@react.component]
let make = () => {
  let request = ListTopics.make();
  let ({response}, _) = useQuery(~request, ());

  switch (response) {
  | Fetching => "Fetching"->str
  | NotFound => "No Data"->str
  | Error(_e) => "Error"->str
  | Data(data) =>
    switch (data##topics) {
    | None => "No items"->str
    | Some(topics) => <List items=topics entity=Subject />
    }
  };
};