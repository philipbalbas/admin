open React;

[@react.component]
let make = () => {
  <div className="w-full h-screen flex items-center justify-center">
    <div className="w-2/4">
      <Suspense fallback={"Loading..."->string}> <FormSignin /> </Suspense>
    </div>
  </div>;
};