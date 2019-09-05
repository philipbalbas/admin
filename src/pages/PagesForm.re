open Utils;
open Queries;
open ReasonUrql;
open Hooks;

[@react.component]
let make = (~subjectIdProp: string=?, ~topicIdProp: string=?) => {
  let (name, setName) = React.useState(() => "");
  let (subjectId, setSubjectId) = React.useState(() => subjectIdProp);
  let (topicId, setTopicId) = React.useState(() => topicIdProp);
  let (description, setDescription) = React.useState(() => "");

  let subjectsListRequest = ListSubjects.make();
  let ({response: subjectsListQueryResponse}, _) =
    useQuery(~request=subjectsListRequest, ());

  let subjectQuery = GetSubject.make(~id=subjectId, ());
  let ({response: subjectQueryResponse}, _) =
    useQuery(~request=subjectQuery, ());

  let mutation = Mutations.CreatePage.make(~name, ~topicId, ~description, ());
  let (_, executeMutation) = useMutation(~request=mutation);

  let subjectsSelect =
    switch (subjectsListQueryResponse) {
    | Fetching => "Loading"->str
    | Error(_) => "Error"->str
    | NotFound => "Not Found"->str
    | Data(data) =>
      let subjects =
        data##subjects
        ->Belt.Option.getWithDefault([||])
        ->Belt.Array.map(subject_ =>
            subject_->Belt.Option.mapWithDefault(
              React.null,
              subject_ => {
                let id =
                  Belt.Option.mapWithDefault(
                    subject_##id, "Missing description", txt =>
                    txt
                  );
                let name =
                  Belt.Option.mapWithDefault(
                    subject_##name, "Missing description", txt =>
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
        value=subjectId
        onSelect={value => {
          setSubjectId(_ => value);
          setTopicId(_ => "");
        }}>
        subjects
      </Ant.Select>;
    };

  let topicsSelect =
    switch (subjectQueryResponse) {
    | Fetching => "Loading"->str
    | Error(_) => <div> "Please Select a subject"->str </div>
    | NotFound => "Not Found"->str
    | Data(data) =>
      let topics =
        data##subject
        ->Belt.Option.flatMap(subject => subject##topics)
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
        value=topicId
        onSelect={value => setTopicId(_ => value)}>
        topics
      </Ant.Select>;
    };

  <div>
    <div className="text-xl font-bold pb-3"> "Create Page"->str </div>
    <div className="flex flex-row">
      <div className="flex-1 pr-2">
        <label> "Select Subject"->str subjectsSelect </label>
      </div>
      <div className="flex-1 pr-2">
        <label> "Select Topic"->str topicsSelect </label>
      </div>
    </div>
    <div className="mt-3">
      <label>
        "Page Name"->str
        <Ant.Input
          value=name
          onChange={event => setName(ReactEvent.Form.target(event)##value)}
        />
      </label>
    </div>
    <div className="mt-3">
      <label>
        "Page Description"->str
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