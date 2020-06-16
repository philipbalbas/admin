[@react.component]
let make = () => {
  open! React;
  let router = Next.Router.useRouter();
  let examId = router.query##examId;
  let categoryId = router.query##categoryId;

  let fallback = <div> "Loading..."->React.string </div>;

  <div> <Suspense fallback> <GetExam examId categoryId /> </Suspense> </div>;
};