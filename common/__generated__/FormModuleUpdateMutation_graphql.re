/* @generated */

module Types = {
  type moduleInputUpdate = {
    categoryId: option(string),
    description: option(string),
    id: string,
    name: option(string),
    order: option(int),
  };
  type updateModuleInput = {inputData: moduleInputUpdate};
  type response_updateModule_result = {
    id: string,
    name: string,
    description: string,
    order: option(int),
  };
  type response_updateModule = {
    result: option(response_updateModule_result),
  };

  type response = {updateModule: option(response_updateModule)};
  type variables = {input: updateModuleInput};
};

module Internal = {
  type wrapResponseRaw;
  let wrapResponseConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"updateModule":{"n":""},"updateModule_result":{"n":""},"updateModule_result_order":{"n":""}}} |json}
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
    {json| {"__root":{"updateModule":{"n":""},"updateModule_result":{"n":""},"updateModule_result_order":{"n":""}}} |json}
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
    {json| {"__root":{"input":{"r":"UpdateModuleInput"}},"ModuleInputUpdate":{"categoryId":{"n":""},"description":{"n":""},"name":{"n":""},"order":{"n":""}},"UpdateModuleInput":{"inputData":{"r":"ModuleInputUpdate"}}} |json}
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
  let make_moduleInputUpdate =
      (~categoryId=?, ~description=?, ~id, ~name=?, ~order=?, ())
      : moduleInputUpdate => {
    categoryId,
    description,
    id,
    name,
    order,
  };

  let make_updateModuleInput = (~inputData): updateModuleInput => {
    inputData: inputData,
  };

  let makeVariables = (~input): variables => {input: input};

  let make_response_updateModule_result =
      (~id, ~name, ~description, ~order=?, ()): response_updateModule_result => {
    id,
    name,
    description,
    order,
  };

  let make_response_updateModule = (~result=?, ()): response_updateModule => {
    result: result,
  };

  let makeOptimisticResponse = (~updateModule=?, ()): response => {
    updateModule: updateModule,
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
    "type": "UpdateModuleInput!"
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
    "concreteType": "UpdateModulePayload",
    "kind": "LinkedField",
    "name": "updateModule",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Module",
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "order",
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
    "name": "FormModuleUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutationType"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormModuleUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "FormModuleUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation FormModuleUpdateMutation(\n  $input: UpdateModuleInput!\n) {\n  updateModule(input: $input) {\n    result {\n      id\n      name\n      description\n      order\n    }\n  }\n}\n"
  }
};
})() |json}
];
