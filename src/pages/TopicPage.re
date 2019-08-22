open Utils;
open ReasonUrql;
open Hooks;
open Queries;

[@react.component]
let make = (~id) => {
  let request = GetTopic.make(~id, ());
  let ({response}, _) = useQuery(~request, ());

  switch (response) {
  | Fetching => "Fetching"->str
  | NotFound => "No Data"->str
  | Error(_e) => "Error"->str
  | Data(data) =>
    switch (data##topic) {
    | None => "No topic"->str
    | Some(topic) =>
      let description =
        Belt.Option.mapWithDefault(topic##description, "Missing name", txt =>
          txt
        );

      let name =
        Belt.Option.mapWithDefault(topic##name, "Missing description", txt =>
          txt
        );

      let pagesList =
        topic##pages->Belt.Option.getWithDefault([||])
        |> Array.map(page =>
             switch (page) {
             | Some(page) =>
               switch (page##id, page##name) {
               | (Some(id), Some(name)) =>
                 <div>
                   <button onClick={_ => push({j|/pages/$id|j})}>
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
        <div className="mt-6">
          <div className="text-lg"> "Topics:"->str </div>
          <div> pagesList </div>
        </div>
      </div>;
    }
  };
};