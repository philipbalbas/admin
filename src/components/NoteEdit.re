open ReasonUrql;
open Hooks;
open Mutations;
open Utils;

module Editor = {
  [@bs.module "for-editor"] [@react.component]
  external make:
    (
      ~value: string,
      ~onChange: (Js.String.t => Js.String.t) => unit,
      ~onSave: (Js.String.t => Js.String.t) => unit=?,
      ~placeholder: string=?,
      ~language: string
    ) =>
    React.element =
    "default";
};

[@react.component]
let make = (~content, ~id, ~pageId, ~name) => {
  let (markdownText, setMarkdownText) = React.useState(() => content);
  let (markdownText2, setMarkdownText2) = React.useState(() => "");
  let (title, setTitle) = React.useState(() => "");

  let (_, executeUpdateNote) =
    useMutation(
      ~request=UpdateNote.make(~id, ~content=markdownText, ~pageId="1", ()),
    );

  let handleSave = _text => {
    executeUpdateNote() |> ignore;
  };

  <div>
    <div className="text-indigo-600 text-4xl font-bold"> "name"->str </div>
    <div className="w-full">
      <Editor
        value=markdownText
        onChange=setMarkdownText
        placeholder="Type Here..."
        onSave=handleSave
        language="en-US"
      />
    </div>
  </div>;
};