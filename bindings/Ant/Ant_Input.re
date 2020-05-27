[@bs.module "antd"] [@react.component]
external make:
  (
    ~addonAfter: string=?,
    ~addonBefore: string=?,
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
    ~allowClear: bool=?
  ) =>
  React.element =
  "Input";

module TextArea = {
  [@bs.module "antd"] [@bs.scope "Input"] [@react.component]
  external make: (~autosize: bool=?, ~defaultValue: string=?) => React.element =
    "TextArea";
};