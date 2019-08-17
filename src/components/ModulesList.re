let str = ReasonReact.string;
%raw
{|import styled from "@emotion/styled"|};
%raw
{|import css from "@styled-system/css"|};

module Wrapper = {
  let wrapper = [%raw
    {|
      styled.div(css({
        fontSize: 3,
        color: 1,
      }))
    |}
  ];

  [@react.component]
  let make = (~children) => {
    React.createElementVariadic(wrapper, makeProps(~children, ()), [||]);
  };
};

[@react.component]
let make = (~modules) => {
  let modulesList =
    modules
    |> Array.map(module_ =>
         switch (module_) {
         | Some(module_) =>
           switch (module_##name, module_##id) {
           | (Some(name), Some(id)) => <Module key=id name />
           | _ => "No Name"->str
           }
         | None => "None"->str
         }
       )
    |> React.array;

  <Wrapper> modulesList </Wrapper>;
};