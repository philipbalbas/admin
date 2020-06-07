/* @generated */

type enum_ExamType = [
  | `COMPREHENSIVE
  | `MOCK
  | `PRACTICE
  | `FutureAddedValue(string)
];

let unwrap_enum_ExamType: string => enum_ExamType =
  fun
  | "COMPREHENSIVE" => `COMPREHENSIVE
  | "MOCK" => `MOCK
  | "PRACTICE" => `PRACTICE
  | v => `FutureAddedValue(v);

let wrap_enum_ExamType: enum_ExamType => string =
  fun
  | `COMPREHENSIVE => "COMPREHENSIVE"
  | `MOCK => "MOCK"
  | `PRACTICE => "PRACTICE"
  | `FutureAddedValue(v) => v;

module Types = {
  type response_listExams = {
    id: string,
    name: string,
    description: string,
    type_: [
      | `COMPREHENSIVE
      | `MOCK
      | `PRACTICE
      | `FutureAddedValue(string)
    ],
    order: option(int),
  };

  type response = {listExams: option(array(response_listExams))};
  type refetchVariables = {categoryId: option(string)};
  let makeRefetchVariables = (~categoryId=?, ()): refetchVariables => {
    categoryId: categoryId,
  };
  type variables = {categoryId: string};
};

module Internal = {
  type responseRaw;
  let responseConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"listExams":{"n":""},"listExams_type_":{"e":"enum_ExamType"},"listExams_order":{"n":""}}} |json}
  ];
  let responseConverterMap = {"enum_ExamType": unwrap_enum_ExamType};
  let convertResponse = v =>
    v
    ->ReasonRelay._convertObj(
        responseConverter,
        responseConverterMap,
        Js.undefined,
      );

  let variablesConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {} |json}
  ];
  let variablesConverterMap = ();
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
  let makeVariables = (~categoryId): variables => {categoryId: categoryId};
};

type operationType = ReasonRelay.queryNode;

let node: operationType = [%raw
  {json| (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "categoryId",
    "type": "ID!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "categoryId",
            "variableName": "categoryId"
          }
        ],
        "kind": "ObjectValue",
        "name": "filter"
      }
    ],
    "concreteType": "Exam",
    "kind": "LinkedField",
    "name": "listExams",
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": "type_",
        "args": null,
        "kind": "ScalarField",
        "name": "type",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "order",
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
    "name": "ListExamsQuery",
    "selections": (v1/*: any*/),
    "type": "RootQueryType"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ListExamsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ListExamsQuery",
    "operationKind": "query",
    "text": "query ListExamsQuery(\n  $categoryId: ID!\n) {\n  listExams(filter: {categoryId: $categoryId}) {\n    id\n    name\n    description\n    type_: type\n    order\n  }\n}\n"
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
