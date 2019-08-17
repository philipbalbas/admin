let str = ReasonReact.string;

[@react.component]
let make = (~modules) => {
  let modulesList =
    modules
    |> Array.map(module_ =>
         switch (module_) {
         | Some(module_) =>
           switch (module_##name, module_##id) {
           | (Some(name), Some(id)) => <Module key=id name />
           | _ => "No Name"->str
           }
         | None => "None"->str
         }
       )
    |> React.array;

  <div> modulesList </div>;
};