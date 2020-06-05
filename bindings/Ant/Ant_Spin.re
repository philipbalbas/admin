[@bs.module "antd"] [@react.component]
external make:
  (
    ~delay: int=?,
    ~indicator: React.element=?,
    ~size: [@bs.string] [ | `default | `small | `large]=?,
    ~spinning: bool=?,
    ~tip: string=?,
    ~wrapperClassName: string=?,
    ~children: 'b=?
  ) =>
  React.element =
  "Spin";