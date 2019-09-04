module Select = {
  [@bs.module "antd"] [@react.component]
  external make:
    (
      ~allowClear: bool=?,
      ~defaultActiveFirstOption: bool=?,
      ~disabled: bool=?,
      ~className: string=?,
      ~dropdownClassName: string=?,
      ~dropdownMatchSelectWidth: bool=?,
      ~labelInValue: bool=?,
      ~maxTagCount: int=?,
      ~maxTagTextLength: int=?,
      ~notFoundContent: string=?,
      ~optionFilterProp: string=?,
      ~optionLabelProp: string=?,
      ~showArrow: bool=?,
      ~showSearch: bool=?,
      ~size: string=?,
      ~inputValue: string=?,
      ~defaultOpen: bool=?,
      ~loading: bool=?,
      ~mode: [@bs.string] [ | `multiple | `default | `tags]=?,
      ~onSelect: string => unit=?,
      ~onBlur: unit => unit=?,
      ~onFocus: unit => unit=?,
      ~tokenSeparators: array(string)=?,
      ~children: 'b
    ) =>
    React.element =
    "Select";

  module Option = {
    [@bs.module "antd"] [@bs.scope "Select"] [@react.component]
    external make:
      (
        ~disabled: bool=?,
        ~key: string,
        ~title: string=?,
        ~value: string,
        ~className: string=?,
        ~children: 'b
      ) =>
      React.element =
      "Option";
  };
};

module Input = {
  [@bs.module "antd"] [@react.component]
  external make:
    (
      ~disabled: bool=?,
      ~id: string=?,
      ~size: string=?,
      ~value: string=?,
      ~onChange: ReactEvent.Form.t => unit=?,
      ~onPressEnter: string => unit=?,
      ~allowClear: bool=?
    ) =>
    React.element =
    "Input";
};