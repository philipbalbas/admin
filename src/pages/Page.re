open Utils;
open ReasonUrql;
open Hooks;
open Queries;

[@react.component]
let make = (~id) => {
  let request = GetPage.make(~id, ());
  let ({response}, _) = useQuery(~request, ());

  switch (response) {
  | Fetching => "Fetching"->str
  | NotFound => "No Data"->str
  | Error(_e) => "Error"->str
  | Data(data) =>
    switch (data##page) {
    | None => "No page"->str
    | Some(page) =>
      let description =
        Belt.Option.mapWithDefault(page##description, "Missing name", txt =>
          txt
        );

      let name =
        Belt.Option.mapWithDefault(page##name, "Missing description", txt =>
          txt
        );

      let content =
        Belt.Option.mapWithDefault(page##content, "Missing description", txt =>
          txt
        );

      let pagesList =
        page##notes->Belt.Option.getWithDefault([||])
        |> Array.map(note =>
             switch (note) {
             | Some(note) =>
               switch (note##id, note##name) {
               | (Some(id), Some(name)) =>
                 <div>
                   <button onClick={_ => push({j|/notes/$id|j})}>
                     <div
                       className="text-indigo-900 cursor-pointer hover:text-purple-600">
                       name->str
                     </div>
                   </button>
                 </div>
               | _ => React.null
               }
             | None => "No item"->str
             }
           )
        |> React.array;

      <div>
        <div className="text-4xl font-semibold text-indigo-800">
          name->str
        </div>
        <div className="text-lg font-semibold text-indigo-600">
          description->str
        </div>
        <div className="text-md font-normal text-indigo-500">
          content->str
        </div>
        <div className="mt-6">
          <div className="text-lg"> "pages:"->str </div>
          <div> pagesList </div>
        </div>
      </div>;
    }
  };
};