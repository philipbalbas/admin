[@bs.module "antd"] [@react.component]
external make:
  (
    ~afterClose: unit => unit=?,
    ~bodyStyle: Js.t('a),
    ~cancelText: string=?,
    ~centered: bool=?,
    ~className: string=?,
    ~content: React.element=?,
    ~icon: React.element=?
  ) =>
  React.element =
  "Modal";