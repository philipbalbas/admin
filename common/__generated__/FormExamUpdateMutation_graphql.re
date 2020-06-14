/* @generated */

type enum_ExamType = [
  | `COMPREHENSIVE
  | `MOCK
  | `PRACTICE
  | `FutureAddedValue(string)
];

let unwrap_enum_ExamType: string => enum_ExamType =
  fun
  | "COMPREHENSIVE" => `COMPREHENSIVE
  | "MOCK" => `MOCK
  | "PRACTICE" => `PRACTICE
  | v => `FutureAddedValue(v);

let wrap_enum_ExamType: enum_ExamType => string =
  fun
  | `COMPREHENSIVE => "COMPREHENSIVE"
  | `MOCK => "MOCK"
  | `PRACTICE => "PRACTICE"
  | `FutureAddedValue(v) => v;

module Types = {
  type examUpdateInput = {
    description: option(string),
    id: string,
    name: option(string),
    order: option(int),
    [@bs.as "type"]
    type_:
      option(
        [ | `COMPREHENSIVE | `MOCK | `PRACTICE | `FutureAddedValue(string)],
      ),
  };
  type updateExamInput = {inputData: examUpdateInput};
  type response_updateExam_result = {
    id: string,
    name: string,
    description: string,
    type_: [
      | `COMPREHENSIVE
      | `MOCK
      | `PRACTICE
      | `FutureAddedValue(string)
    ],
    order: option(int),
  };
  type response_updateExam = {result: option(response_updateExam_result)};

  type response = {updateExam: option(response_updateExam)};
  type variables = {input: updateExamInput};
};

module Internal = {
  type wrapResponseRaw;
  let wrapResponseConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"updateExam":{"n":""},"updateExam_result":{"n":""},"updateExam_result_type_":{"e":"enum_ExamType"},"updateExam_result_order":{"n":""}}} |json}
  ];
  let wrapResponseConverterMap = {"enum_ExamType": wrap_enum_ExamType};
  let convertWrapResponse = v =>
    v
    ->ReasonRelay._convertObj(
        wrapResponseConverter,
        wrapResponseConverterMap,
        Js.null,
      );

  type responseRaw;
  let responseConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"updateExam":{"n":""},"updateExam_result":{"n":""},"updateExam_result_type_":{"e":"enum_ExamType"},"updateExam_result_order":{"n":""}}} |json}
  ];
  let responseConverterMap = {"enum_ExamType": unwrap_enum_ExamType};
  let convertResponse = v =>
    v
    ->ReasonRelay._convertObj(
        responseConverter,
        responseConverterMap,
        Js.undefined,
      );

  let variablesConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"input":{"r":"UpdateExamInput"}},"ExamUpdateInput":{"description":{"n":""},"name":{"n":""},"order":{"n":""},"type":{"n":"","e":"enum_ExamType"}},"UpdateExamInput":{"inputData":{"r":"ExamUpdateInput"}}} |json}
  ];
  let variablesConverterMap = {"enum_ExamType": wrap_enum_ExamType};
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
  let make_examUpdateInput =
      (~description=?, ~id, ~name=?, ~order=?, ~type_=?, ()): examUpdateInput => {
    description,
    id,
    name,
    order,
    type_,
  };

  let make_updateExamInput = (~inputData): updateExamInput => {
    inputData: inputData,
  };

  let makeVariables = (~input): variables => {input: input};

  let make_response_updateExam_result =
      (~id, ~name, ~description, ~type_, ~order=?, ())
      : response_updateExam_result => {
    id,
    name,
    description,
    type_,
    order,
  };

  let make_response_updateExam = (~result=?, ()): response_updateExam => {
    result: result,
  };

  let makeOptimisticResponse = (~updateExam=?, ()): response => {
    updateExam: updateExam,
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
    "type": "UpdateExamInput!"
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
    "concreteType": "UpdateExamPayload",
    "kind": "LinkedField",
    "name": "updateExam",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Exam",
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
    "name": "FormExamUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutationType"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormExamUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "FormExamUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation FormExamUpdateMutation(\n  $input: UpdateExamInput!\n) {\n  updateExam(input: $input) {\n    result {\n      id\n      name\n      description\n      type_: type\n      order\n    }\n  }\n}\n"
  }
};
})() |json}
];
