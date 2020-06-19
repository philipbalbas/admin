type rowEvents = {onClick: option(ReactEvent.Mouse.t => unit)};

type column('a, 'b) = {
  title: string,
  dataIndex: array(string),
  key: string,
  render: option(('a, 'b, int) => React.element), ///
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
  onCell: option(('b, int) => rowEvents),
  // onHeaderCell: (props: ColumnProps<T>) => TableEventListeners;
  // sortDirections: SortOrder[];
};

type expandable('a) = {
  childrenColumnName: option(array(string)),
  defaultExpandAllRows: option(bool),
  defaultExpandedRowKeys: option(array(string)),
  expandIcon: option('a => React.element),
  expandIconColumnIndex: option(int),
  expandedRowKeys: option(array(string)),
  expandedRowRender: option(('a, int) => React.element),
  expandRowByClick: option(bool),
  indentSize: option(int),
  rowExpandable: option('a => bool),
  // onExpand:  "Function(expanded, record)",
  // onExpandedRowsChange:  "Function(expandedRows),
};

let defaultExpandable = {
  childrenColumnName: None,
  defaultExpandAllRows: Some(false),
  defaultExpandedRowKeys: None,
  expandIcon: None,
  expandIconColumnIndex: None,
  expandedRowKeys: None,
  expandedRowRender: None,
  expandRowByClick: Some(true),
  indentSize: None,
  rowExpandable: None,
};

module RowSelectionType: {
  type t = pri string;
  let checkbox: t;
  let radio: t;
} = {
  type t = string;
  [@bs.inline]
  let checkbox = "checkbox";
  [@bs.inline]
  let radio = "radio";
};

type rowSelection('record) = {
  columnWidth: option(string),
  columnTitle: option(React.element),
  fixed: option(bool),
  getCheckboxProps: option('record => unit),
  hideSelectAll: option(bool),
  renderCell: option((bool, 'record, int, Dom.element) => React.element),
  selectedRowKeys: option(array(string)),
  // selections:   "object[]|boolean",,
  type_: option(RowSelectionType.t),
  onChange: option((array(string), array('record)) => unit),
  onSelect:
    option(('record, bool, array('record), ReactEvent.Mouse.t) => unit),
  onSelectAll: option((bool, array('record), array('record)) => unit),
  onSelectInvert: option(array(string) => unit),
};

let defaultRowSelection = {
  columnWidth: Some("60px"),
  columnTitle: None,
  fixed: None,
  getCheckboxProps: None,
  hideSelectAll: Some(false),
  renderCell: None,
  selectedRowKeys: None,
  type_: Some(RowSelectionType.checkbox),
  onChange: None,
  onSelect: None,
  onSelectAll: None,
  onSelectInvert: None,
};

[@bs.module "antd"] [@react.component]
external make:
  (
    ~tableLayout: [@bs.string] [ | `auto | `fixed]=?,
    ~bordered: bool=?,
    ~columns: array(column('a, 'b))=?,
    // ~components: TableComponents=?,
    ~dataSource: array('c)=?,
    ~expandable: expandable('e)=?,
    // ~footer: Function(currentPageData)=?,
    ~loading: bool=?,
    ~locale: 'd=?,
    ~pagination: bool=?,
    // ~rowClassName: Function(record, index):string=?,
    ~rowKey: Js.t('h) => string=?,
    ~rowSelection: 'f=?,
    ~scroll: 'g=?,
    ~showHeader: bool=?,
    ~size: [@bs.string] [ | `default | `middle | `small]=?,
    ~summary: 'd => React.element=?,
    ~title: 'd => React.element=?,
    // ~onChange: Function(pagination, filters, sorter, extra: { currentDataSource: [] })=?,
    // ~onHeaderRow: Function(column, index)=?,
    ~onRow: ('i, int) => rowEvents=?,
    // ~getPopupContainer: (triggerNode) => HTMLElement=?
    ~sortDirections: [@bs.string] [ | `ascend | `descend]=?,
    ~showSorterTooltip: bool=?
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