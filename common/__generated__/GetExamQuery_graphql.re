/* @generated */

type enum_CardType = [ | `MULTIPLE | `SINGLE | `FutureAddedValue(string)];

let unwrap_enum_CardType: string => enum_CardType =
  fun
  | "MULTIPLE" => `MULTIPLE
  | "SINGLE" => `SINGLE
  | v => `FutureAddedValue(v);

let wrap_enum_CardType: enum_CardType => string =
  fun
  | `MULTIPLE => "MULTIPLE"
  | `SINGLE => "SINGLE"
  | `FutureAddedValue(v) => v;

module Types = {
  type response_getExam_cards_answers = {
    content: string,
    id: string,
  };
  type response_getExam_cards_choices = {
    content: string,
    id: string,
  };
  type response_getExam_cards = {
    id: string,
    question: string,
    type_: [ | `MULTIPLE | `SINGLE | `FutureAddedValue(string)],
    rationale: option(string),
    choices: option(array(option(response_getExam_cards_choices))),
    answers: option(array(option(response_getExam_cards_answers))),
  };
  type response_getExam = {
    id: string,
    name: string,
    description: string,
    cards: option(array(option(response_getExam_cards))),
  };

  type response = {getExam: option(response_getExam)};
  type refetchVariables = {id: option(string)};
  let makeRefetchVariables = (~id=?, ()): refetchVariables => {id: id};
  type variables = {id: string};
};

module Internal = {
  type responseRaw;
  let responseConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"getExam":{"n":""},"getExam_cards":{"n":"","na":""},"getExam_cards_type_":{"e":"enum_CardType"},"getExam_cards_rationale":{"n":""},"getExam_cards_choices":{"n":"","na":""},"getExam_cards_answers":{"n":"","na":""}}} |json}
  ];
  let responseConverterMap = {"enum_CardType": unwrap_enum_CardType};
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
v2 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "content",
    "storageKey": null
  },
  (v1/*: any*/)
],
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
    "concreteType": "Exam",
    "kind": "LinkedField",
    "name": "getExam",
    "plural": false,
    "selections": [
      (v1/*: any*/),
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
        "alias": null,
        "args": null,
        "concreteType": "Card",
        "kind": "LinkedField",
        "name": "cards",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "question",
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
            "name": "rationale",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Choice",
            "kind": "LinkedField",
            "name": "choices",
            "plural": true,
            "selections": (v2/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Choice",
            "kind": "LinkedField",
            "name": "answers",
            "plural": true,
            "selections": (v2/*: any*/),
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
    "name": "GetExamQuery",
    "selections": (v3/*: any*/),
    "type": "RootQueryType"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GetExamQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "GetExamQuery",
    "operationKind": "query",
    "text": "query GetExamQuery(\n  $id: ID!\n) {\n  getExam(id: $id) {\n    id\n    name\n    description\n    cards {\n      id\n      question\n      type_: type\n      rationale\n      choices {\n        content\n        id\n      }\n      answers {\n        content\n        id\n      }\n    }\n  }\n}\n"
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
