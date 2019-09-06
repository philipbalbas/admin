[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();
  let container =
    switch (url.path) {
    | [] => <Home />
    | ["modules"] => <Home />
    | ["modules", id] => <ModulePage id />
    | ["subjects"] => <SubjectsList />
    | ["subjects", "create"] => <SubjectsForm />
    | ["subjects", id] => <SubjectPage id />
    | ["modules", id, "subjects", "create"] => <SubjectsForm id />
    | ["modules", _moduleId, "subjects", id] => <SubjectPage id />
    | ["topics"] => <TopicsList />
    | ["topics", "create"] => <TopicsForm />
    | ["modules", moduleId, "subjects", subjectId, "topics", "create"] =>
      <TopicsForm moduleIdProp=moduleId subjectIdProp=subjectId />
    | ["topics", id] => <TopicPage id />
    | ["pages"] => <PagesList />
    | ["pages", "create"] => <PagesForm />
    | ["subjects", subjectId, "topics", topicId, "pages", "create"] =>
      <PagesForm subjectIdProp=subjectId topicIdProp=topicId />
    | ["pages", id] => <Page id />
    | ["notes"] => <NotesList />
    | ["notes", "create"] => <NotesForm />
    | ["topics", topicId, "pages", pageId, "notes", "create"] =>
      <NotesForm topicIdProp=topicId pageIdProp=pageId />
    | ["notes", id] => <Note id />
    | _ => "Page Not Found"->ReasonReact.string
    };
  <>
    <Header />
    <div className="flex h-screen">
      <Sidebar />
      <div className="px-10 py-5 w-full"> container </div>
    </div>
  </>;
};