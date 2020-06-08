[@bs.module "antd"] [@react.component]
external make:
  (
    ~closable: bool=?,
    ~color: string=?,
    ~onClose: ReactEvent.Synthetic.t => unit=?,
    ~visible: bool=?,
    ~icon: React.element=?,
    ~children: 'b
  ) =>
  React.element =
  "Tag";