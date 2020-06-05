[@bs.module "antd"] [@react.component]
external make:
  (
    ~autoFocus: bool=?,
    ~checked: bool=?,
    ~checkedChildren: React.element=?,
    ~defaultChecked: bool=?,
    ~disabled: bool=?,
    ~loading: bool=?,
    ~size: string=?,
    ~unCheckedChildren: React.element=?,
    ~onChange: (bool, ReactEvent.Synthetic.t) => unit=?,
    ~onClick: (bool, ReactEvent.Synthetic.t) => unit=?,
    ~className: string=?
  ) =>
  React.element =
  "Switch";