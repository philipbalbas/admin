module Editor = {
  [@bs.module "for-editor"] [@react.component]
  external make:
    (
      ~value: string,
      ~onChange: (Js.String.t => Js.String.t) => unit,
      ~onSave: (Js.String.t => Js.String.t) => unit,
      ~placeholder: string=?
    ) =>
    React.element =
    "default";
};

let str = ReasonReact.string;

let placeholderText = {j|# Live demo

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
| wewt      | ✔ ||j};

[@react.component]
let make = () => {
  let (markdownText, setMarkdownText) = React.useState(() => placeholderText);
  let (markdownText2, setMarkdownText2) = React.useState(() => "");
  let (title, setTitle) = React.useState(() => "");

  Js.log(markdownText2);

  <div className="App">
    <div className="header">
      <h3> "Lecture Notes Importer"->ReasonReact.string </h3>
      <label>
        "Title"->str
        <input
          type_="text"
          value=title
          onChange={e => setTitle(ReactEvent.Form.target(e)##value)}
        />
      </label>
    </div>
    <Editor
      value=markdownText
      onChange=setMarkdownText
      placeholder="Type Here..."
      onSave=setMarkdownText2
    />
  </div>;
};