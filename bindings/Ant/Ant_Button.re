[@bs.module "antd"] [@react.component]
external make:
  (
    ~disabled: bool=?,
    ~ghost: bool=?,
    ~href: string=?,
    ~htmlType: string=?,
    ~icon: React.element=?,
    ~loading: bool=?,
    ~shape: [@bs.string] [ | `circle | `round]=?,
    ~size: [@bs.string] [ | `small | `large]=?,
    ~target: string=?,
    ~_type: [@bs.string] [
              | `primary
              | `ghost
              | `dashed
              | `danger
              | `link
              | `default
            ]
              =?,
    ~onClick: unit => unit=?,
    ~block: bool=?,
    ~className: string=?,
    ~children: 'a=?,
    ~style: Js.t('b)=?
  ) =>
  React.element =
  "Button";