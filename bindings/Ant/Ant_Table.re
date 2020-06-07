type column('a, 'b) = {
  title: string,
  dataIndex: string,
  key: string,
  render: option(('a, 'b, int) => React.element) ///
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
  defaultExpandAllRows: None,
  defaultExpandedRowKeys: None,
  expandIcon: None,
  expandIconColumnIndex: None,
  expandedRowKeys: None,
  expandedRowRender: None,
  expandRowByClick: None,
  indentSize: None,
  rowExpandable: None,
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
    // ~rowKey: string|Function(record):string=?,
    ~rowSelection: 'f=?,
    ~scroll: 'g=?,
    ~showHeader: bool=?,
    ~size: [@bs.string] [ | `default | `middle | `small]=?,
    ~summary: 'd => React.element=?,
    ~title: 'd => React.element=?,
    // ~onChange: Function(pagination, filters, sorter, extra: { currentDataSource: [] })=?,
    // ~onHeaderRow: Function(column, index)=?,
    // ~onRow: Function(record, index)=?,
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