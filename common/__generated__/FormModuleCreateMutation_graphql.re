/* @generated */

module Types = {
  type moduleInput = {
    categoryId: string,
    description: string,
    name: string,
  };
  type createModuleInput = {inputData: moduleInput};
  type response_createModule_result = {
    id: string,
    name: string,
    description: string,
  };
  type response_createModule = {
    result: option(response_createModule_result),
  };

  type response = {createModule: option(response_createModule)};
  type variables = {input: createModuleInput};
};

module Internal = {
  type wrapResponseRaw;
  let wrapResponseConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"createModule":{"n":""},"createModule_result":{"n":""}}} |json}
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
    {json| {"__root":{"createModule":{"n":""},"createModule_result":{"n":""}}} |json}
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
    {json| {"__root":{"input":{"r":"CreateModuleInput"}},"CreateModuleInput":{"inputData":{"r":"ModuleInput"}},"ModuleInput":{}} |json}
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
  let make_moduleInput = (~categoryId, ~description, ~name): moduleInput => {
    categoryId,
    description,
    name,
  };

  let make_createModuleInput = (~inputData): createModuleInput => {
    inputData: inputData,
  };

  let makeVariables = (~input): variables => {input: input};

  let make_response_createModule_result =
      (~id, ~name, ~description): response_createModule_result => {
    id,
    name,
    description,
  };

  let make_response_createModule = (~result=?, ()): response_createModule => {
    result: result,
  };

  let makeOptimisticResponse = (~createModule=?, ()): response => {
    createModule: createModule,
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
    "type": "CreateModuleInput!"
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
    "concreteType": "CreateModulePayload",
    "kind": "LinkedField",
    "name": "createModule",
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
    "name": "FormModuleCreateMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutationType"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormModuleCreateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "FormModuleCreateMutation",
    "operationKind": "mutation",
    "text": "mutation FormModuleCreateMutation(\n  $input: CreateModuleInput!\n) {\n  createModule(input: $input) {\n    result {\n      id\n      name\n      description\n    }\n  }\n}\n"
  }
};
})() |json}
];
