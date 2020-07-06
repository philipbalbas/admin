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
  type cardUpdateInput = {
    id: string,
    level:
      option(
        [
          | `ANALYSE
          | `APPLY
          | `CREATE
          | `EVALUATE
          | `REMEMBER
          | `UNDERSTAND
          | `FutureAddedValue(string)
        ],
      ),
    question: option(string),
    rationale: option(string),
    topicId: option(string),
    [@bs.as "type"]
    type_: option([ | `MULTIPLE | `SINGLE | `FutureAddedValue(string)]),
  };
  type updateCardInput = {inputData: cardUpdateInput};
  type response_updateCard_result = {
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
  type response_updateCard = {result: option(response_updateCard_result)};

  type response = {updateCard: option(response_updateCard)};
  type variables = {input: updateCardInput};
};

module Internal = {
  type wrapResponseRaw;
  let wrapResponseConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"updateCard":{"n":""},"updateCard_result":{"n":""},"updateCard_result_rationale":{"n":""},"updateCard_result_type_":{"e":"enum_CardType"},"updateCard_result_level":{"e":"enum_CardLevel"}}} |json}
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
    {json| {"__root":{"updateCard":{"n":""},"updateCard_result":{"n":""},"updateCard_result_rationale":{"n":""},"updateCard_result_type_":{"e":"enum_CardType"},"updateCard_result_level":{"e":"enum_CardLevel"}}} |json}
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
    {json| {"__root":{"input":{"r":"UpdateCardInput"}},"CardUpdateInput":{"level":{"n":"","e":"enum_CardLevel"},"question":{"n":""},"rationale":{"n":""},"topicId":{"n":""},"type":{"n":"","e":"enum_CardType"}},"UpdateCardInput":{"inputData":{"r":"CardUpdateInput"}}} |json}
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
  let make_cardUpdateInput =
      (~id, ~level=?, ~question=?, ~rationale=?, ~topicId=?, ~type_=?, ())
      : cardUpdateInput => {
    id,
    level,
    question,
    rationale,
    topicId,
    type_,
  };

  let make_updateCardInput = (~inputData): updateCardInput => {
    inputData: inputData,
  };

  let makeVariables = (~input): variables => {input: input};

  let make_response_updateCard_result =
      (~id, ~question, ~rationale=?, ~type_, ~level, ())
      : response_updateCard_result => {
    id,
    question,
    rationale,
    type_,
    level,
  };

  let make_response_updateCard = (~result=?, ()): response_updateCard => {
    result: result,
  };

  let makeOptimisticResponse = (~updateCard=?, ()): response => {
    updateCard: updateCard,
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
    "type": "UpdateCardInput!"
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
    "concreteType": "UpdateCardPayload",
    "kind": "LinkedField",
    "name": "updateCard",
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
    "name": "FormCardUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutationType"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormCardUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "FormCardUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation FormCardUpdateMutation(\n  $input: UpdateCardInput!\n) {\n  updateCard(input: $input) {\n    result {\n      id\n      question\n      rationale\n      type_: type\n      level\n    }\n  }\n}\n"
  }
};
})() |json}
];
