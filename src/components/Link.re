%raw
{|import styled from "@emotion/styled"|};
%raw
{|import css from "@styled-system/css"|};

module LinkWrapper = {
  let wrapper = [%raw
    {|
      styled("a")(css({
        cursor: "pointer",
      }))
    |}
  ];

  [@react.component]
  let make = (~children, ~onClick) => {
    React.createElementVariadic(
      wrapper,
      makeProps(~children, ~onClick, ()),
      [||],
    );
  };
};

[@react.component]
let make = (~to_, ~children) => {
  let handleClick = _e => {
    ReasonReactRouter.push(to_);
  };
  <LinkWrapper onClick=handleClick> children </LinkWrapper>;
};