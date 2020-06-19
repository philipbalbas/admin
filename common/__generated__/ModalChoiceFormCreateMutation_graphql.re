/* @generated */

module Types = {
  type choiceCreateInput = {content: string};
  type createChoiceInput = {inputData: choiceCreateInput};
  type response_createChoice_result = {
    id: string,
    content: string,
  };
  type response_createChoice = {
    result: option(response_createChoice_result),
  };

  type response = {createChoice: option(response_createChoice)};
  type variables = {input: createChoiceInput};
};

module Internal = {
  type wrapResponseRaw;
  let wrapResponseConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"createChoice":{"n":""},"createChoice_result":{"n":""}}} |json}
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
    {json| {"__root":{"createChoice":{"n":""},"createChoice_result":{"n":""}}} |json}
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
    {json| {"__root":{"input":{"r":"CreateChoiceInput"}},"ChoiceCreateInput":{},"CreateChoiceInput":{"inputData":{"r":"ChoiceCreateInput"}}} |json}
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
  let make_choiceCreateInput = (~content): choiceCreateInput => {
    content: content,
  };

  let make_createChoiceInput = (~inputData): createChoiceInput => {
    inputData: inputData,
  };

  let makeVariables = (~input): variables => {input: input};

  let make_response_createChoice_result =
      (~id, ~content): response_createChoice_result => {
    id,
    content,
  };

  let make_response_createChoice = (~result=?, ()): response_createChoice => {
    result: result,
  };

  let makeOptimisticResponse = (~createChoice=?, ()): response => {
    createChoice: createChoice,
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
    "type": "CreateChoiceInput!"
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
    "concreteType": "CreateChoicePayload",
    "kind": "LinkedField",
    "name": "createChoice",
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
    "name": "ModalChoiceFormCreateMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutationType"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ModalChoiceFormCreateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ModalChoiceFormCreateMutation",
    "operationKind": "mutation",
    "text": "mutation ModalChoiceFormCreateMutation(\n  $input: CreateChoiceInput!\n) {\n  createChoice(input: $input) {\n    result {\n      id\n      content\n    }\n  }\n}\n"
  }
};
})() |json}
];
