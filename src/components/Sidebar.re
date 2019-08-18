let str = ReasonReact.string;

[@react.component]
let make = () => {
  <div>
    <Link to_="/modules"> "Modules"->str </Link>
    <Link to_="/subjects"> "Subjects"->str </Link>
    <Link to_="/topics"> "Topics"->str </Link>
    <Link to_="/pages"> "Pages"->str </Link>
    <Link to_="/notes"> "Notes"->str </Link>
  </div>;
};