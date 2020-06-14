open React;

[@react.component]
let make = () => {
  let router = Next.Router.useRouter();
  let categoryId = router.query##categoryId;
  let examId = router.query##examId;

  <div className="container sm:w-full lg:w-4/6">
    <div className="text-2xl mb-4"> "Edit Exam"->string </div>
    <Suspense fallback={"Loading..."->string}>
      <FormExam categoryId examId mutationType=`UPDATE />
    </Suspense>
  </div>;
};