[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();
  let container =
    switch (url.path) {
    | [] => <Home />
    | ["modules"] => <Home />
    | ["modules", id] => <ModulePage id />
    | ["subjects"] => <SubjectsList />
    | ["subjects", id] => <ModulePage id />
    | ["topics"] => <TopicsList />
    | ["pages"] => <PagesList />
    | ["notes"] => <NotesList />
    | _ => "Page Not Found"->ReasonReact.string
    };
  <>
    <Header />
    <div className="flex h-screen"> <Sidebar /> container </div>
  </>;
};