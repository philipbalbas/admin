// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Link$ReactHooksTemplate from "./Link.bs.js";

function str(prim) {
  return prim;
}

function ModuleCard(Props) {
  var name = Props.name;
  var id = Props.id;
  var link = "/module/" + (String(id) + "");
  return React.createElement("div", undefined, React.createElement(Link$ReactHooksTemplate.make, {
                  to_: link,
                  children: name
                }));
}

var make = ModuleCard;

export {
  str ,
  make ,
  
}
/* react Not a pure module */