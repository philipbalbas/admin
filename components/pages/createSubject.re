open React;

[@gentype]
[@react.component]
let make = () => {
  let router = Next.Router.useRouter();
  let categoryId = router.query##categoryId;
  let moduleId = router.query##moduleId;

  <div className="container sm:w-full lg:w-4/6">
    <div className="text-2xl mb-4"> "Create Subject"->string </div>
    <Suspense fallback={<div> "Loading..."->string </div>}>
      <FormSubject categoryId moduleId mutationType=`CREATE />
    </Suspense>
  </div>;
};

[@gentype]
let default = make;