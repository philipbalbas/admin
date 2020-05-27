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

[@bs.module "antd"] [@react.component]
external make:
  (
    ~tableLayout: [@bs.string] [ | `auto | `fixed]=?,
    ~bordered: bool=?,
    ~childrenColumnName: array(string)=?,
    ~columns: array(column('a, 'b))=?,
    // ~components: TableComponents=?,
    ~dataSource: array('c)=?,
    ~defaultExpandAllRows: bool=?,
    ~defaultExpandedRowKeys: array(string)=?,
    ~expandedRowKeys: array(string)=?,
    // ~expandedRowRender: Function(record, index, indent, expanded):ReactNode=?,
    // ~expandIcon: Function(props):ReactNode=?,
    ~expandRowByClick: bool=?,
    // ~footer: Function(currentPageData)=?,
    ~indentSize: int=?,
    ~loading: bool=?,
    ~locale: 'd=?,
    ~pagination: 'e=?,
    // ~rowClassName: Function(record, index):string=?,
    // ~rowKey: string|Function(record):string=?,
    ~rowSelection: 'f=?,
    ~scroll: 'g=?,
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