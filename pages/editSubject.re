open React;

[@react.component]
let make = () => {
  let router = Next.Router.useRouter();
  let categoryId = router.query##categoryId;
  let moduleId = router.query##moduleId;
  let subjectId = router.query##subjectId;

  <div className="container sm:w-full lg:w-4/6">
    <div className="text-2xl mb-4"> "Update Subject"->string </div>
    <Suspense fallback={<div> "Loading..."->string </div>}>
      <FormSubject categoryId moduleId subjectId mutationType=`UPDATE />
    </Suspense>
  </div>;
};