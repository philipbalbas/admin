open React;

[@react.component]
let make = () => {
  <Suspense fallback={"Loading..."->string}>
    <FormCategory mutationType=`CREATE />
  </Suspense>;
};

let default = make;