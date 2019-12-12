// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Antd from "antd";
import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as ReasonUrql from "reason-urql/src/ReasonUrql.bs.js";
import * as Utils$ReactHooksTemplate from "../Utils.bs.js";
import * as Mutations$ReactHooksTemplate from "../graphql/Mutations.bs.js";

function EditPageForm(Props) {
  var id = Props.id;
  var name = Props.name;
  var description = Props.description;
  var savedTitle = React.useRef(name);
  var savedDesc = React.useRef(description);
  var match = React.useReducer((function (state, action) {
          if (typeof action === "number") {
            switch (action) {
              case /* Edit */0 :
                  return {
                          title: state.title,
                          description: state.description,
                          editMode: true
                        };
              case /* Cancel */1 :
                  return {
                          title: savedTitle.current,
                          description: savedDesc.current,
                          editMode: false
                        };
              case /* Save */2 :
                  savedTitle.current = state.title;
                  savedDesc.current = state.description;
                  return {
                          title: state.title,
                          description: state.description,
                          editMode: false
                        };
              
            }
          } else if (action.tag) {
            return {
                    title: state.title,
                    description: action[0],
                    editMode: state.editMode
                  };
          } else {
            return {
                    title: action[0],
                    description: state.description,
                    editMode: state.editMode
                  };
          }
        }), {
        title: savedTitle.current,
        description: savedDesc.current,
        editMode: false
      });
  var dispatch = match[1];
  var match$1 = match[0];
  var description$1 = match$1.description;
  var title = match$1.title;
  var mutation = Mutations$ReactHooksTemplate.UpdatePage.make(id, title, description$1, /* () */0);
  var match$2 = Curry._1(ReasonUrql.Hooks.useMutation, mutation);
  var executeMutation = match$2[1];
  var handleNameChange = function ($$event) {
    return Curry._1(dispatch, /* TypeTitle */Block.__(0, [$$event.target.value]));
  };
  var handleDescriptionChange = function ($$event) {
    return Curry._1(dispatch, /* TypeDesc */Block.__(1, [$$event.target.value]));
  };
  return React.createElement("div", {
              className: "w-full"
            }, match$1.editMode ? React.createElement(React.Fragment, undefined, React.createElement("div", {
                        className: "mb-2"
                      }, React.createElement("label", {
                            className: "text-md text-indigo-600"
                          }, Utils$ReactHooksTemplate.str("Edit Name"), React.createElement(Antd.Input, {
                                value: title,
                                onChange: handleNameChange
                              }))), React.createElement("div", {
                        className: "mb-2"
                      }, React.createElement("label", {
                            className: "text-md text-indigo-600"
                          }, Utils$ReactHooksTemplate.str("Edit Description"), React.createElement(Antd.Input, {
                                value: description$1,
                                onChange: handleDescriptionChange
                              }))), React.createElement("div", undefined, React.createElement("button", {
                            className: "px-3 py-2 mr-3 bg-red-600 text-indigo-100 rounded-lg",
                            onClick: (function (param) {
                                return Curry._1(dispatch, /* Cancel */1);
                              })
                          }, Utils$ReactHooksTemplate.str("Cancel")), React.createElement("button", {
                            className: "px-3 py-2 bg-green-600 text-indigo-100 rounded-lg",
                            onClick: (function (param) {
                                Curry._1(dispatch, /* Save */2);
                                Curry._1(executeMutation, /* () */0);
                                return /* () */0;
                              })
                          }, Utils$ReactHooksTemplate.str("Save")))) : React.createElement(React.Fragment, undefined, React.createElement("div", {
                        className: "text-4xl font-semibold text-indigo-800"
                      }, Utils$ReactHooksTemplate.str(name)), React.createElement("div", {
                        className: "text-lg font-semibold text-indigo-600"
                      }, Utils$ReactHooksTemplate.str(description$1)), React.createElement("div", undefined, React.createElement("button", {
                            className: "px-3 py-2 mr-3 bg-indigo-600 text-indigo-100 rounded-lg",
                            onClick: (function (param) {
                                return Curry._1(dispatch, /* Edit */0);
                              })
                          }, Utils$ReactHooksTemplate.str("Edit")))));
}

var make = EditPageForm;

export {
  make ,
  
}
/* antd Not a pure module */
