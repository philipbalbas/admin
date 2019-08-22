open ReasonUrql;
open Hooks;
open Queries;
open Utils;

[@react.component]
let make = (~id) => {
  let request = GetSubject.make(~id, ());
  let ({response}, _) = useQuery(~request, ());

  switch (response) {
  | Fetching => "Fetching"->str
  | NotFound => "No Data"->str
  | Error(_e) => "Error"->str
  | Data(data) =>
    switch (data##subject) {
    | None => "No Subject"->str
    | Some(subject) =>
      let description =
        Belt.Option.mapWithDefault(subject##description, "Missing name", txt =>
          txt
        );

      let name =
        Belt.Option.mapWithDefault(subject##name, "Missing description", txt =>
          txt
        );

      let topicsList =
        subject##topics->Belt.Option.getWithDefault([||])
        |> Array.map(topic =>
             switch (topic) {
             | Some(topic) =>
               switch (topic##id, topic##name) {
               | (Some(id), Some(name)) =>
                 <div>
                   <button onClick={_ => push({j|/subjects/$id|j})}>
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
          <div> topicsList </div>
        </div>
      </div>;
    }
  };
};