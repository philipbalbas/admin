open ReasonUrql;
open Hooks;
open Queries;
open Utils;

[@react.component]
let make = (~id) => {
  let request = GetModule.make(~id, ());
  let ({response}, _) = useQuery(~request, ());

  switch (response) {
  | Fetching => "Fetching"->str
  | NotFound => "No Data"->str
  | Error(_e) => "Error"->str
  | Data(data) =>
    switch (data##module_) {
    | None => "No Item"->str
    | Some(module_) =>
      switch (module_##name, module_##description, module_##subjects) {
      | (Some(name), Some(description), Some(subjects)) =>
        let subjectsList =
          subjects
          |> Array.map(subject =>
               switch (subject) {
               | Some(subject) =>
                 switch (subject##id, subject##name) {
                 | (Some(id), Some(name)) =>
                   <MaterialUi.TableRow>
                     <MaterialUi.TableCell>
                       <button onClick={_ => push({j|/subjects/$id|j})}>
                         <div
                           className="text-indigo-900 cursor-pointer hover:text-purple-600">
                           id->str
                         </div>
                       </button>
                     </MaterialUi.TableCell>
                     <MaterialUi.TableCell>
                       <button onClick={_ => push({j|/subjects/$id|j})}>
                         <div
                           className="text-indigo-900 cursor-pointer hover:text-purple-600">
                           name->str
                         </div>
                       </button>
                     </MaterialUi.TableCell>
                     <MaterialUi.TableCell>
                       "Desription"->str
                     </MaterialUi.TableCell>
                   </MaterialUi.TableRow>
                 | _ => React.null
                 }
               | None => "No Subject"->str
               }
             )
          |> React.array;

        <div className="flex justify-between">
          <div>
            <div className="text-4xl font-semibold text-indigo-800">
              name->str
            </div>
            <div className="text-lg font-semibold text-indigo-600">
              description->str
            </div>
            <div className="mt-6">
              <div className="text-lg"> "Subjects:"->str </div>
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
          </div>
          <div>
            <button
              className="p-2 bg-gray-500 rounded-lg"
              onClick={_ => push({j|/modules/$id/subjects/create|j})}>
              "+ Create Subject"->str
            </button>
          </div>
        </div>;
      | _ => "Missing Info"->str
      }
    }
  };
};