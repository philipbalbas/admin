let str = ReasonReact.string;

[@react.component]
let make = (~name) => {
  <div> name->str </div>;
};