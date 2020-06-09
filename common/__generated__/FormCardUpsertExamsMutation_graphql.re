/* @generated */

module Types = {
  type cardExamsUpsertInput = {
    cardId: string,
    examIds: array(string),
  };
  type upsertCardExamsInput = {inputData: cardExamsUpsertInput};
  type response_upsertCardExams_result = {
    id: string,
    question: string,
  };
  type response_upsertCardExams = {
    result: option(response_upsertCardExams_result),
  };

  type response = {upsertCardExams: option(response_upsertCardExams)};
  type variables = {input: upsertCardExamsInput};
};

module Internal = {
  type wrapResponseRaw;
  let wrapResponseConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"upsertCardExams":{"n":""},"upsertCardExams_result":{"n":""}}} |json}
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
    {json| {"__root":{"upsertCardExams":{"n":""},"upsertCardExams_result":{"n":""}}} |json}
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
    {json| {"__root":{"input":{"r":"UpsertCardExamsInput"}},"CardExamsUpsertInput":{},"UpsertCardExamsInput":{"inputData":{"r":"CardExamsUpsertInput"}}} |json}
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
  let make_cardExamsUpsertInput = (~cardId, ~examIds): cardExamsUpsertInput => {
    cardId,
    examIds,
  };

  let make_upsertCardExamsInput = (~inputData): upsertCardExamsInput => {
    inputData: inputData,
  };

  let makeVariables = (~input): variables => {input: input};

  let make_response_upsertCardExams_result =
      (~id, ~question): response_upsertCardExams_result => {
    id,
    question,
  };

  let make_response_upsertCardExams =
      (~result=?, ()): response_upsertCardExams => {
    result: result,
  };

  let makeOptimisticResponse = (~upsertCardExams=?, ()): response => {
    upsertCardExams: upsertCardExams,
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
    "type": "UpsertCardExamsInput!"
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
    "concreteType": "UpsertCardExamsPayload",
    "kind": "LinkedField",
    "name": "upsertCardExams",
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
    "name": "FormCardUpsertExamsMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutationType"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormCardUpsertExamsMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "FormCardUpsertExamsMutation",
    "operationKind": "mutation",
    "text": "mutation FormCardUpsertExamsMutation(\n  $input: UpsertCardExamsInput!\n) {\n  upsertCardExams(input: $input) {\n    result {\n      id\n      question\n    }\n  }\n}\n"
  }
};
})() |json}
];
