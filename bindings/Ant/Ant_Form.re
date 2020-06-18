type t;

[@bs.module "antd"] [@bs.scope "Form"]
external useForm: unit => (t, unit) = "useForm";

[@bs.send.pipe: t] external resetFields: unit => unit = "resetFields";
[@bs.send.pipe: t] external getFieldValue: string => 'a = "getFieldValue";
[@bs.send.pipe: t] external submit: unit => unit = "submit";

[@bs.module "antd"] [@react.component]
external make:
  (
    ~children: 'a=?,
    // ~component:  "ComponentType | false",,
    ~colon: bool=?,
    // ~fields:  "FieldData[]",,
    ~form: t=?,
    ~hideRequiredMark: bool=?,
    ~initialValues: Js.t('e)=?,
    ~labelAlign: [@bs.string] [ | `left | `right]=?,
    ~labelCol: Js.t('d)=?,
    ~layout: [@bs.string] [ | `horizontal | `vertical | `inline]=?,
    ~name: string=?,
    // ~scrollToFirstError:  "false",,
    ~size: [@bs.string] [ | `small | `middle | `large]=?,
    // ~validateMessages:  "ValidateMessages",,
    ~wrapperCol: Js.t('d)=?,
    ~onFinish: Js.t('f) => unit=?,
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
      ~isListField: bool=?,
      ~fieldKey: int=?,
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
  type field = {
    name: int,
    key: int,
    isListField: bool,
    fieldKey: int,
  };

  type operation('a) = {
    add: 'a => unit,
    remove: int => unit,
    move: unit => unit,
  };

  [@bs.module "antd"] [@bs.scope "Form"] [@react.component]
  external make:
    (
      ~name: string,
      ~children: (array(field), operation('a)) => React.element
    ) =>
    React.element =
    "List";
};