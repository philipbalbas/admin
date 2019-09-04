module Table = {
  [@bs.module "@material-ui/core"] [@react.component]
  external make:
    (
      ~children: 'b,
      ~padding: [@bs.string] [ | `default | `checkbox | `none]=?,
      ~stickyHeader: bool=?
    ) =>
    React.element =
    "Table";
};

module TableBody = {
  [@bs.module "@material-ui/core"] [@react.component]
  external make: (~children: 'b) => React.element = "TableBody";
};

module TableFooter = {
  [@bs.module "@material-ui/core"] [@react.component]
  external make: (~children: 'b) => React.element = "TableFooter";
};

module TableHead = {
  [@bs.module "@material-ui/core"] [@react.component]
  external make: (~children: 'b) => React.element = "TableHead";
};

module TableRow = {
  [@bs.module "@material-ui/core"] [@react.component]
  external make:
    (~children: 'b, ~hover: bool=?, ~selecter: bool=?) => React.element =
    "TableRow";
};

module TableCell = {
  [@bs.module "@material-ui/core"] [@react.component]
  external make:
    (
      ~children: 'b,
      ~padding: [@bs.string] [ | `default | `checkbox | `none]=?,
      ~align: [@bs.string] [ | `inherit_ | `left | `center | `right | `justify]
                =?,
      ~scope: string=?,
      ~size: [@bs.string] [ | `small | `medium]=?,
      ~sortDirection: [@bs.string] [ | `asc | `desc | `false_]=?,
      ~variant: [@bs.string] [ | `head | `body | `footer]=?
    ) =>
    React.element =
    "TableCell";
};