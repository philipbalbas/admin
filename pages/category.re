[@react.component]
let make = () => {
  open! React;
  let router = Next.Router.useRouter();
  let id = router.query##categoryId;

  let fallback = <div> "Loading..."->React.string </div>;

  <div> <Suspense fallback> <GetCategory id /> </Suspense> </div>;
};