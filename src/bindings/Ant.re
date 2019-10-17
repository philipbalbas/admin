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
      ~value: string=?,
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

module Menu = {
  [@bs.module "antd"] [@react.component]
  external make:
    (
      ~defaultOpenKeys: array(string)=?,
      ~defaultSelectedKeys: array(string)=?,
      ~forceSubMenuRender: bool=?,
      ~inlineCollapsed: bool=?,
      ~inlineIndent: int=?,
      ~mode: [@bs.string] [ | `vertical | `horizontal | `inline]=?,
      ~multiple: bool=?,
      ~openKeys: array(string)=?,
      ~selectable: bool=?,
      ~selectedKeys: array(string)=?,
      ~style: Js.t('a)=?,
      ~submenuCloseDelay: int=?,
      ~theme: [@bs.string] [ | `light | `dard]=?,
      ~onClick: ReactEvent.Form.t => unit=?,
      ~onOpenChange: unit => unit=?,
      ~onSelect: ReactEvent.Form.t => unit=?,
      ~overflowedIndicator: React.element=?,
      ~children: 'b
    ) =>
    React.element =
    "Menu";

  module Item = {
    [@bs.module "antd"] [@bs.scope "Menu"] [@react.component]
    external make:
      (~disabled: bool=?, ~key: string=?, ~title: string=?, ~children: 'b) =>
      React.element =
      "Item";
  };

  module SubMenu = {
    [@bs.module "antd"] [@bs.scope "Menu"] [@react.component]
    external make:
      (
        ~popupClassName: string=?,
        ~children: 'b,
        ~disabled: bool=?,
        ~key: string=?,
        ~title: string=?,
        ~onTitleClick: ReactEvent.Form.t => unit=?
      ) =>
      React.element =
      "SubMenu";
  };

  module ItemGroup = {
    [@bs.module "antd"] [@bs.scope "Menu"] [@react.component]
    external make: (~children: 'b, ~title: string=?) => React.element =
      "ItemGroup";
  };
};

module Table = {
  // bordered
};