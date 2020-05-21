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
  type response_getCategory_exams = {
    id: string,
    name: string,
    description: string,
    type_: [
      | `COMPREHENSIVE
      | `MOCK
      | `PRACTICE
      | `FutureAddedValue(string)
    ],
  };
  type response_getCategory = {
    id: string,
    name: string,
    exams: option(array(response_getCategory_exams)),
  };

  type response = {getCategory: option(response_getCategory)};
  type refetchVariables = {id: option(string)};
  let makeRefetchVariables = (~id=?, ()): refetchVariables => {id: id};
  type variables = {id: string};
};

module Internal = {
  type responseRaw;
  let responseConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"getCategory":{"n":""},"getCategory_exams":{"n":""},"getCategory_exams_type_":{"e":"enum_ExamType"}}} |json}
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
  let makeVariables = (~id): variables => {id: id};
};

type operationType = ReasonRelay.queryNode;

let node: operationType = [%raw
  {json| (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!"
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
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Category",
    "kind": "LinkedField",
    "name": "getCategory",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Exam",
        "kind": "LinkedField",
        "name": "exams",
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
            "alias": "type_",
            "args": null,
            "kind": "ScalarField",
            "name": "type",
            "storageKey": null
          }
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
    "name": "ExamsListQuery",
    "selections": (v3/*: any*/),
    "type": "RootQueryType"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ExamsListQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ExamsListQuery",
    "operationKind": "query",
    "text": "query ExamsListQuery(\n  $id: ID!\n) {\n  getCategory(id: $id) {\n    id\n    name\n    exams {\n      id\n      name\n      description\n      type_: type\n    }\n  }\n}\n"
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
