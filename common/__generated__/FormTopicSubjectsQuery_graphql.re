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
  type response_listSubjects = {
    id: string,
    name: string,
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
    {json| {"__root":{"listSubjects":{"n":""}}} |json}
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "filter",
        "variableName": "filter"
      }
    ],
    "concreteType": "Subject",
    "kind": "LinkedField",
    "name": "listSubjects",
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
    "name": "FormTopicSubjectsQuery",
    "selections": (v1/*: any*/),
    "type": "RootQueryType"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormTopicSubjectsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "FormTopicSubjectsQuery",
    "operationKind": "query",
    "text": "query FormTopicSubjectsQuery(\n  $filter: SubjectsFilter\n) {\n  listSubjects(filter: $filter) {\n    id\n    name\n  }\n}\n"
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
