// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as Urql from "urql";
import * as React from "react";
import * as ReactDOMRe from "reason-react/src/ReactDOMRe.js";
import * as UrqlClient from "reason-urql/src/UrqlClient.bs.js";
import * as App$ReactHooksTemplate from "./App.bs.js";

import "./tailwind.css"
;

var client = UrqlClient.make("http://localhost:4000/api", undefined, undefined, /* () */0);

ReactDOMRe.renderToElementWithId(React.createElement(Urql.Provider, {
          value: client,
          children: React.createElement(App$ReactHooksTemplate.make, { })
        }), "root");

export {
  client ,
  
}
/*  Not a pure module */
