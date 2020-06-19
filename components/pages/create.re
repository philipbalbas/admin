open React;

[@gentype]
[@react.component]
let make = () => {
  <Suspense fallback={"Loading..."->string}>
    <FormCategory mutationType=`CREATE />
  </Suspense>;
};

[@gentype]
let default = make;