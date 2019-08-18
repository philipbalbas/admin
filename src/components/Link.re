[@react.component]
let make = (~to_, ~children) => {
  let handleClick = _e => {
    ReasonReactRouter.push(to_);
  };
  <a onClick=handleClick> children </a>;
};