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

module Number = {
  [@bs.module "antd"] [@react.component]
  external make:
    (
      ~autoFocus: bool=?,
      ~defaultValue: int=?,
      ~disabled: bool=?,
      // ~formatter:  "function(value: number | string): string",=?,
      ~max: int=?,
      ~min: int=?,
      // ~parser:  "function( string): number",=?,
      ~precision: int=?,
      ~decimalSeparator: string=?,
      ~size: [@bs.string] [ | `large | `middle | `small]=?,
      ~step: 'a=?,
      ~_type: string=?,
      ~value: int=?,
      ~onChange: 'b => unit=?,
      ~onPressEnter: ReactEvent.Synthetic.t => unit=?
    ) =>
    React.element =
    "InputNumber";
};
