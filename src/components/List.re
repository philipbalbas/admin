open Utils;
open Queries;

[@react.component]
let make = (~items, ~entity) => {
  let entityString =
    switch (entity) {
    | Module => "modules"
    | Subject => "subjects"
    | Topic => "topics"
    | Page => "pages"
    | Note => "notes"
    };

  let itemsList =
    items
    |> Array.map(item =>
         switch (item) {
         | Some(item) =>
           let id =
             Belt.Option.mapWithDefault(item##id, "Missing id", txt => txt);

           let name =
             Belt.Option.mapWithDefault(item##name, "Missing name", txt =>
               txt
             );
           let description =
             Belt.Option.mapWithDefault(
               item##description, "Missing description", txt =>
               txt
             );
           <MaterialUi.TableRow key=id>
             <MaterialUi.TableCell>
               <button onClick={_ => push({j|/$entityString/$id|j})}>
                 <div
                   className="text-indigo-900 cursor-pointer hover:text-purple-600">
                   id->str
                 </div>
               </button>
             </MaterialUi.TableCell>
             <MaterialUi.TableCell>
               <button onClick={_ => push({j|/$entityString/$id|j})}>
                 <div
                   className="text-indigo-900 cursor-pointer hover:text-purple-600">
                   name->str
                 </div>
               </button>
             </MaterialUi.TableCell>
             <MaterialUi.TableCell> description->str </MaterialUi.TableCell>
           </MaterialUi.TableRow>;

         | None => "None"->str
         }
       )
    |> React.array;

  <MaterialUi.Table>
    <MaterialUi.TableHead>
      <MaterialUi.TableRow>
        <MaterialUi.TableCell> "ID"->str </MaterialUi.TableCell>
        <MaterialUi.TableCell> "Name"->str </MaterialUi.TableCell>
        <MaterialUi.TableCell> "Description"->str </MaterialUi.TableCell>
      </MaterialUi.TableRow>
    </MaterialUi.TableHead>
    <MaterialUi.TableBody> itemsList </MaterialUi.TableBody>
  </MaterialUi.Table>;
};