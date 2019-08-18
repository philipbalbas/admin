open Utils;
open Queries;

[@react.component]
let make = (~items, ~entity) => {
  let itemsList =
    items
    |> Array.map(item =>
         switch (item) {
         | Some(item) =>
           switch (item##name, item##id) {
           | (Some(name), Some(id)) => <ItemCard key=id name id entity />
           | _ => "No Name"->str
           }
         | None => "None"->str
         }
       )
    |> React.array;

  let title =
    switch (entity) {
    | Module => "Modules"
    | Subject => "Subjects"
    | Topic => "Topic"
    | Page => "Page"
    | Note => "Note"
    };

  <div>
    <p className="font-bold text-4xl mb-8"> title->str </p>
    itemsList
  </div>;
};