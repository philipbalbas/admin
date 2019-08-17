// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as Js_exn from "bs-platform/lib/es6/js_exn.js";
import * as Js_dict from "bs-platform/lib/es6/js_dict.js";
import * as Js_json from "bs-platform/lib/es6/js_json.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

var ppx_printed_query = "query modules  {\nmodules  {\nname  \nid  \n}\n\n}\n";

function parse(value) {
  var match = Js_json.decodeObject(value);
  if (match !== undefined) {
    var match$1 = Js_dict.get(Caml_option.valFromOption(match), "modules");
    var tmp;
    if (match$1 !== undefined) {
      var value$1 = Caml_option.valFromOption(match$1);
      var match$2 = Js_json.decodeNull(value$1);
      if (match$2 !== undefined) {
        tmp = undefined;
      } else {
        var match$3 = Js_json.decodeArray(value$1);
        tmp = match$3 !== undefined ? match$3.map((function (value) {
                  var match = Js_json.decodeNull(value);
                  if (match !== undefined) {
                    return undefined;
                  } else {
                    var match$1 = Js_json.decodeObject(value);
                    var tmp;
                    if (match$1 !== undefined) {
                      var value$1 = Caml_option.valFromOption(match$1);
                      var match$2 = Js_dict.get(value$1, "name");
                      var tmp$1;
                      if (match$2 !== undefined) {
                        var value$2 = Caml_option.valFromOption(match$2);
                        var match$3 = Js_json.decodeNull(value$2);
                        if (match$3 !== undefined) {
                          tmp$1 = undefined;
                        } else {
                          var match$4 = Js_json.decodeString(value$2);
                          tmp$1 = match$4 !== undefined ? match$4 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$2));
                        }
                      } else {
                        tmp$1 = undefined;
                      }
                      var match$5 = Js_dict.get(value$1, "id");
                      var tmp$2;
                      if (match$5 !== undefined) {
                        var value$3 = Caml_option.valFromOption(match$5);
                        var match$6 = Js_json.decodeNull(value$3);
                        if (match$6 !== undefined) {
                          tmp$2 = undefined;
                        } else {
                          var match$7 = Js_json.decodeString(value$3);
                          tmp$2 = match$7 !== undefined ? match$7 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$3));
                        }
                      } else {
                        tmp$2 = undefined;
                      }
                      tmp = {
                        name: tmp$1,
                        id: tmp$2
                      };
                    } else {
                      tmp = Js_exn.raiseError("graphql_ppx: Object is not a value");
                    }
                    return Caml_option.some(tmp);
                  }
                })) : Js_exn.raiseError("graphql_ppx: Expected array, got " + JSON.stringify(value$1));
      }
    } else {
      tmp = undefined;
    }
    return {
            modules: tmp
          };
  } else {
    return Js_exn.raiseError("graphql_ppx: Object is not a value");
  }
}

function make(param) {
  return {
          query: ppx_printed_query,
          variables: null,
          parse: parse
        };
}

function makeWithVariables(param) {
  return {
          query: ppx_printed_query,
          variables: null,
          parse: parse
        };
}

function ret_type(f) {
  return /* module */[];
}

var MT_Ret = /* module */[];

var ListModules = /* module */[
  /* ppx_printed_query */ppx_printed_query,
  /* query */ppx_printed_query,
  /* parse */parse,
  /* make */make,
  /* makeWithVariables */makeWithVariables,
  /* ret_type */ret_type,
  /* MT_Ret */MT_Ret
];

var ppx_printed_query$1 = "query subjects  {\nsubjects  {\nname  \nid  \n}\n\n}\n";

