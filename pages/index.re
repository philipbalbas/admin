[@react.component]
let make = () => {
  open! React;

  let fallback = <div> "Loading ..."->React.string </div>;

  <div className="p-8">
    <Suspense fallback> <CategoryList /> </Suspense>
  </div>;
};

let default = make;