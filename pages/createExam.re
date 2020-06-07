open React;

[@react.component]
let make = () => {
  let router = Next.Router.useRouter();
  let categoryId = router.query##categoryId;

  <div className="container w-4/6">
    <div className="text-2xl mb-4"> "Create Exam"->string </div>
    <Suspense fallback={<div> "Loading..."->string </div>}>
      <FormExam categoryId />
    </Suspense>
  </div>;
};