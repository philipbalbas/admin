open ReasonUrql;
open Hooks;
open Queries;
open Utils;

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
    | Some(topics) =>
      <>
        <div className="flex justify-between items-start">
          <p className="font-bold text-4xl mb-8"> "Topics"->str </p>
          <button
            className="p-2 bg-indigo-800 text-blue-100 rounded-lg"
            onClick={_ => push("/topics/create")}>
            "+ Create Topic"->str
          </button>
        </div>
        <List items=topics entity=Topic />
      </>
    }
  };
};