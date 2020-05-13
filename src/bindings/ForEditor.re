[@bs.deriving jsConverter]
type toolbar = {
  h1: bool,
  h2: bool,
  h3: bool,
  h4: bool,
  img: bool,
  link: bool,
  code: bool,
  preview: bool,
  expand: bool,
  undo: bool,
  redo: bool,
  save: bool,
  subfield: bool,
};

let defaultOption =
  toolbarToJs({
    h1: true,
    h2: true,
    h3: true,
    h4: true,
    img: true,
    link: true,
    code: true,
    preview: true,
    expand: true,
    undo: false,
    redo: false,
    save: false,
    subfield: true,
  });

[@bs.module "for-editor"] [@react.component]
external make:
  (
    ~value: string,
    ~onChange: (Js.String.t => Js.String.t) => unit,
    ~onSave: (Js.String.t => Js.String.t) => unit=?,
    ~placeholder: string=?,
    ~language: string=?,
    ~toolbar: Js.t('a)=?
  ) =>
  React.element =
  "default";