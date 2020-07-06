open React;

[@gentype]
[@react.component]
let make = () => {
  let router = Next.Router.useRouter();
  let categoryId = router.query##categoryId;
  let cardId = router.query##cardId;

  <div className="container sm:w-full lg:w-4/6">
    <div className="text-2xl mb-4"> "Edit Card"->string </div>
    <Suspense fallback={"Loading..."->string}>
      <FormCard categoryId cardId mutationType=`UPDATE />
    </Suspense>
  </div>;
};

[@gentype]
let default = make;
