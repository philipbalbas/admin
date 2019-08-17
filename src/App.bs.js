// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Core from "@emotion/core";
import * as ReasonReactRouter from "reason-react/src/ReasonReactRouter.js";
import * as Home$ReactHooksTemplate from "./pages/Home.bs.js";
import * as Note$ReactHooksTemplate from "./pages/Note.bs.js";
import * as Header$ReactHooksTemplate from "./components/Header.bs.js";
import * as Module$ReactHooksTemplate from "./pages/Module.bs.js";
import * as Sidebar$ReactHooksTemplate from "./components/Sidebar.bs.js";

var Global = /* module */[];

import styled from "@emotion/styled"
;

import css from "@styled-system/css"
;

var styles = (
    {
      "html,body": {
        margin: 0,
        fontFamily: "'Open Sans', sans-serif"
      },
      "*": {
        boxSizing: "border-box",
        margin: 0,
      },

      "* + *": {
        marginTop: 0
      }
    }
  );

var wrapper = (
      styled("div")(css({
        display: "flex",
      }))
    );

function App$BodyContainer(Props) {
  var children = Props.children;
  return React.createElement(wrapper, {
              children: children
            });
}

var BodyContainer = /* module */[
  /* wrapper */wrapper,
  /* make */App$BodyContainer
];

function App(Props) {
  var url = ReasonReactRouter.useUrl(undefined, /* () */0);
  var match = url[/* path */0];
  var container;
  if (match) {
    switch (match[0]) {
      case "module" : 
          var match$1 = match[1];
          container = match$1 ? (
              match$1[1] ? "Page Not Found" : React.createElement(Module$ReactHooksTemplate.make, {
                      id: match$1[0]
                    })
            ) : React.createElement(Home$ReactHooksTemplate.make, { });
          break;
      case "notes" : 
          container = match[1] ? "Page Not Found" : React.createElement(Note$ReactHooksTemplate.make, { });
          break;
      default:
        container = "Page Not Found";
    }
  } else {
    container = React.createElement(Home$ReactHooksTemplate.make, { });
  }
  return React.createElement(React.Fragment, undefined, React.createElement(Core.Global, {
                  styles: styles
                }), React.createElement(Header$ReactHooksTemplate.make, { }), React.createElement(App$BodyContainer, {
                  children: null
                }, React.createElement(Sidebar$ReactHooksTemplate.make, { }), container));
}

var make = App;

export {
  Global ,
  styles ,
  BodyContainer ,
  make ,
  
}
/*  Not a pure module */
