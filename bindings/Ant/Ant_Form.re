type t;

[@bs.module "antd"] [@bs.scope "Form"]
external useForm: unit => array(t) = "useForm";

[@bs.send.pipe: t] external resetFields: unit => unit = "resetFields";

[@bs.module "antd"] [@react.component]
external make:
  (
    ~children: 'a=?,
    // ~component:  "ComponentType | false",,
    ~colon: bool=?,
    // ~fields:  "FieldData[]",,
    ~form: t=?,
    ~hideRequiredMark: bool=?,
    // ~initialValues:  "object",,
    ~labelAlign: [@bs.string] [ | `left | `right]=?,
    ~labelCol: Js.t('d)=?,
    ~layout: [@bs.string] [ | `horizontal | `vertical | `inline]=?,
    ~name: string=?,
    // ~scrollToFirstError:  "false",,
    ~size: [@bs.string] [ | `small | `middle | `large]=?,
    // ~validateMessages:  "ValidateMessages",,
    ~wrapperCol: Js.t('d)=?,
    // ~onFinish:  "Function(values)",,
    // ~onFinishFailed:  "Function({ values, errorFields, outOfDate })",,
    // ~onFieldsChange:  "Function(changedFields, allFields)",,
    ~onValuesChange: ('b, 'c) => unit=?
  ) =>
  React.element =
  "Form";

module Item = {
  [@bs.module "antd"] [@bs.scope "Form"] [@react.component]
  external make:
    (
      ~colon: bool=?,
      // ~dependencies:  NamePath[],
      ~extra: React.element=?,
      ~getValueFromEvent: 'a => 'b=?,
      ~getValueProps: 'c => 'd=?,
      ~hasFeedback: bool=?,
      ~help: React.element=?,
      ~htmlFor: string=?,
      ~initialValue: string=?,
      ~noStyle: bool=?,
      ~label: React.element=?,
      ~labelAlign: [@bs.string] [ | `left | `right]=?,
      ~labelCol: Js.t('i)=?,
      ~name: string=?,
      ~normalize: ('e, 'f, 'g) => 'h=?,
      ~required: bool=?,
      ~rules: array(Js.t('i))=?,
      // ~shouldUpdate:  bool=? | (prevValue, curValue) => bool=?,
      ~trigger: string=?,
      ~validateFirst: bool=?,
      ~validateStatus: string=?,
      ~validateTrigger: array(string)=?,
      ~valuePropName: string=?,
      ~wrapperCol: Js.t('i)=?,
      ~children: 'b=?,
      ~className: string=?
    ) =>
    React.element =
    "Item";
};

module List = {
  // type field = {
  //   name: int,
  //   key: int,
  //   isListField: bool,
  //   fieldKey: int,
  // };

  type operation('b) = {
    add: 'b => unit,
    remove: int => unit,
    move: unit => unit,
  };

  [@bs.module "antd"] [@bs.scope "Form"] [@react.component]
  external make:
    (
      ~name: string=?,
      ~children: (array('a), operation('b)) => React.element
    ) =>
    React.element =
    "List";
};