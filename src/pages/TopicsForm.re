open Utils;
open Queries;
open ReasonUrql;
open Hooks;

[@react.component]
let make = (~moduleIdProp: string=?, ~subjectIdProp: string=?) => {
  let (name, setName) = React.useState(() => "");
  let (moduleId, setModuleId) = React.useState(() => moduleIdProp);
  let (subjectId, setSubjectId) = React.useState(() => subjectIdProp);
  let (description, setDescription) = React.useState(() => "");

  let modulesListRequest = ListModules.make();
  let ({response: modulesListQueryResponse}, _) =
    useQuery(~request=modulesListRequest, ());

  let moduleQuery = GetModule.make(~id=moduleId, ());
  let ({response: moduleQueryResponse}, _) =
    useQuery(~request=moduleQuery, ());

  let mutation =
    Mutations.CreateTopic.make(~name, ~subjectId, ~description, ());
  let (_, executeMutation) = useMutation(~request=mutation);

  let moduleSelect =
    switch (modulesListQueryResponse) {
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
        onSelect={value => {
          setModuleId(_ => value);
          setSubjectId(_ => "");
        }}>
        modules
      </Ant.Select>;
    };

  let subjectsSelect =
    switch (moduleQueryResponse) {
    | Fetching => "Loading"->str
    | Error(_) => <div> "Please Select a Module"->str </div>
    | NotFound => "Not Found"->str
    | Data(data) =>
      let subjects =
        data##module_
        ->Belt.Option.flatMap(module_ => module_##subjects)
        ->Belt.Option.getWithDefault([||])
        ->Belt.Array.map(subject =>
            subject->Belt.Option.mapWithDefault(
              React.null,
              subject => {
                let id =
                  Belt.Option.mapWithDefault(subject##id, "Missing id", txt =>
                    txt
                  );

                let name =
                  Belt.Option.mapWithDefault(
                    subject##name, "Missing name", txt =>
                    txt
                  );

                <Ant.Select.Option key=id value=id>
                  name->str
                </Ant.Select.Option>;
              },
            )
          )
        |> React.array;

      <Ant.Select
        className="w-full"
        value=subjectId
        onSelect={value => setSubjectId(_ => value)}>
        subjects
      </Ant.Select>;
    };

  <div>
    <div className="text-xl font-bold pb-3"> "Create Topic"->str </div>
    <div className="flex flex-row">
      <div className="flex-1 pr-2">
        <label> "Select Module ID"->str moduleSelect </label>
      </div>
      <div className="flex-1 pr-2">
        <label> "Select Subject ID"->str subjectsSelect </label>
      </div>
    </div>
    <div className="mt-3">
      <label>
        "Topic Name"->str
        <Ant.Input
          value=name
          onChange={event => setName(ReactEvent.Form.target(event)##value)}
        />
      </label>
    </div>
    <div className="mt-3">
      <label>
        "Topic Description"->str
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