open ReasonUrql;
open Hooks;
open Queries;
open Utils;

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
    | Some(notes) =>
      <>
        <div className="flex justify-between items-start">
          <p className="font-bold text-4xl mb-8"> "Notes"->str </p>
          <button
            className="p-2 bg-indigo-800 text-blue-100 rounded-lg"
            onClick={_ => push("/notes/create")}>
            "+ Create Note"->str
          </button>
        </div>
        <List items=notes entity=Note />
      </>
    }
  };
};