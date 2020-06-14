/* @generated */

module Types = {
  type subjectUpdateInput = {
    description: option(string),
    id: string,
    moduleId: option(string),
    name: option(string),
    order: option(int),
  };
  type updateSubjectInput = {inputData: subjectUpdateInput};
  type response_updateSubject_result = {
    id: string,
    name: string,
    description: option(string),
    order: option(int),
  };
  type response_updateSubject = {
    result: option(response_updateSubject_result),
  };

  type response = {updateSubject: option(response_updateSubject)};
  type variables = {input: updateSubjectInput};
};

module Internal = {
  type wrapResponseRaw;
  let wrapResponseConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"updateSubject":{"n":""},"updateSubject_result":{"n":""},"updateSubject_result_description":{"n":""},"updateSubject_result_order":{"n":""}}} |json}
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
    {json| {"__root":{"updateSubject":{"n":""},"updateSubject_result":{"n":""},"updateSubject_result_description":{"n":""},"updateSubject_result_order":{"n":""}}} |json}
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
    {json| {"__root":{"input":{"r":"UpdateSubjectInput"}},"SubjectUpdateInput":{"description":{"n":""},"moduleId":{"n":""},"name":{"n":""},"order":{"n":""}},"UpdateSubjectInput":{"inputData":{"r":"SubjectUpdateInput"}}} |json}
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
  let make_subjectUpdateInput =
      (~description=?, ~id, ~moduleId=?, ~name=?, ~order=?, ())
      : subjectUpdateInput => {
    description,
    id,
    moduleId,
    name,
    order,
  };

  let make_updateSubjectInput = (~inputData): updateSubjectInput => {
    inputData: inputData,
  };

  let makeVariables = (~input): variables => {input: input};

  let make_response_updateSubject_result =
      (~id, ~name, ~description=?, ~order=?, ())
      : response_updateSubject_result => {
    id,
    name,
    description,
    order,
  };

  let make_response_updateSubject = (~result=?, ()): response_updateSubject => {
    result: result,
  };

  let makeOptimisticResponse = (~updateSubject=?, ()): response => {
    updateSubject: updateSubject,
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
    "type": "UpdateSubjectInput!"
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
    "concreteType": "UpdateSubjectPayload",
    "kind": "LinkedField",
    "name": "updateSubject",
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
    "name": "FormSubjectUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutationType"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormSubjectUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "FormSubjectUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation FormSubjectUpdateMutation(\n  $input: UpdateSubjectInput!\n) {\n  updateSubject(input: $input) {\n    result {\n      id\n      name\n      description\n      order\n    }\n  }\n}\n"
  }
};
})() |json}
];
