[@bs.module "antd"] [@react.component]
external make:
  (
    ~allowClear: bool=?,
    ~autoClearSearchValue: bool=?,
    ~autoFocus: bool=?,
    ~defaultActiveFirstOption: bool=?,
    ~defaultValue: 'a=?,
    ~disabled: bool=?,
    ~dropdownClassName: string=?,
    // ~dropdownMatchSelectWidth:  bool number",=?,
    ~dropdownMatchSelectWidth: 'b=?,
    ~dropdownRender: React.element => React.element=?,
    // ~dropdownStyle:  "CSSProperties",=?,
    ~filterOption: (string, Js.t('c)) => bool=?,
    // ~getPopupContainer:  "function(triggerNode)",=?,
    ~labelInValue: bool=?,
    ~listHeight: int=?,
    ~maxTagCount: int=?,
    ~maxTagTextLength: int=?,
    // ~maxTagPlaceholder:  "ReactNode/function(omittedValues)",=?,
    ~tagRender: 'd => React.element=?,
    ~mode: [@bs.string] [ | `multiple | `tags]=?,
    ~notFoundContent: React.element=?,
    // ~options:  "{ label, value }[]",=?,
    ~optionFilterProp: string=?,
    ~optionLabelProp: string=?,
    ~placeholder: React.element=?,
    ~placeholder: 'e=?,
    ~showArrow: bool=?,
    ~showSearch: bool=?,
    ~size: [@bs.string] [ | `large | `middle | `small]=?,
    ~suffixIcon: React.element=?,
    ~removeIcon: React.element=?,
    ~clearIcon: React.element=?,
    ~menuItemSelectedIcon: React.element=?,
    ~tokenSeparators: array(string)=?,
    ~value: 'a=?,
    ~_virtual: bool=?,
    ~onBlur: unit => unit=?,
    ~onChange: 'g => unit=?,
    // ~onDeselect:  "function(string|number|LabeledValue)",=?,
    ~onFocus: unit => unit=?,
    ~onInputKeyDown: unit => unit=?,
    ~onMouseEnter: unit => unit=?,
    ~onMouseLeave: unit => unit=?,
    ~onPopupScroll: unit => unit=?,
    ~onSearch: string => unit=?,
    // ~onSelect:  "function(string|number|LabeledValue, option:Option)",=?,
    ~defaultOpen: bool=?,
    ~_open: bool=?,
    // ~onDropdownVisibleChange:  "function(open)",=?,
    ~loading: bool=?,
    ~bordered: bool=?,
    ~className: string=?,
    ~children: 'f
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
      ~value: 'a,
      ~className: string=?,
      ~children: 'b
    ) =>
    React.element =
    "Option";
};