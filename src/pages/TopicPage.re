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
      let topicDescription =
        Belt.Option.mapWithDefault(
          topic##description, "Missing description", txt =>
          txt
        );

      let topicName =
        Belt.Option.mapWithDefault(topic##name, "Missing name", txt => txt);

      let parentId =
        Belt.Option.mapWithDefault(
          topic##subjectId, "Missing description", txt =>
          txt
        );

      let pagesList =
        topic##pages->Belt.Option.getWithDefault([||])
        |> Array.map(page =>
             switch (page) {
             | Some(page) =>
               let pageId =
                 Belt.Option.mapWithDefault(page##id, "Missing id", txt =>
                   txt
                 );

               let topicName =
                 Belt.Option.mapWithDefault(page##name, "Missing name", txt =>
                   txt
                 );
               let topicDescription =
                 Belt.Option.mapWithDefault(
                   page##description, "Missing description", txt =>
                   txt
                 );
               <MaterialUi.TableRow key=pageId>
                 <MaterialUi.TableCell>
                   <button onClick={_ => push({j|/pages/$pageId|j})}>
                     <div
                       className="text-indigo-900 cursor-pointer hover:text-purple-600">
                       pageId->str
                     </div>
                   </button>
                 </MaterialUi.TableCell>
                 <MaterialUi.TableCell>
                   <button onClick={_ => push({j|/pages/$pageId|j})}>
                     <div
                       className="text-indigo-900 cursor-pointer hover:text-purple-600">
                       topicName->str
                     </div>
                   </button>
                 </MaterialUi.TableCell>
                 <MaterialUi.TableCell>
                   topicDescription->str
                 </MaterialUi.TableCell>
               </MaterialUi.TableRow>;
             | None => "No item"->str
             }
           )
        |> React.array;
      <>
        <div className="flex justify-between">
          <EditTopicForm name=topicName description=topicDescription id />
        </div>
        <div className="mt-6">
          <div className="flex justify-between items-center">
            <div className="text-lg"> "Pages:"->str </div>
            <button
              className="p-2 bg-indigo-800 text-blue-100 rounded-lg"
              onClick={_ =>
                push({j|/subjects/$parentId/topics/$id/pages/create|j})
              }>
              "+ Create Page"->str
            </button>
          </div>
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
            <MaterialUi.TableBody> pagesList </MaterialUi.TableBody>
          </MaterialUi.Table>
        </div>
      </>;
    }
  };
};