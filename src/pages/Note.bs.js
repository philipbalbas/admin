// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as ForEditor from "for-editor";

var Editor = /* module */[];

function str(prim) {
  return prim;
}

var placeholderText = "# Live demo\n\nChanges are automatically rendered as you type.\n\n* Renders actual, \"native\" React DOM elements\n* Allows you to escape or skip HTML (try toggling the checkboxes above)\n* If you escape or skip the HTML, no `dangerouslySetInnerHTML` is used! Yay!\n\n## HTML block below\n\n<blockquote>\n  This blockquote will change based on the HTML settings above.\n</blockquote>\n\n## How about some code?\n```js\nvar React = require(\'react\');\nvar Markdown = require(\'react-markdown\');\n\nReact.render(\n  <Markdown source=\"# Your markdown here\" />,\n  document.getElementById(\'content\')\n);\n```\n\nPretty neat, eh?\n\n## Tables?\n\n| Feature   | Support |\n| --------- | ------- |\n| tables    | ✔ |\n| alignment | ✔ |\n| wewt      | ✔ |";

function Note(Props) {
  var match = React.useState((function () {
          return placeholderText;
        }));
  var match$1 = React.useState((function () {
          return "";
        }));
  var match$2 = React.useState((function () {
          return "";
        }));
  var setTitle = match$2[1];
  console.log(match$1[0]);
  return React.createElement("div", {
              className: "App"
            }, React.createElement("div", {
                  className: "header"
                }, React.createElement("h3", undefined, "Lecture Notes Importer"), React.createElement("label", undefined, "Title", React.createElement("input", {
                          type: "text",
                          value: match$2[0],
                          onChange: (function (e) {
                              return Curry._1(setTitle, e.target.value);
                            })
                        }))), React.createElement(ForEditor.default, {
                  value: match[0],
                  onChange: match[1],
                  onSave: match$1[1],
                  placeholder: "Type Here..."
                }));
}

var make = Note;

export {
  Editor ,
  str ,
  placeholderText ,
  make ,
  
}
/* react Not a pure module */