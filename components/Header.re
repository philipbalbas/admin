[@react.component]
let make = () => {
  open! React;
  open! Next;
  <header
    className="bg-indigo-700 shadow flex justify-between items-center py-4 px-10">
    <Link href="/">
      <a
        className="text-white font-bold uppercase tracking-wider hover:text-indigo-300 cursor-pointer select-none">
        "Review Dashboard"->string
      </a>
    </Link>
    <nav className="flex justify-between items-center">
      <Suspense fallback={<div> "Loading..."->string </div>}>
        <CategorySelect />
      </Suspense>
      <div className="text-white ml-5"> "Hello User"->string </div>
    </nav>
  </header>;
};