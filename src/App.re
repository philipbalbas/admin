module Global = {
  [@bs.module "@emotion/core"] [@react.component]
  external make: (~styles: string) => React.element = "Global";
};

%raw
{|import styled from "@emotion/styled"|};
%raw
{|import css from "@styled-system/css"|};

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

module BodyContainer = {
  let wrapper = [%raw
    {|
      styled("div")(css({
        display: "flex",
      }))
    |}
  ];

  [@react.component]
  let make = (~children) => {
    React.createElementVariadic(wrapper, makeProps(~children, ()), [||]);
  };
};

[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();
  let container =
    switch (url.path) {
    | [] => <Home />
    | ["modules"] => <Home />
    | ["modules", id] => <ModulePage id />
    | ["subjects"] => <SubjectsList />
    | ["subjects", id] => <ModulePage id />
    | ["topics"] => <TopicsList />
    | ["pages"] => <PagesList />
    | ["notes"] => <NotesList />
    | _ => "Page Not Found"->ReasonReact.string
    };
  <>
    <Global styles />
    <Header />
    <BodyContainer> <Sidebar /> container </BodyContainer>
  </>;
};