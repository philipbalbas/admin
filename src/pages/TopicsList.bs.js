// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as ReasonUrql from "reason-urql/src/ReasonUrql.bs.js";
import * as List$ReactHooksTemplate from "../components/List.bs.js";
import * as Utils$ReactHooksTemplate from "../Utils.bs.js";
import * as Queries$ReactHooksTemplate from "../graphql/Queries.bs.js";

function TopicsList(Props) {
  var request = Queries$ReactHooksTemplate.ListTopics[/* make */3](/* () */0);
  var match = Curry._4(ReasonUrql.Hooks[/* useQuery */1], request, undefined, undefined, /* () */0);
  var response = match[0][/* response */3];
  if (typeof response === "number") {
    if (response === 0) {
      return Utils$ReactHooksTemplate.str("Fetching");
    } else {
      return Utils$ReactHooksTemplate.str("No Data");
    }
  } else if (response.tag) {
    return Utils$ReactHooksTemplate.str("Error");
  } else {
    var match$1 = response[0].topics;
    if (match$1 !== undefined) {
      return React.createElement(React.Fragment, undefined, React.createElement("div", {
                      className: "flex justify-between items-start"
                    }, React.createElement("p", {
                          className: "font-bold text-4xl mb-8"
                        }, Utils$ReactHooksTemplate.str("Topics")), React.createElement("button", {
                          className: "p-2 bg-indigo-800 text-blue-100 rounded-lg",
                          onClick: (function (param) {
                              return Utils$ReactHooksTemplate.push("/topics/create");
                            })
                        }, Utils$ReactHooksTemplate.str("+ Create Topic"))), React.createElement(List$ReactHooksTemplate.make, {
                      items: match$1,
                      entity: /* Topic */2
                    }));
    } else {
      return Utils$ReactHooksTemplate.str("No items");
    }
  }
}

var make = TopicsList;

export {
  make ,
  
}
/* react Not a pure module */
