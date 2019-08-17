// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Link$ReactHooksTemplate from "./Link.bs.js";

function str(prim) {
  return prim;
}

import styled from "@emotion/styled"
;

import css from "@styled-system/css"
;

var wrapper = (
      styled("div")(css({
        flexBasis: "10%",
        maxWidth: "160px",
        borderRight: "1px solid  #f5f5f5",
        height: "100%",
        pt: 3,
        pl: 3,
        display: "flex",
        flexDirection: "column",

        "a": {
          fontSize: 2,
          mb: 2,
          "&:hover": {
            color: 1
          }
        }
      }))
    );

function Sidebar$SidebarWrapper(Props) {
  var children = Props.children;
  return React.createElement(wrapper, {
              children: children
            });
}

var SidebarWrapper = /* module */[
  /* wrapper */wrapper,
  /* make */Sidebar$SidebarWrapper
];

function Sidebar(Props) {
  return React.createElement(Sidebar$SidebarWrapper, {
              children: null
            }, React.createElement(Link$ReactHooksTemplate.make, {
                  to_: "/module",
                  children: "Modules"
                }), React.createElement(Link$ReactHooksTemplate.make, {
                  to_: "/subject",
                  children: "Subjects"
                }), React.createElement(Link$ReactHooksTemplate.make, {
                  to_: "/topic",
                  children: "Topics"
                }), React.createElement(Link$ReactHooksTemplate.make, {
                  to_: "/page",
                  children: "Pages"
                }), React.createElement(Link$ReactHooksTemplate.make, {
                  to_: "/note",
                  children: "Notes"
                }));
}

var make = Sidebar;

export {
  str ,
  SidebarWrapper ,
  make ,
  
}
/*  Not a pure module */