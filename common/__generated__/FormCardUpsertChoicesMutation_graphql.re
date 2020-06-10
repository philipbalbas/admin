/* @generated */

module Types = {
  type cardChoicesUpsertInput = {
    cardId: string,
    choiceIds: array(string),
  };
  type upsertCardChoicesInput = {inputData: cardChoicesUpsertInput};
  type response_upsertCardChoices_result = {
    id: string,
    question: string,
  };
  type response_upsertCardChoices = {
    result: option(response_upsertCardChoices_result),
  };

  type response = {upsertCardChoices: option(response_upsertCardChoices)};
  type variables = {input: upsertCardChoicesInput};
};

module Internal = {
  type wrapResponseRaw;
  let wrapResponseConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"upsertCardChoices":{"n":""},"upsertCardChoices_result":{"n":""}}} |json}
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
    {json| {"__root":{"upsertCardChoices":{"n":""},"upsertCardChoices_result":{"n":""}}} |json}
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
    {json| {"__root":{"input":{"r":"UpsertCardChoicesInput"}},"CardChoicesUpsertInput":{},"UpsertCardChoicesInput":{"inputData":{"r":"CardChoicesUpsertInput"}}} |json}
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
  let make_cardChoicesUpsertInput =
      (~cardId, ~choiceIds): cardChoicesUpsertInput => {
    cardId,
    choiceIds,
  };

  let make_upsertCardChoicesInput = (~inputData): upsertCardChoicesInput => {
    inputData: inputData,
  };

  let makeVariables = (~input): variables => {input: input};

  let make_response_upsertCardChoices_result =
      (~id, ~question): response_upsertCardChoices_result => {
    id,
    question,
  };

  let make_response_upsertCardChoices =
      (~result=?, ()): response_upsertCardChoices => {
    result: result,
  };

  let makeOptimisticResponse = (~upsertCardChoices=?, ()): response => {
    upsertCardChoices: upsertCardChoices,
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
    "type": "UpsertCardChoicesInput!"
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
    "concreteType": "UpsertCardChoicesPayload",
    "kind": "LinkedField",
    "name": "upsertCardChoices",
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
    "name": "FormCardUpsertChoicesMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutationType"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormCardUpsertChoicesMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "FormCardUpsertChoicesMutation",
    "operationKind": "mutation",
    "text": "mutation FormCardUpsertChoicesMutation(\n  $input: UpsertCardChoicesInput!\n) {\n  upsertCardChoices(input: $input) {\n    result {\n      id\n      question\n    }\n  }\n}\n"
  }
};
})() |json}
];