function parse$1(value) {
  var match = Js_json.decodeObject(value);
  if (match !== undefined) {
    var match$1 = Js_dict.get(Caml_option.valFromOption(match), "subjects");
    var tmp;
    if (match$1 !== undefined) {
      var value$1 = Caml_option.valFromOption(match$1);
      var match$2 = Js_json.decodeNull(value$1);
      if (match$2 !== undefined) {
        tmp = undefined;
      } else {
        var match$3 = Js_json.decodeArray(value$1);
        tmp = match$3 !== undefined ? match$3.map((function (value) {
                  var match = Js_json.decodeNull(value);
                  if (match !== undefined) {
                    return undefined;
                  } else {
                    var match$1 = Js_json.decodeObject(value);
                    var tmp;
                    if (match$1 !== undefined) {
                      var value$1 = Caml_option.valFromOption(match$1);
                      var match$2 = Js_dict.get(value$1, "name");
                      var tmp$1;
                      if (match$2 !== undefined) {
                        var value$2 = Caml_option.valFromOption(match$2);
                        var match$3 = Js_json.decodeNull(value$2);
                        if (match$3 !== undefined) {
                          tmp$1 = undefined;
                        } else {
                          var match$4 = Js_json.decodeString(value$2);
                          tmp$1 = match$4 !== undefined ? match$4 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$2));
                        }
                      } else {
                        tmp$1 = undefined;
                      }
                      var match$5 = Js_dict.get(value$1, "id");
                      var tmp$2;
                      if (match$5 !== undefined) {
                        var value$3 = Caml_option.valFromOption(match$5);
                        var match$6 = Js_json.decodeNull(value$3);
                        if (match$6 !== undefined) {
                          tmp$2 = undefined;
                        } else {
                          var match$7 = Js_json.decodeString(value$3);
                          tmp$2 = match$7 !== undefined ? match$7 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$3));
                        }
                      } else {
                        tmp$2 = undefined;
                      }
                      tmp = {
                        name: tmp$1,
                        id: tmp$2
                      };
                    } else {
                      tmp = Js_exn.raiseError("graphql_ppx: Object is not a value");
                    }
                    return Caml_option.some(tmp);
                  }
                })) : Js_exn.raiseError("graphql_ppx: Expected array, got " + JSON.stringify(value$1));
      }
    } else {
      tmp = undefined;
    }
    return {
            subjects: tmp
          };
  } else {
    return Js_exn.raiseError("graphql_ppx: Object is not a value");
  }
}

function make$1(param) {
  return {
          query: ppx_printed_query$1,
          variables: null,
          parse: parse$1
        };
}

function makeWithVariables$1(param) {
  return {
          query: ppx_printed_query$1,
          variables: null,
          parse: parse$1
        };
}

function ret_type$1(f) {
  return /* module */[];
}

var MT_Ret$1 = /* module */[];

var ListSubjects = /* module */[
  /* ppx_printed_query */ppx_printed_query$1,
  /* query */ppx_printed_query$1,
  /* parse */parse$1,
  /* make */make$1,
  /* makeWithVariables */makeWithVariables$1,
  /* ret_type */ret_type$1,
  /* MT_Ret */MT_Ret$1
];

var ppx_printed_query$2 = "query topics  {\ntopics  {\nname  \nid  \n}\n\n}\n";

function parse$2(value) {
  var match = Js_json.decodeObject(value);
  if (match !== undefined) {
    var match$1 = Js_dict.get(Caml_option.valFromOption(match), "topics");
    var tmp;
    if (match$1 !== undefined) {
      var value$1 = Caml_option.valFromOption(match$1);
      var match$2 = Js_json.decodeNull(value$1);
      if (match$2 !== undefined) {
        tmp = undefined;
      } else {
        var match$3 = Js_json.decodeArray(value$1);
        tmp = match$3 !== undefined ? match$3.map((function (value) {
                  var match = Js_json.decodeNull(value);
                  if (match !== undefined) {
                    return undefined;
                  } else {
                    var match$1 = Js_json.decodeObject(value);
                    var tmp;
                    if (match$1 !== undefined) {
                      var value$1 = Caml_option.valFromOption(match$1);
                      var match$2 = Js_dict.get(value$1, "name");
                      var tmp$1;
                      if (match$2 !== undefined) {
                        var value$2 = Caml_option.valFromOption(match$2);
                        var match$3 = Js_json.decodeNull(value$2);
                        if (match$3 !== undefined) {
                          tmp$1 = undefined;
                        } else {
                          var match$4 = Js_json.decodeString(value$2);
                          tmp$1 = match$4 !== undefined ? match$4 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$2));
                        }
                      } else {
                        tmp$1 = undefined;
                      }
                      var match$5 = Js_dict.get(value$1, "id");
                      var tmp$2;
                      if (match$5 !== undefined) {
                        var value$3 = Caml_option.valFromOption(match$5);
                        var match$6 = Js_json.decodeNull(value$3);
                        if (match$6 !== undefined) {
                          tmp$2 = undefined;
                        } else {
                          var match$7 = Js_json.decodeString(value$3);
                          tmp$2 = match$7 !== undefined ? match$7 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$3));
                        }
                      } else {
                        tmp$2 = undefined;
                      }
                      tmp = {
                        name: tmp$1,
                        id: tmp$2
                      };
                    } else {
                      tmp = Js_exn.raiseError("graphql_ppx: Object is not a value");
                    }
                    return Caml_option.some(tmp);
                  }
                })) : Js_exn.raiseError("graphql_ppx: Expected array, got " + JSON.stringify(value$1));
      }
    } else {
      tmp = undefined;
    }
    return {
            topics: tmp
          };
  } else {
    return Js_exn.raiseError("graphql_ppx: Object is not a value");
  }
}

