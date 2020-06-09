// open Ant;

[@react.component]
let make = () => {
  open! React;

  let router = Next.Router.useRouter();
  let categoryId = router.query##categoryId;

  <div className="w-8/12">
    <div className="text-2xl"> "Create Card"->React.string </div>
    <Suspense fallback={<div> "Loading..."->string </div>}>
      <FormCard categoryId />
    </Suspense>
  </div>;
};