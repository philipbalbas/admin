open React;

[@gentype]
[@react.component]
let make = () => {
  let router = Next.Router.useRouter();
  let categoryId = router.query##categoryId;

  <Suspense fallback={"Loading..."->React.string}>
    <ListSubjects categoryId />
  </Suspense>;
};

[@gentype]
let default = make;