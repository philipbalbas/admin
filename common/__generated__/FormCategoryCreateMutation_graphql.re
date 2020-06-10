/* @generated */

module Types = {
  type categoryInputCreate = {
    description: string,
    name: string,
  };
  type createCategoryInput = {inputData: categoryInputCreate};
  type response_createCategory_result = {
    id: string,
    name: string,
    description: string,
  };
  type response_createCategory = {
    result: option(response_createCategory_result),
  };

  type response = {createCategory: option(response_createCategory)};
  type variables = {input: createCategoryInput};
};

module Internal = {
  type wrapResponseRaw;
  let wrapResponseConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"createCategory":{"n":""},"createCategory_result":{"n":""}}} |json}
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
    {json| {"__root":{"createCategory":{"n":""},"createCategory_result":{"n":""}}} |json}
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
    {json| {"__root":{"input":{"r":"CreateCategoryInput"}},"CategoryInputCreate":{},"CreateCategoryInput":{"inputData":{"r":"CategoryInputCreate"}}} |json}
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
  let make_categoryInputCreate = (~description, ~name): categoryInputCreate => {
    description,
    name,
  };

  let make_createCategoryInput = (~inputData): createCategoryInput => {
    inputData: inputData,
  };

  let makeVariables = (~input): variables => {input: input};

  let make_response_createCategory_result =
      (~id, ~name, ~description): response_createCategory_result => {
    id,
    name,
    description,
  };

  let make_response_createCategory = (~result=?, ()): response_createCategory => {
    result: result,
  };

  let makeOptimisticResponse = (~createCategory=?, ()): response => {
    createCategory: createCategory,
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
    "type": "CreateCategoryInput!"
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
    "concreteType": "CreateCategoryPayload",
    "kind": "LinkedField",
    "name": "createCategory",
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
    "name": "FormCategoryCreateMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutationType"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormCategoryCreateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "FormCategoryCreateMutation",
    "operationKind": "mutation",
    "text": "mutation FormCategoryCreateMutation(\n  $input: CreateCategoryInput!\n) {\n  createCategory(input: $input) {\n    result {\n      id\n      name\n      description\n    }\n  }\n}\n"
  }
};
})() |json}
];
