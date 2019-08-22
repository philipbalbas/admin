[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();
  let container =
    switch (url.path) {
    | [] => <Home />
    | ["modules"] => <Home />
    | ["modules", id] => <ModulePage id />
    | ["subjects"] => <SubjectsList />
    | ["subjects", id] => <SubjectPage id />
    | ["topics"] => <TopicsList />
    | ["pages"] => <PagesList />
    | ["notes"] => <NotesList />
    | _ => "Page Not Found"->ReasonReact.string
    };
  <>
    <Header />
    <div className="flex h-screen">
      <Sidebar />
      <div className="px-10 py-5"> container </div>
    </div>
  </>;
};