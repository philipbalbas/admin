type t;

[@bs.send.pipe: t] external insertText: string => unit = "insertText";

[@bs.module "slate"] external createEditor: unit => t = "createEditor";

[@bs.module "slate-react"] external withReact: t => t = "withReact";

[@bs.module "slate-react"] [@react.component]
external make:
  (~editor: t, ~value: array('a), ~onChange: 'c => unit, ~children: 'b) =>
  React.element =
  "Slate";

module Editable = {
  [@bs.module "slate-react"] [@react.component]
  external make:
    (
      ~onKeyDown: (ReactEvent.Keyboard.t, 'f, 'g) => unit=?,
      ~renderElement: 'd => React.element=?,
      ~spellCheck: bool=?
    ) =>
    React.element =
    "Editable";
};

// type textData = {text: string};
// type data = {
//   _type: string,
//   children: array(textData),
// };

// type element = {_type: string};

// type elementProps('a, 'b) = {
//   attributes: 'a,
//   children: 'b,
//   element,
// };

// module Leaf = {
//   [@react.component]
//   let make = (~attributes, ~leaf, ~children) => <span> children </span>;
// };

// module Element = {
//   [@react.component]
//   let make = (~attributes, ~element, ~children) => {
//     switch (element._type) {
//     | "block-quote" =>
//       <Spread props=attributes> <blockquote> children </blockquote> </Spread>
//     | "bulleted-list" =>
//       <Spread props=attributes> <ul> children </ul> </Spread>
//     | "heading-one" => <Spread props=attributes> <h1> children </h1> </Spread>
//     | "heading-two" => <Spread props=attributes> <h2> children </h2> </Spread>
//     | "list-item" => <Spread props=attributes> <li> children </li> </Spread>
//     | "numbered-list" =>
//       <Spread props=attributes> <ol> children </ol> </Spread>
//     | _ => <Spread props=attributes> <p> children </p> </Spread>
//     };
//   };
// };

// let editor = React.useMemo1(() => Slate.(withReact(createEditor())), [||]);
// let (value, setValue) =
//   React.useState(() =>
//     [|
//       {
//         _type: "paragraph",
//         children: [|
//           {text: "This is editable "},
//           {text: "rich"},
//           {text: " text, "},
//           {text: "much"},
//           {text: " better than a "},
//           {text: "<textarea>"},
//           {text: "!"},
//         |],
//       },
//     |]
//   );

// let renderElement =
//   React.useCallback1(
//     props => {
//       <Element element={props.element} attributes={props.attributes}>
//         {props.children}
//       </Element>
//     },
//     [||],
//   );

// <Slate editor value onChange={newValue => setValue(newValue)}>
//   <Slate.Editable
//     renderElement
//     spellCheck=true
//     onKeyDown={(e, _, _) => {
//       let key = ReactEvent.Keyboard.key(e);
//       let isCtrl = ReactEvent.Keyboard.ctrlKey(e);
//       if (isCtrl) {
//         if (key == "b") {
//           ReactEvent.Keyboard.preventDefault(e);
//           editor |> Slate.insertText("and");
//         };
//       };
//     }}
//   />
// </Slate>

module Editor = {
  [@bs.module "./SlateEditor"] [@react.component]
  external make:
    (~readOnly: bool=?, ~defaultValue: string=?, ~onChange: 'a => unit=?) =>
    React.element =
    "default";
};