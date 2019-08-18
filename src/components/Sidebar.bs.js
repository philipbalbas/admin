// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Utils$ReactHooksTemplate from "../Utils.bs.js";

function Sidebar$SidebarLink(Props) {
  var children = Props.children;
  var to_ = Props.to_;
  return React.createElement("a", {
              className: "text-indigo-900 cursor-pointer hover:text-indigo-300 mb-3",
              onClick: (function (_e) {
                  return Utils$ReactHooksTemplate.push(to_);
                })
            }, children);
}

var SidebarLink = /* module */[/* make */Sidebar$SidebarLink];

function Sidebar(Props) {
  return React.createElement("div", {
              className: "flex flex-col px-6 pt-5 shadow-md border-r-3 border-gray-200 bg-gray-300"
            }, React.createElement(Sidebar$SidebarLink, {
                  children: Utils$ReactHooksTemplate.str("Modules"),
                  to_: "/modules"
                }), React.createElement(Sidebar$SidebarLink, {
                  children: Utils$ReactHooksTemplate.str("Subjects"),
                  to_: "/subjects"
                }), React.createElement(Sidebar$SidebarLink, {
                  children: Utils$ReactHooksTemplate.str("Topics"),
                  to_: "/topics"
                }), React.createElement(Sidebar$SidebarLink, {
                  children: Utils$ReactHooksTemplate.str("Pages"),
                  to_: "/pages"
                }), React.createElement(Sidebar$SidebarLink, {
                  children: Utils$ReactHooksTemplate.str("Notes"),
                  to_: "/notes"
                }));
}

var make = Sidebar;

export {
  SidebarLink ,
  make ,
  
}
/* react Not a pure module */
