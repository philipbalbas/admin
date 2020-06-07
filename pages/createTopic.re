open React;

[@react.component]
let make = () => {
  let router = Next.Router.useRouter();
  let categoryId = router.query##categoryId;
  let subjectId = router.query##subjectId;

  <div className="container w-4/6">
    <div className="text-2xl mb-4"> "Create Topic"->string </div>
    <Suspense fallback={<div> "Loading..."->string </div>}>
      <FormTopic categoryId subjectId />
    </Suspense>
  </div>;
};