open React;

[@gentype]
[@react.component]
let make = () => {
  let router = Next.Router.useRouter();
  let categoryId = router.query##categoryId;

  <div className="container w-4/6">
    <div className="text-2xl mb-4"> "Create Exam"->string </div>
    <Suspense fallback={"Loading..."->string}>
      <FormExam categoryId mutationType=`CREATE />
    </Suspense>
  </div>;
};

[@gentype]
let default = make;