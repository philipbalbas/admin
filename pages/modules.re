[@react.component]
let make = () => {
  open! React;
  let router = Next.Router.useRouter();
  let id = router.query##categoryId;

  let fallback = <div> "Loading..."->string </div>;

  <Suspense fallback> <ListModules id /> </Suspense>;
};

let default = make;