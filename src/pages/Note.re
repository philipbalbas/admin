open Utils;
open ReasonUrql;
open Hooks;
open Queries;
open Mutations;

module Markdown = {
  [@bs.module "react-markdown"] [@react.component]
  external make: (~source: string) => React.element = "default";
};

[@react.component]
let make = (~id) => {
  let request = GetNote.make(~id, ());
  let ({response}, _) = useQuery(~request, ());

  switch (response) {
  | Fetching => "Fetchin"->str
  | NotFound => "No Data"->str
  | Error(_e) => "Error"->str
  | Data(data) =>
    switch (data##note) {
    | None => "No Note"->str
    | Some(note) =>
      let name =
        Belt.Option.mapWithDefault(note##name, "Missing name", txt => txt);
      let description =
        Belt.Option.mapWithDefault(note##description, "Missing name", txt =>
          txt
        );
      let content =
        Belt.Option.mapWithDefault(note##content, "Missing name", txt => txt);
      let pageId = Belt.Option.mapWithDefault(note##pageId, "", txt => txt);

      <div> <div> <NoteEdit content id pageId name /> </div> </div>;
    }
  };
};