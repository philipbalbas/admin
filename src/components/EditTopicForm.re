open Utils;
open ReasonUrql;
open Hooks;

type state = {
  title: string,
  description: string,
  editMode: bool,
};

type action =
  | Edit
  | Cancel
  | Save
  | TypeTitle(string)
  | TypeDesc(string);

[@react.component]
let make = (~id, ~name, ~description) => {
  let savedTitle = React.useRef(name);
  let savedDesc = React.useRef(description);

  let ({title, description, editMode}, dispatch) =
    React.useReducer(
      (state, action) =>
        switch (action) {
        | Cancel => {
            title: savedTitle->React.Ref.current,
            description: savedDesc->React.Ref.current,
            editMode: false,
          }
        | Save =>
          savedTitle->React.Ref.setCurrent(state.title);
          savedDesc->React.Ref.setCurrent(state.description);
          {...state, editMode: false};
        | Edit => {...state, editMode: true}
        | TypeTitle(title) => {...state, title}
        | TypeDesc(description) => {...state, description}
        },
      {
        title: savedTitle->React.Ref.current,
        editMode: false,
        description: savedDesc->React.Ref.current,
      },
    );

  let mutation =
    Mutations.UpdateTopic.make(~id, ~name=title, ~description, ());

  let (_response, executeMutation) = useMutation(~request=mutation);

  let handleNameChange = event => {
    dispatch(TypeTitle(ReactEvent.Form.target(event)##value));
  };

  let handleDescriptionChange = event => {
    dispatch(TypeDesc(ReactEvent.Form.target(event)##value));
  };
  <div className="w-full">
    {editMode
       ? <>
           <div className="mb-2">
             <label className="text-md text-indigo-600">
               "Edit Name"->str
               <Ant.Input value=title onChange=handleNameChange />
             </label>
           </div>
           <div className="mb-2">
             <label className="text-md text-indigo-600">
               "Edit Description"->str
               <Ant.Input value=description onChange=handleDescriptionChange />
             </label>
           </div>
           <div>
             <button
               className="px-3 py-2 mr-3 bg-red-600 text-indigo-100 rounded-lg"
               onClick={_ => dispatch(Cancel)}>
               "Cancel"->str
             </button>
             <button
               className="px-3 py-2 bg-green-600 text-indigo-100 rounded-lg"
               onClick={_ => {
                 dispatch(Save);
                 executeMutation() |> ignore;
               }}>
               "Save"->str
             </button>
           </div>
         </>
       : <>
           <div className="text-4xl font-semibold text-indigo-800">
             name->str
           </div>
           <div className="text-lg font-semibold text-indigo-600">
             description->str
           </div>
           <div>
             <button
               className="px-3 py-2 mr-3 bg-indigo-600 text-indigo-100 rounded-lg"
               onClick={_ => dispatch(Edit)}>
               "Edit"->str
             </button>
           </div>
         </>}
  </div>;
};