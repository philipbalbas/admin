[@bs.module "antd"] [@react.component]
external make:
  (
    ~children: 'b,
    ~activeTabkey: string=?,
    ~bordered: bool=?,
    ~cover: React.element=?,
    ~defaultActiveKey: string=?,
    ~extra: React.element=?,
    ~hoverable: bool=?,
    ~loading: bool=?,
    ~size: [@bs.string] [ | `default | `small]=?,
    ~title: string=?,
    ~_type: string=?,
    ~onTabChange: unit => unit=?,
    ~onClick: string => unit=?
  ) =>
  React.element =
  "Card";