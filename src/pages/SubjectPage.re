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

      let parentId =
        Belt.Option.mapWithDefault(subject##moduleId, "", txt => txt);

      let topicsList =
        subject##topics->Belt.Option.getWithDefault([||])
        |> Array.map(topic =>
             switch (topic) {
             | Some(topic) =>
               let id =
                 Belt.Option.mapWithDefault(topic##id, "Missing id", txt =>
                   txt
                 );

               let name =
                 Belt.Option.mapWithDefault(topic##name, "Missing name", txt =>
                   txt
                 );
               let description =
                 Belt.Option.mapWithDefault(
                   topic##description, "Missing description", txt =>
                   txt
                 );

               <MaterialUi.TableRow key=id>
                 <MaterialUi.TableCell>
                   <button onClick={_ => push({j|/topics/$id|j})}>
                     <div
                       className="text-indigo-900 cursor-pointer hover:text-purple-600">
                       id->str
                     </div>
                   </button>
                 </MaterialUi.TableCell>
                 <MaterialUi.TableCell>
                   <button onClick={_ => push({j|/topics/$id|j})}>
                     <div
                       className="text-indigo-900 cursor-pointer hover:text-purple-600">
                       name->str
                     </div>
                   </button>
                 </MaterialUi.TableCell>
                 <MaterialUi.TableCell>
                   description->str
                 </MaterialUi.TableCell>
               </MaterialUi.TableRow>;
             | None => "No item"->str
             }
           )
        |> React.array;

      <>
        <div className="flex justify-between">
          <div>
            <div className="text-4xl font-semibold text-indigo-800">
              name->str
            </div>
            <div className="text-lg font-semibold text-indigo-600">
              description->str
            </div>
          </div>
          <div>
            <button
              className="p-2 bg-indigo-800 text-blue-100 rounded-lg"
              onClick={_ =>
                push({j|/modules/$parentId/subjects/$id/topics/create|j})
              }>
              "+ Create Topic"->str
            </button>
          </div>
        </div>
        <div className="mt-6">
          <div className="text-lg"> "Topics:"->str </div>
          <MaterialUi.Table>
            <MaterialUi.TableHead>
              <MaterialUi.TableRow>
                <MaterialUi.TableCell> "ID"->str </MaterialUi.TableCell>
                <MaterialUi.TableCell> "Name"->str </MaterialUi.TableCell>
                <MaterialUi.TableCell>
                  "Description"->str
                </MaterialUi.TableCell>
              </MaterialUi.TableRow>
            </MaterialUi.TableHead>
            <MaterialUi.TableBody> topicsList </MaterialUi.TableBody>
          </MaterialUi.Table>
        </div>
      </>;
    }
  };
};