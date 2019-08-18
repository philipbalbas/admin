let str = ReasonReact.string;

[@react.component]
let make = () => {
  let changeRoute = route => ReasonReactRouter.push(route);

  <header className="bg-teal-700 shadow flex justify-between py-4 px-10">
    <a
      className="text-white font-bold uppercase tracking-wider hover:text-teal-300 cursor-pointer select-none"
      onClick={_e => changeRoute("/")}>
      "Reviewer Admin"->str
    </a>
    <nav> <a className="text-white"> "Hello User"->str </a> </nav>
  </header>;
};