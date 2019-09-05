open Utils;
open Queries;
open ReasonUrql;
open Hooks;

module StateLenses = [%lenses
  type state = {
    name: string,
    moduleId: string,
    description: string,
  }
];

[@bs.deriving abstract]
type input = {
  name: string,
  id: string,
  description: option(string),
};

let objec1 = input(~name="Test", ~id="1");

[@react.component]
let make = (~id: string=?) => {
  let (name, setName) = React.useState(() => "");
  let (moduleId, setModuleId) = React.useState(() => id);
  let (description, setDescription) = React.useState(() => "");

  let request = ListModules.make();
  let ({response}, _) = useQuery(~request, ());

  let mutation =
    Mutations.CreateSubject.make(~name, ~moduleId, ~description, ());
  let (_, executeMutation) = useMutation(~request=mutation);

  let selectInput =
    switch (response) {
    | Fetching => "Loading"->str
    | Error(_) => "Error"->str
    | NotFound => "Not Found"->str
    | Data(data) =>
      let modules =
        data##modules
        ->Belt.Option.getWithDefault([||])
        ->Belt.Array.map(module_ =>
            module_->Belt.Option.mapWithDefault(
              React.null,
              module_ => {
                let id =
                  Belt.Option.mapWithDefault(
                    module_##id, "Missing description", txt =>
                    txt
                  );
                let name =
                  Belt.Option.mapWithDefault(
                    module_##name, "Missing description", txt =>
                    txt
                  );
                <Ant.Select.Option key=id value=id>
                  name->str
                </Ant.Select.Option>;
              },
            )
          );

      <Ant.Select
        className="w-full"
        value=moduleId
        onSelect={value => setModuleId(_ => value)}>
        modules
      </Ant.Select>;
    };

  <div>
    <div className="text-xl font-bold pb-3"> "Create Subject"->str </div>
    <div className="flex flex-row">
      <div className="flex-1 pr-2">
        <label> "Select Module ID"->str selectInput </label>
      </div>
      <div className="flex-1 pl-2">
        <label>
          "Subject Name"->str
          <Ant.Input
            value=name
            onChange={event => setName(ReactEvent.Form.target(event)##value)}
          />
        </label>
      </div>
    </div>
    <div>
      <label>
        "Subject Description"->str
        <Ant.Input
          value=description
          onChange={event =>
            setDescription(ReactEvent.Form.target(event)##value)
          }
        />
      </label>
    </div>
    <div className="mt-4">
      <button
        onClick={_ => push("/subjects")}
        className="rounded-sm px-3 py-2 bg-red-500 text-white rounded-lg mr-5">
        "Cancel"->str
      </button>
      <button
        onClick={_ => executeMutation() |> ignore}
        className="rounded-sm px-3 py-2 bg-green-500 text-white rounded-lg">
        "Save"->str
      </button>
    </div>
  </div>;
};