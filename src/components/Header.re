let str = ReasonReact.string;

%raw
{|import styled from "@emotion/styled"|};
%raw
{|import css from "@styled-system/css"|};

module HeaderContainer = {
  let header = [%raw
    {|
      styled.div(css({
        border: "1px solid #e2e2e2",
        p: 3,
        display: "flex",
        justifyContent: "space-between"
      }))
    |}
  ];

  [@react.component]
  let make = (~children) => {
    React.createElementVariadic(header, makeProps(~children, ()), [||]);
  };
};

[@react.component]
let make = () => {
  <HeaderContainer>
    <Link to_="/"> "Reviewer Admin"->str </Link>
    <nav> "Hello User"->str </nav>
  </HeaderContainer>;
};