// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Antd from "antd";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as ReasonUrql from "reason-urql/src/ReasonUrql.bs.js";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";
import * as Utils$ReactHooksTemplate from "../Utils.bs.js";
import * as Queries$ReactHooksTemplate from "../graphql/Queries.bs.js";
import * as Mutations$ReactHooksTemplate from "../graphql/Mutations.bs.js";

function TopicsForm(Props) {
  var moduleIdProp = Props.moduleIdProp;
  var subjectIdProp = Props.subjectIdProp;
  var match = React.useState((function () {
          return "";
        }));
  var setName = match[1];
  var name = match[0];
  var match$1 = React.useState((function () {
          return moduleIdProp;
        }));
  var setModuleId = match$1[1];
  var moduleId = match$1[0];
  var match$2 = React.useState((function () {
          return subjectIdProp;
        }));
  var setSubjectId = match$2[1];
  var subjectId = match$2[0];
  var match$3 = React.useState((function () {
          return "";
        }));
  var setDescription = match$3[1];
  var description = match$3[0];
  var modulesListRequest = Queries$ReactHooksTemplate.ListModules.make(/* () */0);
  var match$4 = Curry._5(ReasonUrql.Hooks.useQuery, modulesListRequest, undefined, undefined, undefined, /* () */0);
  var modulesListQueryResponse = match$4[0].response;
  var moduleQuery = Queries$ReactHooksTemplate.GetModule.make(moduleId, /* () */0);
  var match$5 = Curry._5(ReasonUrql.Hooks.useQuery, moduleQuery, undefined, undefined, undefined, /* () */0);
  var moduleQueryResponse = match$5[0].response;
  var mutation = Mutations$ReactHooksTemplate.CreateTopic.make(name, subjectId, description, /* () */0);
  var match$6 = Curry._1(ReasonUrql.Hooks.useMutation, mutation);
  var executeMutation = match$6[1];
  var moduleSelect;
  if (typeof modulesListQueryResponse === "number") {
    moduleSelect = modulesListQueryResponse === /* Fetching */0 ? Utils$ReactHooksTemplate.str("Loading") : Utils$ReactHooksTemplate.str("Not Found");
  } else if (modulesListQueryResponse.tag) {
    moduleSelect = Utils$ReactHooksTemplate.str("Error");
  } else {
    var modules = Belt_Array.map(Belt_Option.getWithDefault(modulesListQueryResponse[0].modules, /* array */[]), (function (module_) {
            return Belt_Option.mapWithDefault(module_, null, (function (module_) {
                          var id = Belt_Option.mapWithDefault(module_.id, "Missing description", (function (txt) {
                                  return txt;
                                }));
                          var name = Belt_Option.mapWithDefault(module_.name, "Missing description", (function (txt) {
                                  return txt;
                                }));
                          return React.createElement(Antd.Select.Option, {
                                      key: id,
                                      value: id,
                                      children: Utils$ReactHooksTemplate.str(name)
                                    });
                        }));
          }));
    moduleSelect = React.createElement(Antd.Select, {
          className: "w-full",
          value: moduleId,
          onSelect: (function (value) {
              Curry._1(setModuleId, (function (param) {
                      return value;
                    }));
              return Curry._1(setSubjectId, (function (param) {
                            return "";
                          }));
            }),
          children: modules
        });
  }
  var subjectsSelect;
  if (typeof moduleQueryResponse === "number") {
    subjectsSelect = moduleQueryResponse === /* Fetching */0 ? Utils$ReactHooksTemplate.str("Loading") : Utils$ReactHooksTemplate.str("Not Found");
  } else if (moduleQueryResponse.tag) {
    subjectsSelect = React.createElement("div", undefined, Utils$ReactHooksTemplate.str("Please Select a Module"));
  } else {
    var subjects = Belt_Array.map(Belt_Option.getWithDefault(Belt_Option.flatMap(moduleQueryResponse[0].module_, (function (module_) {
                    return module_.subjects;
                  })), /* array */[]), (function (subject) {
            return Belt_Option.mapWithDefault(subject, null, (function (subject) {
                          var id = Belt_Option.mapWithDefault(subject.id, "Missing id", (function (txt) {
                                  return txt;
                                }));
                          var name = Belt_Option.mapWithDefault(subject.name, "Missing name", (function (txt) {
                                  return txt;
                                }));
                          return React.createElement(Antd.Select.Option, {
                                      key: id,
                                      value: id,
                                      children: Utils$ReactHooksTemplate.str(name)
                                    });
                        }));
          }));
    subjectsSelect = React.createElement(Antd.Select, {
          className: "w-full",
          value: subjectId,
          onSelect: (function (value) {
              return Curry._1(setSubjectId, (function (param) {
                            return value;
                          }));
            }),
          children: subjects
        });
  }
  return React.createElement("div", undefined, React.createElement("div", {
                  className: "text-xl font-bold pb-3"
                }, Utils$ReactHooksTemplate.str("Create Topic")), React.createElement("div", {
                  className: "flex flex-row"
                }, React.createElement("div", {
                      className: "flex-1 pr-2"
                    }, React.createElement("label", undefined, Utils$ReactHooksTemplate.str("Select Module ID"), moduleSelect)), React.createElement("div", {
                      className: "flex-1 pr-2"
                    }, React.createElement("label", undefined, Utils$ReactHooksTemplate.str("Select Subject ID"), subjectsSelect))), React.createElement("div", {
                  className: "mt-3"
                }, React.createElement("label", undefined, Utils$ReactHooksTemplate.str("Topic Name"), React.createElement(Antd.Input, {
                          value: name,
                          onChange: (function ($$event) {
                              return Curry._1(setName, $$event.target.value);
                            })
                        }))), React.createElement("div", {
                  className: "mt-3"
                }, React.createElement("label", undefined, Utils$ReactHooksTemplate.str("Topic Description"), React.createElement(Antd.Input, {
                          value: description,
                          onChange: (function ($$event) {
                              return Curry._1(setDescription, $$event.target.value);
                            })
                        }))), React.createElement("div", {
                  className: "mt-4"
                }, React.createElement("button", {
                      className: "rounded-sm px-3 py-2 bg-red-500 text-white rounded-lg mr-5",
                      onClick: (function (param) {
                          return Utils$ReactHooksTemplate.push("/subjects");
                        })
                    }, Utils$ReactHooksTemplate.str("Cancel")), React.createElement("button", {
                      className: "rounded-sm px-3 py-2 bg-green-500 text-white rounded-lg",
                      onClick: (function (param) {
                          Curry._2(executeMutation, undefined, /* () */0);
                          return /* () */0;
                        })
                    }, Utils$ReactHooksTemplate.str("Save"))));
}

var make = TopicsForm;

export {
  make ,
  
}
/* antd Not a pure module */
