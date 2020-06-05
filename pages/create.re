[@react.component]
let make = () => {
  open! React;

  let fallback = <div> "Loading..."->string </div>;

  <div> <Suspense fallback> <CategoryForm /> </Suspense> </div>;
};

let default = make;