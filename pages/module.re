open React;

[@react.component]
let make = () => {
  let route = Next.Router.useRouter();
  let categoryId = route.query##categoryId;
  let moduleId = route.query##moduleId;

  <Suspense fallback={<div> "Loading..."->React.string </div>}>
    <GetModule categoryId moduleId />
  </Suspense>;
};