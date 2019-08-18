let str = ReasonReact.string;

[@react.component]
let make = () => {
  <header>
    <Link to_="/"> "Reviewer Admin"->str </Link>
    <nav> "Hello User"->str </nav>
  </header>;
};