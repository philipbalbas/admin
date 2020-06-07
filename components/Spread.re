[@react.component]
let make = (~children, ~props) =>
  ReasonReact.cloneElement(children, ~props, [||]);