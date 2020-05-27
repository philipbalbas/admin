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