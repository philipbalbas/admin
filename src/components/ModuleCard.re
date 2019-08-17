let str = ReasonReact.string;

[@react.component]
let make = (~name, ~id) => {
  let link = {j|/module/$id|j};
  <div> <Link to_=link> name->str </Link> </div>;
};