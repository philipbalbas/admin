open Utils;
open Queries;
open ReasonUrql;
open Hooks;

[@react.component]
let make = (~topicIdProp: string=?, ~pageIdProp: string=?) => {
  let (name, setName) = React.useState(() => "");
  let (topicId, setTopicId) = React.useState(() => topicIdProp);
  let (pageId, setPageId) = React.useState(() => pageIdProp);
  let (description, setDescription) = React.useState(() => "");
  let (content, setContent) = React.useState(() => "");

  let topicsListRequest = ListTopics.make();
  let ({response: topicsListQueryResponse}, _) =
    useQuery(~request=topicsListRequest, ());

  let topicQuery = GetTopic.make(~id=topicId, ());
  let ({response: topicQueryResponse}, _) =
    useQuery(~request=topicQuery, ());

  let mutation =
    Mutations.CreateNote.make(~name, ~pageId, ~description, ~content, ());
  let (_, executeMutation) = useMutation(~request=mutation);

  let topicsSelect =
    switch (topicsListQueryResponse) {
    | Fetching => "Loading"->str
    | Error(_) => "Error"->str
    | NotFound => "Not Found"->str
    | Data(data) =>
      let topics =
        data##topics
        ->Belt.Option.getWithDefault([||])
        ->Belt.Array.map(topic =>
            topic->Belt.Option.mapWithDefault(
              React.null,
              topic => {
                let id =
                  Belt.Option.mapWithDefault(
                    topic##id, "Missing description", txt =>
                    txt
                  );
                let name =
                  Belt.Option.mapWithDefault(
                    topic##name, "Missing description", txt =>
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
        value=topicId
        onSelect={value => {
          setTopicId(_ => value);
          setPageId(_ => "");
        }}>
        topics
      </Ant.Select>;
    };

  let pageSelect =
    switch (topicQueryResponse) {
    | Fetching => "Loading"->str
    | Error(_) => <div> "Please Select a subject"->str </div>
    | NotFound => "Not Found"->str
    | Data(data) =>
      let pages =
        data##topic
        ->Belt.Option.flatMap(topic => topic##pages)
        ->Belt.Option.getWithDefault([||])
        ->Belt.Array.map(pages =>
            pages->Belt.Option.mapWithDefault(
              React.null,
              pages => {
                let id =
                  Belt.Option.mapWithDefault(pages##id, "Missing id", txt =>
                    txt
                  );

                let name =
                  Belt.Option.mapWithDefault(pages##name, "Missing name", txt =>
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
        value=pageId
        onSelect={value => setPageId(_ => value)}>
        pages
      </Ant.Select>;
    };

  <div>
    <div className="text-xl font-bold pb-3"> "Create Note"->str </div>
    <div className="flex flex-row">
      <div className="flex-1 pr-2">
        <label> "Select Topic"->str topicsSelect </label>
      </div>
      <div className="flex-1 pr-2">
        <label> "Select Page"->str pageSelect </label>
      </div>
    </div>
    <div className="mt-3">
      <label>
        "Name"->str
        <Ant.Input
          value=name
          onChange={event => setName(ReactEvent.Form.target(event)##value)}
        />
      </label>
    </div>
    <div className="mt-3">
      <label>
        "Description"->str
        <Ant.Input
          value=description
          onChange={event =>
            setDescription(ReactEvent.Form.target(event)##value)
          }
        />
      </label>
    </div>
    <div className="mt-3 markdown">
      <ForEditor
        value=content
        onChange=setContent
        language="en"
        toolbar=ForEditor.defaultOption
      />
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