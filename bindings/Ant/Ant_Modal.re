type t;
type context;

[@bs.module "antd"] [@bs.scope "Modal"]
external useModal: unit => (t, context) = "useModal";

[@bs.send.pipe: t] external info: unit => unit = "info";
[@bs.send.pipe: t] external success: unit => unit = "success";
[@bs.send.pipe: t] external error: unit => unit = "error";
[@bs.send.pipe: t] external warning: unit => unit = "warning";
[@bs.send.pipe: t] external confirm: unit => unit = "confirm";

[@bs.module "antd"] [@react.component]
external make:
  (
    ~afterClose: unit => unit=?,
    ~bodyStyle: ReactDOMRe.Style.t=?,
    ~cancelText: React.element=?,
    ~centered: bool=?,
    ~closable: bool=?,
    ~closeIcon: React.element=?,
    ~confirmLoading: bool=?,
    ~destroyOnClose: bool=?,
    ~footer: React.element=?,
    ~forceRender: bool=?,
    // ~getContainer:   "HTMLElement | () => HTMLElement | Selectors | false",=?,
    ~mask: bool=?,
    ~maskClosable: bool=?,
    ~maskStyle: Js.t('a)=?,
    ~okText: React.element=?,
    ~okType: string=?,
    // ~okButtonProps:   "ButtonProps",=?,
    // ~cancelButtonProps:   "ButtonProps",=?,
    ~style: ReactDOMRe.Style.t=?,
    ~title: React.element=?,
    ~visible: bool=?,
    ~width: string=?,
    ~wrapClassName: string=?,
    ~zIndex: int=?,
    ~onCancel: unit => unit=?,
    ~onOk: unit => unit=?,
    ~children: React.element
  ) =>
  React.element =
  "Modal";