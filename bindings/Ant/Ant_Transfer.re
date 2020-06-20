module Direction: {
  type t = pri string;
  let left: t;
  let right: t;
} = {
  type t = string;
  [@bs.inline]
  let left = "left";
  [@bs.inline]
  let right = "right";
};

type renderProps('a) = {
  direction: Direction.t,
  disabled: bool,
  filteredItems: array('a),
  onItemSelect: (string, bool) => unit,
  onItemSelectAll: (array(string), bool) => unit,
  selectedKeys: array(string),
};

[@bs.module "antd"] [@react.component]
external make:
  (
    ~dataSource: array('a)=?,
    ~disabled: bool=?,
    ~filterOption: (string, Js.t('c)) => bool=?,
    ~footer: 'b => React.element=?,
    // ~listStyle: "object|({direction: 'left'|'right'}) => object",=?,
    // ~locale: "{ itemUnit: string; itemsUnit: string; searchPlaceholder: string; notFoundContent: ReactNode; }",=?,
    ~operations: array(string)=?,
    ~oneWay: bool=?,
    // ~operationStyle: "object",=?,
    // ~pagination: "boolean | { pageSize: number }",=?,
    ~render: 'a => React.element=?,
    ~selectedKeys: array(string)=?,
    ~showSearch: bool=?,
    ~showSelectAll: bool=?,
    ~targetKeys: array(string)=?,
    ~titles: array(React.element)=?,
    // ~selectAllLabels: "(ReactNode | (info: { selectedCount: number, totalCount: number }) => ReactNode)[]",=?,
    ~onChange: (array(string), Direction.t, array(string)) => unit=?,
    ~onScroll: ('direction, ReactEvent.Synthetic.t) => unit=?,
    ~onSearch: ('direction, string) => unit=?,
    ~onSelectChange: ('sourceSelectedKeys, 'targetSelectedKeys) => unit=?,
    ~rowKey: 'a => string=?,
    ~children: 'c=?
  ) =>
  React.element =
  "Transfer";

module Render = {
  [@bs.module "antd"] [@react.component]
  external make:
    (
      ~dataSource: array('a)=?,
      ~disabled: bool=?,
      ~filterOption: (string, Js.t('c)) => bool=?,
      ~footer: 'b => React.element=?,
      // ~listStyle: "object|({direction: 'left'|'right'}) => object",=?,
      // ~locale: "{ itemUnit: string; itemsUnit: string; searchPlaceholder: string; notFoundContent: ReactNode; }",=?,
      ~operations: array(string)=?,
      ~oneWay: bool=?,
      // ~operationStyle: "object",=?,
      // ~pagination: "boolean | { pageSize: number }",=?,
      ~render: 'a => React.element=?,
      ~selectedKeys: array(string)=?,
      ~showSearch: bool=?,
      ~showSelectAll: bool=?,
      ~targetKeys: array(string)=?,
      ~titles: array(React.element)=?,
      // ~selectAllLabels: "(ReactNode | (info: { selectedCount: number, totalCount: number }) => ReactNode)[]",=?,
      ~onChange: ('targetKeys, 'direction, 'moveKeys) => unit=?,
      ~onScroll: ('direction, ReactEvent.Synthetic.t) => unit=?,
      ~onSearch: ('direction, string) => unit=?,
      ~onSelectChange: ('sourceSelectedKeys, 'targetSelectedKeys) => unit=?,
      ~rowKey: 'a => string=?,
      ~children: renderProps('a) => React.element=?
    ) =>
    React.element =
    "Transfer";
};