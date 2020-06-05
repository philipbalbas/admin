[@bs.module "antd"] [@react.component]
external make:
  (
    ~autoFocus: bool=?,
    ~checked: bool=?,
    ~defaultChecked: bool=?,
    ~disabled: bool=?,
    ~value: 'a=?,
    ~children: 'b
  ) =>
  React.element =
  "Radio";

module Button = {
  [@bs.module "antd"] [@bs.scope "Radio"] [@react.component]
  external make:
    (
      ~autoFocus: bool=?,
      ~checked: bool=?,
      ~defaultChecked: bool=?,
      ~disabled: bool=?,
      ~value: 'a=?,
      ~children: 'b
    ) =>
    React.element =
    "Button";
};

module Group = {
  [@bs.module "antd"] [@bs.scope "Radio"] [@react.component]
  external make:
    (
      ~defaultValue: 'a=?,
      ~disabled: bool=?,
      ~name: string=?,
      ~options: array('b)=?,
      ~size: [@bs.string] [ | `large | `middle | `small]=?,
      ~value: 'a=?,
      ~onChange: ReactEvent.Synthetic.t => unit=?,
      ~buttonStyle: [@bs.string] [ | `outline | `solid]=?,
      ~children: 'c
    ) =>
    React.element =
    "Group";
};