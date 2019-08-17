let str = ReasonReact.string;

%raw
{|import styled from "@emotion/styled"|};
%raw
{|import css from "@styled-system/css"|};

module SidebarWrapper = {
  let wrapper = [%raw
    {|
      styled("div")(css({
        flexBasis: "10%",
        maxWidth: "160px",
        borderRight: "1px solid  #f5f5f5",
        height: "100%",
        pt: 3,
        pl: 3,
        display: "flex",
        flexDirection: "column",

        "a": {
          fontSize: 2,
          mb: 2,
          "&:hover": {
            color: 1
          }
        }
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
  <SidebarWrapper>
    <Link to_="/module"> "Modules"->str </Link>
    <Link to_="/subject"> "Subjects"->str </Link>
    <Link to_="/topic"> "Topics"->str </Link>
    <Link to_="/page"> "Pages"->str </Link>
    <Link to_="/note"> "Notes"->str </Link>
  </SidebarWrapper>;
};