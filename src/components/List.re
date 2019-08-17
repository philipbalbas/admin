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
let make = (~items, ~entity) => {
  let itemsList =
    items
    |> Array.map(item =>
         switch (item) {
         | Some(item) =>
           switch (item##name, item##id) {
           | (Some(name), Some(id)) => <ModuleCard key=id name id entity />
           | _ => "No Name"->str
           }
         | None => "None"->str
         }
       )
    |> React.array;

  <Wrapper> itemsList </Wrapper>;
};