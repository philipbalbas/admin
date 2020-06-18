/* @generated */

module Types = {
  type cardAnswersUpsertInput = {
    answerIds: array(string),
    cardId: string,
  };
  type upsertCardAnswersInput = {inputData: cardAnswersUpsertInput};
  type response_upsertCardAnswers_result = {
    id: string,
    question: string,
  };
  type response_upsertCardAnswers = {
    result: option(response_upsertCardAnswers_result),
  };

  type response = {upsertCardAnswers: option(response_upsertCardAnswers)};
  type variables = {input: upsertCardAnswersInput};
};

module Internal = {
  type wrapResponseRaw;
  let wrapResponseConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"upsertCardAnswers":{"n":""},"upsertCardAnswers_result":{"n":""}}} |json}
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
    {json| {"__root":{"upsertCardAnswers":{"n":""},"upsertCardAnswers_result":{"n":""}}} |json}
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
    {json| {"__root":{"input":{"r":"UpsertCardAnswersInput"}},"CardAnswersUpsertInput":{},"UpsertCardAnswersInput":{"inputData":{"r":"CardAnswersUpsertInput"}}} |json}
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
  let make_cardAnswersUpsertInput =
      (~answerIds, ~cardId): cardAnswersUpsertInput => {
    answerIds,
    cardId,
  };

  let make_upsertCardAnswersInput = (~inputData): upsertCardAnswersInput => {
    inputData: inputData,
  };

  let makeVariables = (~input): variables => {input: input};

  let make_response_upsertCardAnswers_result =
      (~id, ~question): response_upsertCardAnswers_result => {
    id,
    question,
  };

  let make_response_upsertCardAnswers =
      (~result=?, ()): response_upsertCardAnswers => {
    result: result,
  };

  let makeOptimisticResponse = (~upsertCardAnswers=?, ()): response => {
    upsertCardAnswers: upsertCardAnswers,
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
    "type": "UpsertCardAnswersInput!"
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
    "concreteType": "UpsertCardAnswersPayload",
    "kind": "LinkedField",
    "name": "upsertCardAnswers",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Card",
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
            "name": "question",
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
    "name": "FormCardUpsertAnswersMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutationType"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormCardUpsertAnswersMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "FormCardUpsertAnswersMutation",
    "operationKind": "mutation",
    "text": "mutation FormCardUpsertAnswersMutation(\n  $input: UpsertCardAnswersInput!\n) {\n  upsertCardAnswers(input: $input) {\n    result {\n      id\n      question\n    }\n  }\n}\n"
  }
};
})() |json}
];
