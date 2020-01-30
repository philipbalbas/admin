open ReasonUrql;
open Hooks;
open Queries;
open Utils;

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
    | Some(pages) =>
      <>
        <div className="flex justify-between items-start">
          <p className="font-bold text-4xl mb-8"> "Pages"->str </p>
          <button
            className="p-2 bg-indigo-800 text-blue-100 rounded-lg"
            onClick={_ => push("/pages/create")}>
            "+ Create Page"->str
          </button>
        </div>
        <Table items=pages entity=Page />
      </>
    }
  };
};