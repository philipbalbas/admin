type stringOrElement =
  | Str(string)
  | Elem(React.element);

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
      ~placeholder: stringOrElement=?,
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
    external make:
      (~autosize: bool=?, ~defaultValue: string=?) => React.element =
      "TextArea";
  };
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

module Modal = {
  [@bs.module "antd"] [@react.component]
  external make:
    (
      ~afterClose: unit => unit=?,
      ~bodyStyle: Js.t('a),
      ~cancelText: string=?,
      ~centered: bool=?,
      ~className: string=?,
      ~content: stringOrElement=?,
      ~icon: stringOrElement=?
    ) =>
    React.element =
    "Modal";
};

module Table = {
  type column = {
    title: option(string),
    dataIndex: option(string),
    key: option(string),
    // render: string => React.///
    // align: option([ | `left | `right | `center]),
    // ellipsis: option(bool),
    // filters: ColumnFilterItem[];
    // onFilter: (value: any, record: T) => boolean;
    // filterMultiple: option(bool),
    // filterDropdown: React.ReactNode | ((props: FilterDropdownProps) => React.ReactNode);
    // filterDropdownVisible: option(bool),
    // onFilterDropdownVisibleChange: (visible: boolean) => void;
    // sorter: boolean | CompareFn<T>;
    // defaultSortOrder: SortOrder;
    // colSpan: option(int),
    // width: string | number;
    // className: option(string),
    // fixed: boolean | typeof ColumnFixedPlacements[number];
    // filterIcon: React.ReactNode | ((filtered: boolean) => React.ReactNode);
    // filteredValue: any[] | null;
    // sortOrder: SortOrder | boolean;
    // children: ColumnProps<T>[];
    // onCellClick: (record: T, event: Event) => void;
    // onCell: (record: T, rowIndex: number) => TableEventListeners;
    // onHeaderCell: (props: ColumnProps<T>) => TableEventListeners;
    // sortDirections: SortOrder[];
  };

  [@bs.module "antd"] [@react.component]
  external make:
    (
      ~bordered: bool=?,
      ~childrenColumnName: array(string)=?,
      ~columns: array(column)=?,
      // ~components: TableComponents=?,
      ~dataSource: array('a)=?,
      ~defaultExpandAllRows: bool=?,
      ~defaultExpandedRowKeys: array(string)=?,
      ~expandedRowKeys: array(string)=?,
      // ~expandedRowRender: Function(record, index, indent, expanded):ReactNode=?,
      // ~expandIcon: Function(props):ReactNode=?,
      ~expandRowByClick: bool=?,
      // ~footer: Function(currentPageData)=?,
      ~indentSize: int=?,
      ~loading: bool=?,
      ~locale: 'b=?,
      ~pagination: 'b=?,
      // ~rowClassName: Function(record, index):string=?,
      // ~rowKey: string|Function(record):string=?,
      ~rowSelection: 'b=?,
      ~scroll: 'b=?,
      ~showHeader: bool=?,
      ~size: [@bs.string] [ | `default | `middle | `small]=?,
      // ~title: Function(currentPageData)=?,
      // ~onChange: Function(pagination, filters, sorter, extra: { currentDataSource: [] })=?,
      // ~onExpand: Function(expanded, record)=?,
      // ~onExpandedRowsChange: Function(expandedRows)=?,
      // ~onHeaderRow: Function(column, index)=?,
      // ~onRow: Function(record, index)=?,
      // ~getPopupContainer: (triggerNode) => HTMLElement=?
      ~test: string=?
    ) =>
    React.element =
    "Table";

  module Column = {
    [@bs.module "antd"] [@bs.scope "Table"] [@react.component]
    external make:
      (
        ~align: [@bs.string] [ | `left' | `right | `center]=?,
        ~ellipsis: bool=?,
        ~className: string=?,
        ~colSpan: int=?,
        ~dataIndex: string=?,
        ~defaultFilteredValue: array(string)=?,
        ~defaultSortOrder: [@bs.string] [ | `ascend | `descend]=?,
        //  ~filterDropdown: React.ReactNode | (props: FilterDropdownProps) => React.ReactNode=?,
        ~filterDropdownVisible: bool=?,
        ~filtered: bool=?,
        ~filteredValue: array(string)=?,
        //  ~filterIcon: ReactNode|(filtered: boolean) => ReactNode=?,
        ~filterMultiple: bool=?,
        //  ~filters: object[]=?,
        //  ~fixed: boolean|string=?,
        ~key: string=?,
        //  ~render: Function(text, record, index) {}=?,
        //  ~sorter: Function|bool=?,
        //  ~sortOrder: boolean|string=?,
        //  ~sortDirections: Array=?,
        //  ~title: ReactNode|({ sortOrder, sortColumn, filters }) => ReactNode=?,
        //  ~width: string|number=?,
        //  ~onCell: Function(record, rowIndex)=?,
        //  ~onFilter: Function=?,
        //  ~onFilterDropdownVisibleChange: function(visible) {}=?,
        //  ~onHeaderCell: Function(column)=?
        ~test: string=?
      ) =>
      React.element =
      "Column";
  };

  module ColumnGroup = {
    [@bs.module "antd"] [@bs.scope "Table"] [@react.component]
    external make: (~title: string=?) => React.element = "ColumnGroup";
  };
};

module Alert = {
  [@bs.module "antd"] [@react.component]
  external make:
    (
      ~banner: bool=?,
      ~closable: bool=?,
      ~closeText: string=?,
      ~description: string=?,
      ~icon: React.element=?,
      ~message: string=?,
      ~_type: [@bs.string] [ | `success | `error]=?,
      ~onClose: unit => unit=?
    ) =>
    React.element =
    "Alert";
};

module Button = {
  [@bs.module "antd"] [@react.component]
  external make:
    (
      ~disabled: bool=?,
      ~ghost: bool=?,
      ~href: string=?,
      ~htmlType: string=?,
      ~icon: string=?,
      ~loading: bool=?,
      ~shape: [@bs.string] [ | `circle | `round]=?,
      ~size: [@bs.string] [ | `small | `large]=?,
      ~target: string=?,
      ~_type: [@bs.string] [ | `primary | `ghost | `dashed | `danger | `link]=?,
      ~onClick: unit => unit=?,
      ~block: bool=?
    ) =>
    React.element =
    "Button";
};