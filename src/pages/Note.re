module Editor = {
  [@bs.module "for-editor"] [@react.component]
  external make:
    (
      ~value: string,
      ~onChange: (Js.String.t => Js.String.t) => unit,
      ~placeholder: string=?
    ) =>
    React.element =
    "default";
};

let placeholderText = {|# Live demo

Changes are automatically rendered as you type.

* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no `dangerouslySetInnerHTML` is used! Yay!

## HTML block below

<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>

## How about some code?
```js
var React = require('react');
var Markdown = require('react-markdown');

React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
```

Pretty neat, eh?

## Tables?

| Feature   | Support |
| --------- | ------- |
| tables    | ✔ |
| alignment | ✔ |
| wewt      | ✔ ||};

[@react.component]
let make = () => {
  let (markdownText, setMarkdownText) = React.useState(() => placeholderText);

  <div className="App">
    <div className="header">
      <h3> "Lecture Notes Importer"->ReasonReact.string </h3>
    </div>
    <Editor
      value=markdownText
      onChange=setMarkdownText
      placeholder="Type Here..."
    />
  </div>;
};