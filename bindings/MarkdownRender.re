type t;

type renderProps = {
  .
  "children": string,
  "value": string,
};

[@bs.deriving abstract]
type renderers = {
  math: (~props: renderProps) => React.element,
  inlineMath: (~props: renderProps) => React.element,
};

type plugins = array(string);

module ReactMarkdown = {
  [@bs.module "react-markdown"] [@react.component]
  external make:
    (~source: string, ~plugins: plugins=?, ~renderers: renderers=?) =>
    React.element =
    "default";
};

[@bs.module "remark-math"] external remarkMathPlugin: string = "default";

module BlockMath = {
  [@bs.module "react-katex"] [@react.component]
  external make: (~children: 'b) => React.element = "BlockMath";
};

module InlineMath = {
  [@bs.module "react-katex"] [@react.component]
  external make: (~children: 'b) => React.element = "InlineMath";
};

[@react.component]
let make = (~source: string) => {
  let plugins = [|remarkMathPlugin|];

  let renderers =
    renderers(
      ~math=(~props) => <BlockMath> {props##value} </BlockMath>,
      ~inlineMath=(~props) => <InlineMath> {props##value} </InlineMath>,
    );
  <ReactMarkdown source renderers plugins />;
};