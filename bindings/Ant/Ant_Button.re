[@bs.module "antd"] [@react.component]
external make:
  (
    ~disabled: bool=?,
    ~ghost: bool=?,
    ~href: string=?,
    ~htmlType: string=?,
    ~icon: string=?,
    ~loading: bool=?,
    ~shape: [@bs.string] [ | `circle | `round]=?,
    ~size: [@bs.string] [ | `small | `large]=?,
    ~target: string=?,
    ~_type: [@bs.string] [ | `primary | `ghost | `dashed | `danger | `link]=?,
    ~onClick: unit => unit=?,
    ~block: bool=?
  ) =>
  React.element =
  "Button";