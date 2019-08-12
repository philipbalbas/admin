let str = ReasonReact.string;

[@react.component]
let make = () => {
  let goToNote = _event => ReasonReactRouter.push("/notes");
  <div>
    <div> "Home Page"->str </div>
    <button onClick=goToNote> "Make new note"->str </button>
  </div>;
};