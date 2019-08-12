[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();
  switch (url.path) {
  | [] => <Home />
  | ["notes"] => <Note />
  | _ => "Page Not Found"->ReasonReact.string
  };
};