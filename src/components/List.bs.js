// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as $$Array from "bs-platform/lib/es6/array.js";
import * as React from "react";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Utils$ReactHooksTemplate from "../Utils.bs.js";
import * as ItemCard$ReactHooksTemplate from "./ItemCard.bs.js";

function List(Props) {
  var items = Props.items;
  var entity = Props.entity;
  var itemsList = $$Array.map((function (item) {
          if (item !== undefined) {
            var item$1 = Caml_option.valFromOption(item);
            var match = item$1.name;
            var match$1 = item$1.id;
            if (match !== undefined && match$1 !== undefined) {
              var id = match$1;
              return React.createElement(ItemCard$ReactHooksTemplate.make, {
                          name: match,
                          id: id,
                          entity: entity,
                          key: id
                        });
            } else {
              return Utils$ReactHooksTemplate.str("No Name");
            }
          } else {
            return Utils$ReactHooksTemplate.str("None");
          }
        }), items);
  var title;
  switch (entity) {
    case 0 : 
        title = "Modules";
        break;
    case 1 : 
        title = "Subjects";
        break;
    case 2 : 
        title = "Topic";
        break;
    case 3 : 
        title = "Page";
        break;
    case 4 : 
        title = "Note";
        break;
    
  }
  return React.createElement("div", undefined, React.createElement("p", {
                  className: "font-bold text-4xl mb-8"
                }, Utils$ReactHooksTemplate.str(title)), itemsList);
}

var make = List;

export {
  make ,
  
}
/* react Not a pure module */
