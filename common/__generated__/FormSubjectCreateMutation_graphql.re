/* @generated */

module Types = {
  type subjectCreateInput = {
    description: option(string),
    moduleId: string,
    name: string,
    order: option(int),
  };
  type createSubjectInput = {inputData: subjectCreateInput};
  type response_createSubject_result = {
    id: string,
    name: string,
    description: option(string),
    order: option(int),
  };
  type response_createSubject = {
    result: option(response_createSubject_result),
  };

  type response = {createSubject: option(response_createSubject)};
  type variables = {input: createSubjectInput};
};

module Internal = {
  type wrapResponseRaw;
  let wrapResponseConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"createSubject":{"n":""},"createSubject_result":{"n":""},"createSubject_result_description":{"n":""},"createSubject_result_order":{"n":""}}} |json}
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
    {json| {"__root":{"createSubject":{"n":""},"createSubject_result":{"n":""},"createSubject_result_description":{"n":""},"createSubject_result_order":{"n":""}}} |json}
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
    {json| {"__root":{"input":{"r":"CreateSubjectInput"}},"CreateSubjectInput":{"inputData":{"r":"SubjectCreateInput"}},"SubjectCreateInput":{"description":{"n":""},"order":{"n":""}}} |json}
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
  let make_subjectCreateInput =
      (~description=?, ~moduleId, ~name, ~order=?, ()): subjectCreateInput => {
    description,
    moduleId,
    name,
    order,
  };

  let make_createSubjectInput = (~inputData): createSubjectInput => {
    inputData: inputData,
  };

  let makeVariables = (~input): variables => {input: input};

  let make_response_createSubject_result =
      (~id, ~name, ~description=?, ~order=?, ())
      : response_createSubject_result => {
    id,
    name,
    description,
    order,
  };

  let make_response_createSubject = (~result=?, ()): response_createSubject => {
    result: result,
  };

  let makeOptimisticResponse = (~createSubject=?, ()): response => {
    createSubject: createSubject,
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
    "type": "CreateSubjectInput!"
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
    "concreteType": "CreateSubjectPayload",
    "kind": "LinkedField",
    "name": "createSubject",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Subject",
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
    "name": "FormSubjectCreateMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutationType"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormSubjectCreateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "FormSubjectCreateMutation",
    "operationKind": "mutation",
    "text": "mutation FormSubjectCreateMutation(\n  $input: CreateSubjectInput!\n) {\n  createSubject(input: $input) {\n    result {\n      id\n      name\n      description\n      order\n    }\n  }\n}\n"
  }
};
})() |json}
];
