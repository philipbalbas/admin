open React;

[@gentype]
[@react.component]
let make = () => {
  let router = Next.Router.useRouter();
  let categoryId = router.query##categoryId;
  let moduleId = router.query##moduleId;

  <div className="container sm:w-full lg:w-4/6">
    <div className="text-2xl mb-4"> "Edit Module"->string </div>
    <Suspense fallback={"Loading..."->string}>
      <FormModule categoryId moduleId mutationType=`UPDATE />
    </Suspense>
  </div>;
};

[@gentype]
let default = make;