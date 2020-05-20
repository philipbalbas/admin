module Link = Next.Link;

[@react.component]
let make = (~children) => {
  <>
    <Header />
    <div className="flex h-screen">
      <Sidebar />
      <div className="px-10 py-5 w-full"> children </div>
    </div>
  </>;
};