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
  type examCreateInput = {
    categoryId: string,
    description: string,
    name: string,
    order: option(int),
    [@bs.as "type"]
    type_: [
      | `COMPREHENSIVE
      | `MOCK
      | `PRACTICE
      | `FutureAddedValue(string)
    ],
  };
  type createExamInput = {inputData: examCreateInput};
  type response_createExam_result = {
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
  type response_createExam = {result: option(response_createExam_result)};

  type response = {createExam: option(response_createExam)};
  type variables = {input: createExamInput};
};

module Internal = {
  type wrapResponseRaw;
  let wrapResponseConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"createExam":{"n":""},"createExam_result":{"n":""},"createExam_result_type_":{"e":"enum_ExamType"},"createExam_result_order":{"n":""}}} |json}
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
    {json| {"__root":{"createExam":{"n":""},"createExam_result":{"n":""},"createExam_result_type_":{"e":"enum_ExamType"},"createExam_result_order":{"n":""}}} |json}
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
    {json| {"__root":{"input":{"r":"CreateExamInput"}},"CreateExamInput":{"inputData":{"r":"ExamCreateInput"}},"ExamCreateInput":{"order":{"n":""},"type":{"e":"enum_ExamType"}}} |json}
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
  let make_examCreateInput =
      (~categoryId, ~description, ~name, ~order=?, ~type_, ())
      : examCreateInput => {
    categoryId,
    description,
    name,
    order,
    type_,
  };

  let make_createExamInput = (~inputData): createExamInput => {
    inputData: inputData,
  };

  let makeVariables = (~input): variables => {input: input};

  let make_response_createExam_result =
      (~id, ~name, ~description, ~type_, ~order=?, ())
      : response_createExam_result => {
    id,
    name,
    description,
    type_,
    order,
  };

  let make_response_createExam = (~result=?, ()): response_createExam => {
    result: result,
  };

  let makeOptimisticResponse = (~createExam=?, ()): response => {
    createExam: createExam,
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
    "type": "CreateExamInput!"
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
    "concreteType": "CreateExamPayload",
    "kind": "LinkedField",
    "name": "createExam",
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
    "name": "FormExamCreateMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutationType"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormExamCreateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "FormExamCreateMutation",
    "operationKind": "mutation",
    "text": "mutation FormExamCreateMutation(\n  $input: CreateExamInput!\n) {\n  createExam(input: $input) {\n    result {\n      id\n      name\n      description\n      type_: type\n      order\n    }\n  }\n}\n"
  }
};
})() |json}
];
