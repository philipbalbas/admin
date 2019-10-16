// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as React from "react";
import * as ReactKatex from "react-katex";
import * as RemarkMath from "remark-math";
import * as ReactMarkdown from "react-markdown";

var ReactMarkdown$1 = /* module */[];

var BlockMath = /* module */[];

var InlineMath = /* module */[];

function MarkdownRender(Props) {
  var source = Props.source;
  var plugins = /* array */[RemarkMath.default];
  var renderers = {
    math: (function (props) {
        return React.createElement(ReactKatex.BlockMath, {
                    children: props.value
                  });
      }),
    inlineMath: (function (props) {
        return React.createElement(ReactKatex.InlineMath, {
                    children: props.value
                  });
      })
  };
  return React.createElement(ReactMarkdown.default, {
              source: source,
              plugins: plugins,
              renderers: renderers
            });
}

var make = MarkdownRender;

export {
  ReactMarkdown$1 as ReactMarkdown,
  BlockMath ,
  InlineMath ,
  make ,
  
}
/* react Not a pure module */
