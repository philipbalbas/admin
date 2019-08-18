open Utils;

[@react.component]
let make = () => {
  <header className="bg-indigo-700 shadow flex justify-between py-4 px-10">
    <a
      className="text-white font-bold uppercase tracking-wider hover:text-indigo-300 cursor-pointer select-none"
      onClick={_e => push("/")}>
      "Reviewer Admin"->str
    </a>
    <nav> <a className="text-white"> "Hello User"->str </a> </nav>
  </header>;
};