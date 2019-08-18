// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as React from "react";
import * as ReasonReactRouter from "reason-react/src/ReasonReactRouter.js";

function str(prim) {
  return prim;
}

function Header(Props) {
  return React.createElement("header", {
              className: "bg-teal-700 shadow flex justify-between py-4 px-10"
            }, React.createElement("a", {
                  className: "text-white font-bold uppercase tracking-wider hover:text-teal-300 cursor-pointer select-none",
                  onClick: (function (_e) {
                      return ReasonReactRouter.push("/");
                    })
                }, "Reviewer Admin"), React.createElement("nav", undefined, React.createElement("a", {
                      className: "text-white"
                    }, "Hello User")));
}

var make = Header;

export {
  str ,
  make ,
  
}
/* react Not a pure module */
