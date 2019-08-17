module Global = {
  [@bs.module "@emotion/core"] [@react.component]
  external make: (~styles: string) => React.element = "Global";
};

let styles = [%raw
  {|
    {
      "html,body": {
        margin: 0,
        fontFamily: "'Open Sans', sans-serif"
      },
      "*": {
        boxSizing: "border-box",
        margin: 0,
      },

      "* + *": {
        marginTop: 0
      }
    }
  |}
];

[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();
  let container =
    switch (url.path) {
    | [] => <Home />
    | ["notes"] => <Note />
    | _ => "Page Not Found"->ReasonReact.string
    };
  <> <Global styles /> container </>;
};