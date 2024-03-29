/* @generated */

type enum_CardLevel = [
  | `ANALYSE
  | `APPLY
  | `CREATE
  | `EVALUATE
  | `REMEMBER
  | `UNDERSTAND
  | `FutureAddedValue(string)
];

let unwrap_enum_CardLevel: string => enum_CardLevel =
  fun
  | "ANALYSE" => `ANALYSE
  | "APPLY" => `APPLY
  | "CREATE" => `CREATE
  | "EVALUATE" => `EVALUATE
  | "REMEMBER" => `REMEMBER
  | "UNDERSTAND" => `UNDERSTAND
  | v => `FutureAddedValue(v);

let wrap_enum_CardLevel: enum_CardLevel => string =
  fun
  | `ANALYSE => "ANALYSE"
  | `APPLY => "APPLY"
  | `CREATE => "CREATE"
  | `EVALUATE => "EVALUATE"
  | `REMEMBER => "REMEMBER"
  | `UNDERSTAND => "UNDERSTAND"
  | `FutureAddedValue(v) => v;

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
  type cardCreateInput = {
    level: [
      | `ANALYSE
      | `APPLY
      | `CREATE
      | `EVALUATE
      | `REMEMBER
      | `UNDERSTAND
      | `FutureAddedValue(string)
    ],
    question: string,
    rationale: option(string),
    topicId: string,
    [@bs.as "type"]
    type_: [ | `MULTIPLE | `SINGLE | `FutureAddedValue(string)],
  };
  type createCardInput = {inputData: cardCreateInput};
  type response_createCard_result = {
    id: string,
    question: string,
    rationale: option(string),
    type_: [ | `MULTIPLE | `SINGLE | `FutureAddedValue(string)],
    level: [
      | `ANALYSE
      | `APPLY
      | `CREATE
      | `EVALUATE
      | `REMEMBER
      | `UNDERSTAND
      | `FutureAddedValue(string)
    ],
  };
  type response_createCard = {result: option(response_createCard_result)};

  type response = {createCard: option(response_createCard)};
  type variables = {input: createCardInput};
};

module Internal = {
  type wrapResponseRaw;
  let wrapResponseConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"createCard":{"n":""},"createCard_result":{"n":""},"createCard_result_rationale":{"n":""},"createCard_result_type_":{"e":"enum_CardType"},"createCard_result_level":{"e":"enum_CardLevel"}}} |json}
  ];
  let wrapResponseConverterMap = {
    "enum_CardType": wrap_enum_CardType,
    "enum_CardLevel": wrap_enum_CardLevel,
  };
  let convertWrapResponse = v =>
    v
    ->ReasonRelay._convertObj(
        wrapResponseConverter,
        wrapResponseConverterMap,
        Js.null,
      );

  type responseRaw;
  let responseConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"createCard":{"n":""},"createCard_result":{"n":""},"createCard_result_rationale":{"n":""},"createCard_result_type_":{"e":"enum_CardType"},"createCard_result_level":{"e":"enum_CardLevel"}}} |json}
  ];
  let responseConverterMap = {
    "enum_CardType": unwrap_enum_CardType,
    "enum_CardLevel": unwrap_enum_CardLevel,
  };
  let convertResponse = v =>
    v
    ->ReasonRelay._convertObj(
        responseConverter,
        responseConverterMap,
        Js.undefined,
      );

  let variablesConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"input":{"r":"CreateCardInput"}},"CardCreateInput":{"level":{"e":"enum_CardLevel"},"rationale":{"n":""},"type":{"e":"enum_CardType"}},"CreateCardInput":{"inputData":{"r":"CardCreateInput"}}} |json}
  ];
  let variablesConverterMap = {
    "enum_CardLevel": wrap_enum_CardLevel,
    "enum_CardType": wrap_enum_CardType,
  };
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
  let make_cardCreateInput =
      (~level, ~question, ~rationale=?, ~topicId, ~type_, ()): cardCreateInput => {
    level,
    question,
    rationale,
    topicId,
    type_,
  };

  let make_createCardInput = (~inputData): createCardInput => {
    inputData: inputData,
  };

  let makeVariables = (~input): variables => {input: input};

  let make_response_createCard_result =
      (~id, ~question, ~rationale=?, ~type_, ~level, ())
      : response_createCard_result => {
    id,
    question,
    rationale,
    type_,
    level,
  };

  let make_response_createCard = (~result=?, ()): response_createCard => {
    result: result,
  };

  let makeOptimisticResponse = (~createCard=?, ()): response => {
    createCard: createCard,
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
    "type": "CreateCardInput!"
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
    "concreteType": "CreateCardPayload",
    "kind": "LinkedField",
    "name": "createCard",
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "rationale",
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
            "name": "level",
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
    "name": "FormCardCreateMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutationType"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormCardCreateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "FormCardCreateMutation",
    "operationKind": "mutation",
    "text": "mutation FormCardCreateMutation(\n  $input: CreateCardInput!\n) {\n  createCard(input: $input) {\n    result {\n      id\n      question\n      rationale\n      type_: type\n      level\n    }\n  }\n}\n"
  }
};
})() |json}
];
