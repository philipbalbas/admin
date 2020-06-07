[@react.component]
let make = () => {
  open! React;
  let router = Next.Router.useRouter();
  let categoryId = router.query##categoryId;

  <Suspense fallback={"Loading..."->string}>
    <ListExams categoryId />
  </Suspense>;
};