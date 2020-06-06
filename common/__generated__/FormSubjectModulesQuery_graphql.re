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
  type moduleFilter = {
    categoryId: option(string),
    order: option([ | `ASC | `DESC | `FutureAddedValue(string)]),
  };
  type response_listModules = {
    id: string,
    name: string,
  };

  type response = {listModules: option(array(response_listModules))};
  type refetchVariables = {filter: option(moduleFilter)};
  let makeRefetchVariables = (~filter=?, ()): refetchVariables => {
    filter: filter,
  };
  type variables = {filter: option(moduleFilter)};
};

module Internal = {
  type responseRaw;
  let responseConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"listModules":{"n":""}}} |json}
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
    {json| {"__root":{"filter":{"n":"","r":"ModuleFilter"}},"ModuleFilter":{"categoryId":{"n":""},"order":{"n":"","e":"enum_SortOrder"}}} |json}
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
  let make_moduleFilter = (~categoryId=?, ~order=?, ()): moduleFilter => {
    categoryId,
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
    "type": "ModuleFilter"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "filter",
        "variableName": "filter"
      }
    ],
    "concreteType": "Module",
    "kind": "LinkedField",
    "name": "listModules",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FormSubjectModulesQuery",
    "selections": (v1/*: any*/),
    "type": "RootQueryType"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormSubjectModulesQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "FormSubjectModulesQuery",
    "operationKind": "query",
    "text": "query FormSubjectModulesQuery(\n  $filter: ModuleFilter\n) {\n  listModules(filter: $filter) {\n    id\n    name\n  }\n}\n"
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
