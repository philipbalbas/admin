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
  type topicsFilter = {
    categoryId: option(string),
    moduleId: option(string),
    order: option([ | `ASC | `DESC | `FutureAddedValue(string)]),
    subjectId: option(string),
  };
  type response_listTopics_subject = {
    id: string,
    name: string,
  };
  type response_listTopics = {
    id: string,
    name: string,
    description: option(string),
    order: option(int),
    subject: response_listTopics_subject,
  };

  type response = {listTopics: option(array(response_listTopics))};
  type refetchVariables = {filter: option(topicsFilter)};
  let makeRefetchVariables = (~filter=?, ()): refetchVariables => {
    filter: filter,
  };
  type variables = {filter: option(topicsFilter)};
};

module Internal = {
  type responseRaw;
  let responseConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"listTopics":{"n":""},"listTopics_description":{"n":""},"listTopics_order":{"n":""}}} |json}
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
    {json| {"__root":{"filter":{"n":"","r":"TopicsFilter"}},"TopicsFilter":{"categoryId":{"n":""},"moduleId":{"n":""},"order":{"n":"","e":"enum_SortOrder"},"subjectId":{"n":""}}} |json}
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
  let make_topicsFilter =
      (~categoryId=?, ~moduleId=?, ~order=?, ~subjectId=?, ()): topicsFilter => {
    categoryId,
    moduleId,
    order,
    subjectId,
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
    "type": "TopicsFilter"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "filter",
        "variableName": "filter"
      }
    ],
    "concreteType": "Topic",
    "kind": "LinkedField",
    "name": "listTopics",
    "plural": true,
    "selections": [
      (v1/*: any*/),
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "order",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Subject",
        "kind": "LinkedField",
        "name": "subject",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/)
        ],
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
    "name": "ListTopicsQuery",
    "selections": (v3/*: any*/),
    "type": "RootQueryType"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ListTopicsQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ListTopicsQuery",
    "operationKind": "query",
    "text": "query ListTopicsQuery(\n  $filter: TopicsFilter\n) {\n  listTopics(filter: $filter) {\n    id\n    name\n    description\n    order\n    subject {\n      id\n      name\n    }\n  }\n}\n"
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
