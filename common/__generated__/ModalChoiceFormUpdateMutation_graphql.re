/* @generated */

module Types = {
  type choiceUpdateInput = {
    content: string,
    id: string,
  };
  type updateChoiceInput = {inputData: choiceUpdateInput};
  type response_updateChoice_result = {
    id: string,
    content: string,
  };
  type response_updateChoice = {
    result: option(response_updateChoice_result),
  };

  type response = {updateChoice: option(response_updateChoice)};
  type variables = {input: updateChoiceInput};
};

module Internal = {
  type wrapResponseRaw;
  let wrapResponseConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"updateChoice":{"n":""},"updateChoice_result":{"n":""}}} |json}
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
    {json| {"__root":{"updateChoice":{"n":""},"updateChoice_result":{"n":""}}} |json}
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
    {json| {"__root":{"input":{"r":"UpdateChoiceInput"}},"ChoiceUpdateInput":{},"UpdateChoiceInput":{"inputData":{"r":"ChoiceUpdateInput"}}} |json}
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
  let make_choiceUpdateInput = (~content, ~id): choiceUpdateInput => {
    content,
    id,
  };

  let make_updateChoiceInput = (~inputData): updateChoiceInput => {
    inputData: inputData,
  };

  let makeVariables = (~input): variables => {input: input};

  let make_response_updateChoice_result =
      (~id, ~content): response_updateChoice_result => {
    id,
    content,
  };

  let make_response_updateChoice = (~result=?, ()): response_updateChoice => {
    result: result,
  };

  let makeOptimisticResponse = (~updateChoice=?, ()): response => {
    updateChoice: updateChoice,
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
    "type": "UpdateChoiceInput!"
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
    "concreteType": "UpdateChoicePayload",
    "kind": "LinkedField",
    "name": "updateChoice",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Choice",
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
            "name": "content",
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
    "name": "ModalChoiceFormUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutationType"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ModalChoiceFormUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ModalChoiceFormUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation ModalChoiceFormUpdateMutation(\n  $input: UpdateChoiceInput!\n) {\n  updateChoice(input: $input) {\n    result {\n      id\n      content\n    }\n  }\n}\n"
  }
};
})() |json}
];
