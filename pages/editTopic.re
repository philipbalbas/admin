open React;

[@react.component]
let make = () => {
  let router = Next.Router.useRouter();
  let categoryId = router.query##categoryId;
  let subjectId = router.query##subjectId;
  let topicId = router.query##topicId;

  <div className="container sm:w-full lg:w-4/6">
    <div className="text-2xl mb-4"> "Edit Subject"->string </div>
    <Suspense fallback={<div> "Loading..."->string </div>}>
      <FormTopic categoryId topicId subjectId mutationType=`UPDATE />
    </Suspense>
  </div>;
};