open ReasonUrql;
open Hooks;
open Queries;
open Utils;

let str = ReasonReact.string;

[@react.component]
let make = () => {
  let request = ListSubjects.make();
  let ({response}, _) = useQuery(~request, ());

  switch (response) {
  | Fetching => "Fetching"->str
  | NotFound => "No Data"->str
  | Error(_e) => "Error"->str
  | Data(data) =>
    switch (data##subjects) {
    | None => "No items"->str
    | Some(subjects) =>
      <div className="flex justify-between items-start">
        <List items=subjects entity=Subject />
        <button
          className="p-2 bg-indigo-800 text-blue-100 rounded-lg"
          onClick={_ => push("/subjects/create")}>
          "+ Create Subject"->str
        </button>
      </div>
    }
  };
};