[@bs.module "antd"] [@react.component]
external make:
  (
    ~addonAfter: React.element=?,
    ~addonBefore: React.element=?,
    ~defaultValue: string=?,
    ~disabled: bool=?,
    ~id: string=?,
    ~maxLength: int=?,
    ~placeholder: string=?,
    ~prefix: string=?,
    ~size: string=?,
    ~suffix: string=?,
    ~_type: string=?,
    ~value: string=?,
    ~onChange: ReactEvent.Form.t => unit=?,
    ~onPressEnter: string => unit=?,
    ~allowClear: bool=?,
    ~style: Js.t('a)=?
  ) =>
  React.element =
  "Input";

module TextArea = {
  [@bs.module "antd"] [@bs.scope "Input"] [@react.component]
  external make:
    (
      ~autoSize: 'a=?,
      ~defaultValue: string=?,
      ~value: string=?,
      ~onPressEnter: ReactEvent.Synthetic.t => unit=?,
      // ~onResize:   "function({ width, height })=?
      ~onChange: ReactEvent.Form.t => unit=?,
      ~allowClear: bool=?
    ) =>
    React.element =
    "TextArea";
};