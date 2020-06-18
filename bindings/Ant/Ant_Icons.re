module PlusOutlined = {
  [@bs.module "@ant-design/icons"] [@react.component]
  external make: _ => React.element = "PlusOutlined";
};

module PlusCircleOutlined = {
  [@bs.module "@ant-design/icons"] [@react.component]
  external make: _ => React.element = "PlusCircleOutlined";
};

module MinusCircleOutlined = {
  [@bs.module "@ant-design/icons"] [@react.component]
  external make:
    (~onClick: unit => unit=?, ~className: string=?) => React.element =
    "MinusCircleOutlined";
};

module SettingFilled = {
  [@bs.module "@ant-design/icons"] [@react.component]
  external make:
    (~onClick: unit => unit=?, ~className: string=?) => React.element =
    "SettingFilled";
};