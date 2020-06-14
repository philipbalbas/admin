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
  type response_getExam_topics = {id: string};
  type response_getExam = {
    name: string,
    description: string,
    type_: [
      | `COMPREHENSIVE
      | `MOCK
      | `PRACTICE
      | `FutureAddedValue(string)
    ],
    order: option(int),
    topics: option(array(response_getExam_topics)),
  };

  type response = {getExam: option(response_getExam)};
  type refetchVariables = {id: option(string)};
  let makeRefetchVariables = (~id=?, ()): refetchVariables => {id: id};
  type variables = {id: string};
};

module Internal = {
  type responseRaw;
  let responseConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"getExam":{"n":""},"getExam_type_":{"e":"enum_ExamType"},"getExam_order":{"n":""},"getExam_topics":{"n":""}}} |json}
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
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v4 = {
  "alias": "type_",
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "order",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "concreteType": "Topic",
  "kind": "LinkedField",
  "name": "topics",
  "plural": true,
  "selections": [
    (v6/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FormExamQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Exam",
        "kind": "LinkedField",
        "name": "getExam",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v7/*: any*/)
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
    "name": "FormExamQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Exam",
        "kind": "LinkedField",
        "name": "getExam",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v7/*: any*/),
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "FormExamQuery",
    "operationKind": "query",
    "text": "query FormExamQuery(\n  $id: ID!\n) {\n  getExam(id: $id) {\n    name\n    description\n    type_: type\n    order\n    topics {\n      id\n    }\n    id\n  }\n}\n"
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
