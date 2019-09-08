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
      let pageDescription =
        Belt.Option.mapWithDefault(page##description, "Missing name", txt =>
          txt
        );

      let pageName =
        Belt.Option.mapWithDefault(page##name, "Missing description", txt =>
          txt
        );

      // let pageContent =
      //   Belt.Option.mapWithDefault(page##content, "Missing description", txt =>
      //     txt
      //   );

      let parentId =
        Belt.Option.mapWithDefault(page##topicId, "Missing description", txt =>
          txt
        );

      let notesList =
        page##notes->Belt.Option.getWithDefault([||])
        |> Array.map(note =>
             switch (note) {
             | Some(note) =>
               let noteId =
                 Belt.Option.mapWithDefault(note##id, "Missing id", txt =>
                   txt
                 );

               let noteName =
                 Belt.Option.mapWithDefault(note##name, "Missing name", txt =>
                   txt
                 );
               let noteDescription =
                 Belt.Option.mapWithDefault(
                   note##description, "Missing description", txt =>
                   txt
                 );
               <MaterialUi.TableRow key=noteId>
                 <MaterialUi.TableCell>
                   <button onClick={_ => push({j|/notes/$noteId|j})}>
                     <div
                       className="text-indigo-900 cursor-pointer hover:text-purple-600">
                       noteId->str
                     </div>
                   </button>
                 </MaterialUi.TableCell>
                 <MaterialUi.TableCell>
                   <button onClick={_ => push({j|/notes/$noteId|j})}>
                     <div
                       className="text-indigo-900 cursor-pointer hover:text-purple-600">
                       noteName->str
                     </div>
                   </button>
                 </MaterialUi.TableCell>
                 <MaterialUi.TableCell>
                   noteDescription->str
                 </MaterialUi.TableCell>
               </MaterialUi.TableRow>;
             | None => "No item"->str
             }
           )
        |> React.array;

      <>
        <div className="flex justify-between">
          <EditPageForm name=pageName description=pageDescription id />
        </div>
        <div className="mt-6">
          <div className="flex justify-between items-center">
            <div className="text-lg"> "Notes:"->str </div>
            <button
              className="p-2 bg-indigo-800 text-blue-100 rounded-lg"
              onClick={_ =>
                push({j|/topics/$parentId/pages/$id/notes/create|j})
              }>
              "+ Create Note"->str
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
            <MaterialUi.TableBody> notesList </MaterialUi.TableBody>
          </MaterialUi.Table>
        </div>
      </>;
    }
  };
};