open ReasonUrql;
open Hooks;
let str = ReasonReact.string;

module ListModules = [%graphql
  {|
    query modules {
      modules {
        name
        id
      }
    }
  |}
];

[@react.component]
let make = () => {
  let request = ListModules.make();
  let ({response}, _) = useQuery(~request, ());

  switch (response) {
  | Fetching => "Fetching"->str
  | NotFound => "No Data"->str
  | Error(_e) => "Error"->str
  | Data(data) =>
    switch (data##modules) {
    | None => "No items"->str
    | Some(modules) => <ModulesList modules />
    }
  };
};