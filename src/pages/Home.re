open ReasonUrql;
open Hooks;
let str = ReasonReact.string;
open Queries;

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
    | Some(modules) =>
      <>
        <div className="flex justify-between items-start">
          <p className="font-bold text-4xl mb-8"> "Modules"->str </p>
        </div>
        <List items=modules entity=Module />
      </>
    }
  };
};