function make$2(param) {
  return {
          query: ppx_printed_query$2,
          variables: null,
          parse: parse$2
        };
}

function makeWithVariables$2(param) {
  return {
          query: ppx_printed_query$2,
          variables: null,
          parse: parse$2
        };
}

function ret_type$2(f) {
  return /* module */[];
}

var MT_Ret$2 = /* module */[];

var ListTopics = /* module */[
  /* ppx_printed_query */ppx_printed_query$2,
  /* query */ppx_printed_query$2,
  /* parse */parse$2,
  /* make */make$2,
  /* makeWithVariables */makeWithVariables$2,
  /* ret_type */ret_type$2,
  /* MT_Ret */MT_Ret$2
];

var ppx_printed_query$3 = "query pages  {\npages  {\nname  \nid  \n}\n\n}\n";

function parse$3(value) {
  var match = Js_json.decodeObject(value);
  if (match !== undefined) {
    var match$1 = Js_dict.get(Caml_option.valFromOption(match), "pages");
    var tmp;
    if (match$1 !== undefined) {
      var value$1 = Caml_option.valFromOption(match$1);
      var match$2 = Js_json.decodeNull(value$1);
      if (match$2 !== undefined) {
        tmp = undefined;
      } else {
        var match$3 = Js_json.decodeArray(value$1);
        tmp = match$3 !== undefined ? match$3.map((function (value) {
                  var match = Js_json.decodeNull(value);
                  if (match !== undefined) {
                    return undefined;
                  } else {
                    var match$1 = Js_json.decodeObject(value);
                    var tmp;
                    if (match$1 !== undefined) {
                      var value$1 = Caml_option.valFromOption(match$1);
                      var match$2 = Js_dict.get(value$1, "name");
                      var tmp$1;
                      if (match$2 !== undefined) {
                        var value$2 = Caml_option.valFromOption(match$2);
                        var match$3 = Js_json.decodeNull(value$2);
                        if (match$3 !== undefined) {
                          tmp$1 = undefined;
                        } else {
                          var match$4 = Js_json.decodeString(value$2);
                          tmp$1 = match$4 !== undefined ? match$4 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$2));
                        }
                      } else {
                        tmp$1 = undefined;
                      }
                      var match$5 = Js_dict.get(value$1, "id");
                      var tmp$2;
                      if (match$5 !== undefined) {
                        var value$3 = Caml_option.valFromOption(match$5);
                        var match$6 = Js_json.decodeNull(value$3);
                        if (match$6 !== undefined) {
                          tmp$2 = undefined;
                        } else {
                          var match$7 = Js_json.decodeString(value$3);
                          tmp$2 = match$7 !== undefined ? match$7 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$3));
                        }
                      } else {
                        tmp$2 = undefined;
                      }
                      tmp = {
                        name: tmp$1,
                        id: tmp$2
                      };
                    } else {
                      tmp = Js_exn.raiseError("graphql_ppx: Object is not a value");
                    }
                    return Caml_option.some(tmp);
                  }
                })) : Js_exn.raiseError("graphql_ppx: Expected array, got " + JSON.stringify(value$1));
      }
    } else {
      tmp = undefined;
    }
    return {
            pages: tmp
          };
  } else {
    return Js_exn.raiseError("graphql_ppx: Object is not a value");
  }
}

