// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as ReasonUrql from "reason-urql/src/ReasonUrql.bs.js";
import * as List$ReactHooksTemplate from "../components/List.bs.js";
import * as Queries$ReactHooksTemplate from "../graphql/Queries.bs.js";

function str(prim) {
  return prim;
}

function NotesList(Props) {
  var request = Queries$ReactHooksTemplate.ListNotes[/* make */3](/* () */0);
  var match = Curry._4(ReasonUrql.Hooks[/* useQuery */1], request, undefined, undefined, /* () */0);
  var response = match[0][/* response */3];
  if (typeof response === "number") {
    if (response === 0) {
      return "Fetching";
    } else {
      return "No Data";
    }
  } else if (response.tag) {
    return "Error";
  } else {
    var match$1 = response[0].notes;
    if (match$1 !== undefined) {
      return React.createElement(List$ReactHooksTemplate.make, {
                  items: match$1,
                  entity: /* Subject */1
                });
    } else {
      return "No items";
    }
  }
}

var make = NotesList;

export {
  str ,
  make ,
  
}
/* react Not a pure module */
