open Utils;
open Ant;

type choice = {
  id: string,
  content: string,
};

type state = {
  choices: list(choice),
  tempChoiceContent: string,
};

ReasonReactRouter.watchUrl;

type action =
  | EditTempContent(string)
  | Delete(string)
  | Add(choice);

[@react.component]
let make = () => {
  let (question, setQuestion) = React.useState(() => "");
  let (rationale, setRationale) = React.useState(() => "");
  let (alertIsOpen, setAlertIsOpen) = React.useState(() => false);
  // let (choices, setChoices) = React.useState(() => []);
  let ({choices, tempChoiceContent}, dispatch) =
    React.useReducer(
      (state, action) =>
        switch (action) {
        | EditTempContent(content) => {...state, tempChoiceContent: content}
        | Delete(id) => {...state, choices: state.choices}
        | Add(choice) => {
            choices: state.choices->List.append([choice]),
            tempChoiceContent: "",
          }
        },
      {choices: [], tempChoiceContent: ""},
    );

  let handleTempChoiceChange = event => {
    dispatch(EditTempContent(ReactEvent.Form.target(event)##value));
  };

  let addChoice = () => {
    let num = Js.Math.(random_int(1, 100));
    let choice = {content: tempChoiceContent, id: num->string_of_int};
    dispatch(Add(choice));
  };

  let choicesList =
    Array.of_list(choices)
    |> Array.map(ch => <div key={ch.id}> ch.content->str </div>)
    |> React.array;
  <div>
    {alertIsOpen
       ? <Alert
           message="Card Saved"
           closable=true
           _type=`success
           onClose={_ => setAlertIsOpen(_ => false)}
         />
       : React.null}
    <div className="text-xl font-bold pb-3"> "Create Card"->str </div>
    <div className="mt-3">
      <label> "Question"->str </label>
      <ForEditor
        value=question
        onChange=setQuestion
        toolbar=ForEditor.defaultOption
        language="en"
      />
    </div>
    <div>
      <div> "Choices"->str </div>
      <div className="flex">
        <Input
          placeholder="Create Choice"
          value=tempChoiceContent
          onChange=handleTempChoiceChange
        />
        <Button icon="plus" onClick=addChoice />
      </div>
    </div>
    choicesList
    <div className="mt-3">
      <label> "Rationale"->str </label>
      <ForEditor
        value=rationale
        onChange=setRationale
        toolbar=ForEditor.defaultOption
        language="en"
      />
    </div>
    <button
      className="rounded px-3 py-2 bg-green-500 text-white rounded-lg"
      onClick={_ => {setAlertIsOpen(_ => true)}}>
      "Save"->str
    </button>
  </div>;
};