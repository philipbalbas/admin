[@bs.module "antd"] [@react.component]
external make:
  (
    ~banner: bool=?,
    ~closable: bool=?,
    ~closeText: string=?,
    ~description: string=?,
    ~icon: React.element=?,
    ~message: string=?,
    ~_type: [@bs.string] [ | `success | `error]=?,
    ~onClose: unit => unit=?
  ) =>
  React.element =
  "Alert";