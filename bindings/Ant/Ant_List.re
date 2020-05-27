type pagination = {position: [ | `top | `bottom | `both]};

type grid = {
  column: int,
  gutter: int,
  xs: option(int),
  sm: option(int),
  md: option(int),
  lg: option(int),
  xl: option(int),
  xx: option(int),
};

[@bs.module "antd"] [@react.component]
external make:
  (
    ~bordered: bool=?,
    ~footer: React.element=?,
    ~grid: grid=?,
    ~header: React.element=?,
    ~itemLayout: string=?,
    // ~rowKey:  string|Function(re,
    // ~loading:  boolean|SpinProps ,
    ~loadMore: React.element=?,
    // ~locale:  object,,
    ~pagination: pagination=?,
    ~size: [@bs.string] [ | `default | `large | `small]=?,
    ~split: bool=?,
    ~dataSource: array('a),
    ~renderItem: 'a => React.element
  ) =>
  React.element =
  "List";

module Item = {
  [@bs.module "antd"] [@bs.scope "List"] [@react.component]
  external make:
    (
      ~actions: array(React.element)=?,
      ~extra: React.element=?,
      ~children: 'b,
      ~className: string=?
    ) =>
    React.element =
    "Item";
};