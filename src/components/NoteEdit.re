open ReasonUrql;
open Hooks;
open Mutations;
open Utils;

type state = {
  title: string,
  editMode: bool,
};

type action =
  | Edit
  | Cancel
  | Save
  | Type(string);

module Editor = {
  [@bs.module "for-editor"] [@react.component]
  external make:
    (
      ~value: string,
      ~onChange: (Js.String.t => Js.String.t) => unit,
      ~onSave: (Js.String.t => Js.String.t) => unit=?,
      ~placeholder: string=?,
      ~language: string=?
    ) =>
    React.element =
    "default";
};

[@react.component]
let make = (~content, ~id, ~pageId, ~name) => {
  let (markdownText, setMarkdownText) = React.useState(() => content);
  let savedTitle = React.useRef(name);
  let ({title, editMode}, dispatch) =
    React.useReducer(
      (state, action) =>
        switch (action) {
        | Cancel => {title: savedTitle->React.Ref.current, editMode: false}
        | Save =>
          savedTitle->React.Ref.setCurrent(state.title);
          {...state, editMode: false};
        | Edit => {...state, editMode: true}
        | Type(title) => {...state, title}
        },
      {title: name, editMode: false},
    );

  // let (_, executeUpdateNote) =
  //   useMutation(
  //     ~request=UpdateNote.make(~id, ~content=markdownText, ~pageId, ()),
  //   );

  let payload =
    React.useMemo1(
      () => {
        let variables = Js.Dict.empty();
        Js.Dict.set(variables, "id", Js.Json.string(id));
        Js.Dict.set(variables, "pageId", Js.Json.string(pageId));
        Js.Dict.set(variables, "name", Js.Json.string(title));
        Js.Dict.set(variables, "content", Js.Json.string(markdownText));
        Js.Json.object_(variables);
      },
      [|title, markdownText|],
    );

  Js.log(payload);

  let (_, executeUpdateNote) =
    useMutation(
      ~request={"query": updateNote, "variables": payload, "parse": x => x},
    );

  let handleSave = _text => {
    executeUpdateNote() |> ignore;
  };

  let handleTitleChange = event => {
    dispatch(Type(ReactEvent.Form.target(event)##value));
  };

  <div>
    <div>
      {editMode
         ? <div>
             <input
               className="text-4xl font-bold border-gray-500 border-2"
               type_="text"
               value=title
               onChange=handleTitleChange
             />
           </div>
         : <div className="text-indigo-600 text-4xl font-bold">
             {
               title;
             }->str
           </div>}
      {editMode
         ? <div>
             <button
               className="px-3 py-2 mr-3 bg-indigo-600 text-indigo-100 rounded-lg"
               onClick={_ => {
                 dispatch(Save);
                 executeUpdateNote() |> ignore;
               }}>
               "Save"->str
             </button>
             <button
               className="px-3 py-2 bg-indigo-600 text-indigo-100 rounded-lg"
               onClick={_ => dispatch(Cancel)}>
               "Cancel"->str
             </button>
           </div>
         : <button
             className="px-3 py-2 bg-indigo-600 text-indigo-100 rounded-lg"
             onClick={_ => dispatch(Edit)}>
             "Edit"->str
           </button>}
    </div>
    <div className="w-full markdown">
      <Editor
        value=markdownText
        onChange=setMarkdownText
        placeholder="Type Here..."
        onSave=handleSave
        language="en"
      />
    </div>
  </div>;
};