function make$3(param) {
  return {
          query: ppx_printed_query$3,
          variables: null,
          parse: parse$3
        };
}

function makeWithVariables$3(param) {
  return {
          query: ppx_printed_query$3,
          variables: null,
          parse: parse$3
        };
}

function ret_type$3(f) {
  return /* module */[];
}

var MT_Ret$3 = /* module */[];

var ListPages = /* module */[
  /* ppx_printed_query */ppx_printed_query$3,
  /* query */ppx_printed_query$3,
  /* parse */parse$3,
  /* make */make$3,
  /* makeWithVariables */makeWithVariables$3,
  /* ret_type */ret_type$3,
  /* MT_Ret */MT_Ret$3
];

var ppx_printed_query$4 = "query notes  {\nnotes  {\nname  \nid  \n}\n\n}\n";

function parse$4(value) {
  var match = Js_json.decodeObject(value);
  if (match !== undefined) {
    var match$1 = Js_dict.get(Caml_option.valFromOption(match), "notes");
    var tmp;
    if (match$1 !== undefined) {
      var value$1 = Caml_option.valFromOption(match$1);
      var match$2 = Js_json.decodeNull(value$1);
      if (match$2 !== undefined) {
        tmp = undefined;
      } else {
        var match$3 = Js_json.decodeArray(value$1);
        tmp = match$3 !== undefined ? match$3.map((function (value) {
                  var match = Js_json.decodeNull(value);
                  if (match !== undefined) {
                    return undefined;
                  } else {
                    var match$1 = Js_json.decodeObject(value);
                    var tmp;
                    if (match$1 !== undefined) {
                      var value$1 = Caml_option.valFromOption(match$1);
                      var match$2 = Js_dict.get(value$1, "name");
                      var tmp$1;
                      if (match$2 !== undefined) {
                        var value$2 = Caml_option.valFromOption(match$2);
                        var match$3 = Js_json.decodeNull(value$2);
                        if (match$3 !== undefined) {
                          tmp$1 = undefined;
                        } else {
                          var match$4 = Js_json.decodeString(value$2);
                          tmp$1 = match$4 !== undefined ? match$4 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$2));
                        }
                      } else {
                        tmp$1 = undefined;
                      }
                      var match$5 = Js_dict.get(value$1, "id");
                      var tmp$2;
                      if (match$5 !== undefined) {
                        var value$3 = Caml_option.valFromOption(match$5);
                        var match$6 = Js_json.decodeNull(value$3);
                        if (match$6 !== undefined) {
                          tmp$2 = undefined;
                        } else {
                          var match$7 = Js_json.decodeString(value$3);
                          tmp$2 = match$7 !== undefined ? match$7 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$3));
                        }
                      } else {
                        tmp$2 = undefined;
                      }
                      tmp = {
                        name: tmp$1,
                        id: tmp$2
                      };
                    } else {
                      tmp = Js_exn.raiseError("graphql_ppx: Object is not a value");
                    }
                    return Caml_option.some(tmp);
                  }
                })) : Js_exn.raiseError("graphql_ppx: Expected array, got " + JSON.stringify(value$1));
      }
    } else {
      tmp = undefined;
    }
    return {
            notes: tmp
          };
  } else {
    return Js_exn.raiseError("graphql_ppx: Object is not a value");
  }
}

function make$4(param) {
  return {
          query: ppx_printed_query$4,
          variables: null,
          parse: parse$4
        };
}

function makeWithVariables$4(param) {
  return {
          query: ppx_printed_query$4,
          variables: null,
          parse: parse$4
        };
}

function ret_type$4(f) {
  return /* module */[];
}

var MT_Ret$4 = /* module */[];

var ListNotes = /* module */[
  /* ppx_printed_query */ppx_printed_query$4,
  /* query */ppx_printed_query$4,
  /* parse */parse$4,
  /* make */make$4,
  /* makeWithVariables */makeWithVariables$4,
  /* ret_type */ret_type$4,
  /* MT_Ret */MT_Ret$4
];

export {
  ListModules ,
  ListSubjects ,
  ListTopics ,
  ListPages ,
  ListNotes ,
  
}
/* No side effect */
