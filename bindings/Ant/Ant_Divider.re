[@bs.module "antd"] [@react.component]
external make:
  (
    ~className: string=?,
    ~dashed: bool=?,
    ~orientation: [@bs.string] [ | `left | `right | `center]=?,
    ~style: Js.t('a)=?,
    ~_type: [@bs.string] [ | `horizontal | `vertical]=?,
    ~plain: bool=?
  ) =>
  React.element =
  "Divider";