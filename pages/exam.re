[@react.component]
let make = () => {
  open! React;
  let router = Next.Router.useRouter();
  let id = router.query##examId;

  let fallback = <div> "Loading..."->React.string </div>;

  <div> <Suspense fallback> <GetExam id /> </Suspense> </div>;
};