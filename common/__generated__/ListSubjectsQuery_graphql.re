/* @generated */

type enum_SortOrder = [ | `ASC | `DESC | `FutureAddedValue(string)];

let unwrap_enum_SortOrder: string => enum_SortOrder =
  fun
  | "ASC" => `ASC
  | "DESC" => `DESC
  | v => `FutureAddedValue(v);

let wrap_enum_SortOrder: enum_SortOrder => string =
  fun
  | `ASC => "ASC"
  | `DESC => "DESC"
  | `FutureAddedValue(v) => v;

module Types = {
  type subjectsFilter = {
    categoryId: option(string),
    moduleId: option(string),
    order: option([ | `ASC | `DESC | `FutureAddedValue(string)]),
  };
  type response_listSubjects_module_ = {name: string};
  type response_listSubjects = {
    id: string,
    name: string,
    order: option(int),
    description: option(string),
    module_: response_listSubjects_module_,
  };

  type response = {listSubjects: option(array(response_listSubjects))};
  type refetchVariables = {filter: option(subjectsFilter)};
  let makeRefetchVariables = (~filter=?, ()): refetchVariables => {
    filter: filter,
  };
  type variables = {filter: option(subjectsFilter)};
};

module Internal = {
  type responseRaw;
  let responseConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"listSubjects":{"n":""},"listSubjects_order":{"n":""},"listSubjects_description":{"n":""}}} |json}
  ];
  let responseConverterMap = ();
  let convertResponse = v =>
    v
    ->ReasonRelay._convertObj(
        responseConverter,
        responseConverterMap,
        Js.undefined,
      );

  let variablesConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"filter":{"n":"","r":"SubjectsFilter"}},"SubjectsFilter":{"categoryId":{"n":""},"moduleId":{"n":""},"order":{"n":"","e":"enum_SortOrder"}}} |json}
  ];
  let variablesConverterMap = {"enum_SortOrder": wrap_enum_SortOrder};
  let convertVariables = v =>
    v
    ->ReasonRelay._convertObj(
        variablesConverter,
        variablesConverterMap,
        Js.undefined,
      );
};

type preloadToken;

module Utils = {
  open Types;
  let make_subjectsFilter =
      (~categoryId=?, ~moduleId=?, ~order=?, ()): subjectsFilter => {
    categoryId,
    moduleId,
    order,
  };

  let makeVariables = (~filter=?, ()): variables => {filter: filter};
};

type operationType = ReasonRelay.queryNode;

let node: operationType = [%raw
  {json| (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "filter",
    "type": "SubjectsFilter"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "filter",
    "variableName": "filter"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "order",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ListSubjectsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Subject",
        "kind": "LinkedField",
        "name": "listSubjects",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": "module_",
            "args": null,
            "concreteType": "Module",
            "kind": "LinkedField",
            "name": "module",
            "plural": false,
            "selections": [
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootQueryType"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ListSubjectsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Subject",
        "kind": "LinkedField",
        "name": "listSubjects",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": "module_",
            "args": null,
            "concreteType": "Module",
            "kind": "LinkedField",
            "name": "module",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ListSubjectsQuery",
    "operationKind": "query",
    "text": "query ListSubjectsQuery(\n  $filter: SubjectsFilter\n) {\n  listSubjects(filter: $filter) {\n    id\n    name\n    order\n    description\n    module_: module {\n      name\n      id\n    }\n  }\n}\n"
  }
};
})() |json}
];

include ReasonRelay.MakePreloadQuery({
  type variables = Types.variables;
  type queryPreloadToken = preloadToken;
  let query = node;
  let convertVariables = Internal.convertVariables;
});
