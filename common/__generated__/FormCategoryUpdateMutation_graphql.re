/* @generated */

module Types = {
  type categoryInputUpdate = {
    description: option(string),
    id: string,
    name: option(string),
  };
  type updateCategoryInput = {inputData: categoryInputUpdate};
  type response_updateCategory_result = {
    id: string,
    name: string,
    description: string,
  };
  type response_updateCategory = {
    result: option(response_updateCategory_result),
  };

  type response = {updateCategory: option(response_updateCategory)};
  type variables = {input: updateCategoryInput};
};

module Internal = {
  type wrapResponseRaw;
  let wrapResponseConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"updateCategory":{"n":""},"updateCategory_result":{"n":""}}} |json}
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
    {json| {"__root":{"updateCategory":{"n":""},"updateCategory_result":{"n":""}}} |json}
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
    {json| {"__root":{"input":{"r":"UpdateCategoryInput"}},"CategoryInputUpdate":{"description":{"n":""},"name":{"n":""}},"UpdateCategoryInput":{"inputData":{"r":"CategoryInputUpdate"}}} |json}
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
  let make_categoryInputUpdate =
      (~description=?, ~id, ~name=?, ()): categoryInputUpdate => {
    description,
    id,
    name,
  };

  let make_updateCategoryInput = (~inputData): updateCategoryInput => {
    inputData: inputData,
  };

  let makeVariables = (~input): variables => {input: input};

  let make_response_updateCategory_result =
      (~id, ~name, ~description): response_updateCategory_result => {
    id,
    name,
    description,
  };

  let make_response_updateCategory = (~result=?, ()): response_updateCategory => {
    result: result,
  };

  let makeOptimisticResponse = (~updateCategory=?, ()): response => {
    updateCategory: updateCategory,
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
    "type": "UpdateCategoryInput!"
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
    "concreteType": "UpdateCategoryPayload",
    "kind": "LinkedField",
    "name": "updateCategory",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Category",
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
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
    "name": "FormCategoryUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutationType"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormCategoryUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "FormCategoryUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation FormCategoryUpdateMutation(\n  $input: UpdateCategoryInput!\n) {\n  updateCategory(input: $input) {\n    result {\n      id\n      name\n      description\n    }\n  }\n}\n"
  }
};
})() |json}
];
