open ReasonUrql;
open Hooks;
open Queries;
open Utils;

type state = {
  title: string,
  description: string,
  editMode: bool,
};

type action =
  | Edit
  | Cancel
  | Save
  | TypeTitle(string)
  | TypeDesc(string);

[@react.component]
let make = (~id as moduleId) => {
  let request = GetModule.make(~id=moduleId, ());
  let ({response}, _) = useQuery(~request, ());

  switch (response) {
  | Fetching => "Fetching"->str
  | NotFound => "No Data"->str
  | Error(_e) => "Error"->str
  | Data(data) =>
    switch (data##module_) {
    | None => "No Item"->str
    | Some(module_) =>
      let moduleDescription =
        Belt.Option.mapWithDefault(module_##description, "Missing name", txt =>
          txt
        );

      let moduleName =
        Belt.Option.mapWithDefault(module_##name, "Missing description", txt =>
          txt
        );

      let subjectsList =
        module_##subjects->Belt.Option.getWithDefault([||])
        |> Array.map(topic =>
             switch (topic) {
             | Some(topic) =>
               let sujbectId =
                 Belt.Option.mapWithDefault(topic##id, "Missing id", txt =>
                   txt
                 );

               let subjectName =
                 Belt.Option.mapWithDefault(topic##name, "Missing name", txt =>
                   txt
                 );
               let subjectDescription =
                 Belt.Option.mapWithDefault(
                   topic##description, "Missing description", txt =>
                   txt
                 );

               <MaterialUi.TableRow key=sujbectId>
                 <MaterialUi.TableCell>
                   <button onClick={_ => push({j|/topics/$sujbectId|j})}>
                     <div
                       className="text-indigo-900 cursor-pointer hover:text-purple-600">
                       sujbectId->str
                     </div>
                   </button>
                 </MaterialUi.TableCell>
                 <MaterialUi.TableCell>
                   <button onClick={_ => push({j|/topics/$sujbectId|j})}>
                     <div
                       className="text-indigo-900 cursor-pointer hover:text-purple-600">
                       subjectName->str
                     </div>
                   </button>
                 </MaterialUi.TableCell>
                 <MaterialUi.TableCell>
                   subjectDescription->str
                 </MaterialUi.TableCell>
               </MaterialUi.TableRow>;
             | None => "No item"->str
             }
           )
        |> React.array;

      <>
        <div className="flex justify-between">
          <EditModuleForm
            name=moduleName
            description=moduleDescription
            id=moduleId
          />
        </div>
        <div className="mt-6">
          <div className="flex justify-between items-center">
            <div className="text-lg"> "Subjects:"->str </div>
            <button
              className="p-2 bg-indigo-800 text-blue-100 rounded-lg"
              onClick={_ => push({j|/modules/$moduleId/subjects/create|j})}>
              "+ Create Subject"->str
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
            <MaterialUi.TableBody> subjectsList </MaterialUi.TableBody>
          </MaterialUi.Table>
        </div>
      </>;
    }
  };
};