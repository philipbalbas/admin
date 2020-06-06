open React;

[@react.component]
let make = () => {
  let router = Next.Router.useRouter();
  let categoryId = router.query##categoryId;
  let subjectId = router.query##subjectId;
  <Suspense fallback={"Loading..."->React.string}>
    <GetSubject subjectId categoryId />
  </Suspense>;
};