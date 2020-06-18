/* @generated */

module Types = {
  type examCardsUpsertInput = {
    cardIds: array(string),
    examId: string,
  };
  type upsertExamCardsInput = {inputData: examCardsUpsertInput};
  type response_upsertExamCards_result = {
    id: string,
    name: string,
  };
  type response_upsertExamCards = {
    result: option(response_upsertExamCards_result),
  };

  type response = {upsertExamCards: option(response_upsertExamCards)};
  type variables = {input: upsertExamCardsInput};
};

module Internal = {
  type wrapResponseRaw;
  let wrapResponseConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"upsertExamCards":{"n":""},"upsertExamCards_result":{"n":""}}} |json}
  ];
  let wrapResponseConverterMap = ();
  let convertWrapResponse = v =>
    v
    ->ReasonRelay._convertObj(
        wrapResponseConverter,
        wrapResponseConverterMap,
        Js.null,
      );

  type responseRaw;
  let responseConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"upsertExamCards":{"n":""},"upsertExamCards_result":{"n":""}}} |json}
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
    {json| {"__root":{"input":{"r":"UpsertExamCardsInput"}},"ExamCardsUpsertInput":{},"UpsertExamCardsInput":{"inputData":{"r":"ExamCardsUpsertInput"}}} |json}
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

module Utils = {
  open Types;
  let make_examCardsUpsertInput = (~cardIds, ~examId): examCardsUpsertInput => {
    cardIds,
    examId,
  };

  let make_upsertExamCardsInput = (~inputData): upsertExamCardsInput => {
    inputData: inputData,
  };

  let makeVariables = (~input): variables => {input: input};

  let make_response_upsertExamCards_result =
      (~id, ~name): response_upsertExamCards_result => {
    id,
    name,
  };

  let make_response_upsertExamCards =
      (~result=?, ()): response_upsertExamCards => {
    result: result,
  };

  let makeOptimisticResponse = (~upsertExamCards=?, ()): response => {
    upsertExamCards: upsertExamCards,
  };
};

type operationType = ReasonRelay.mutationNode;

let node: operationType = [%raw
  {json| (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpsertExamCardsInput!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpsertExamCardsPayload",
    "kind": "LinkedField",
    "name": "upsertExamCards",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Exam",
        "kind": "LinkedField",
        "name": "result",
        "plural": false,
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FormExamUpsertCardsMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutationType"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormExamUpsertCardsMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "FormExamUpsertCardsMutation",
    "operationKind": "mutation",
    "text": "mutation FormExamUpsertCardsMutation(\n  $input: UpsertExamCardsInput!\n) {\n  upsertExamCards(input: $input) {\n    result {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})() |json}
];
