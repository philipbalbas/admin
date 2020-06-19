open React;

[@gentype]
[@react.component]
let make = () => {
  let router = Next.Router.useRouter();
  let categoryId = router.query##categoryId;

  <Suspense fallback={"Loading..."->string}>
    <ListCards categoryId />
  </Suspense>;
};

[@gentype]
let default = make;