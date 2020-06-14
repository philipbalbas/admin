/* @generated */

module Types = {
  type examTopicsUpsertInput = {
    examId: string,
    topicIds: array(string),
  };
  type upsertExamTopicsInput = {inputData: examTopicsUpsertInput};
  type response_upsertExamTopics_result = {
    id: string,
    name: string,
  };
  type response_upsertExamTopics = {
    result: option(response_upsertExamTopics_result),
  };

  type response = {upsertExamTopics: option(response_upsertExamTopics)};
  type variables = {input: upsertExamTopicsInput};
};

module Internal = {
  type wrapResponseRaw;
  let wrapResponseConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"upsertExamTopics":{"n":""},"upsertExamTopics_result":{"n":""}}} |json}
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
    {json| {"__root":{"upsertExamTopics":{"n":""},"upsertExamTopics_result":{"n":""}}} |json}
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
    {json| {"__root":{"input":{"r":"UpsertExamTopicsInput"}},"ExamTopicsUpsertInput":{},"UpsertExamTopicsInput":{"inputData":{"r":"ExamTopicsUpsertInput"}}} |json}
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
  let make_examTopicsUpsertInput = (~examId, ~topicIds): examTopicsUpsertInput => {
    examId,
    topicIds,
  };

  let make_upsertExamTopicsInput = (~inputData): upsertExamTopicsInput => {
    inputData: inputData,
  };

  let makeVariables = (~input): variables => {input: input};

  let make_response_upsertExamTopics_result =
      (~id, ~name): response_upsertExamTopics_result => {
    id,
    name,
  };

  let make_response_upsertExamTopics =
      (~result=?, ()): response_upsertExamTopics => {
    result: result,
  };

  let makeOptimisticResponse = (~upsertExamTopics=?, ()): response => {
    upsertExamTopics: upsertExamTopics,
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
    "type": "UpsertExamTopicsInput!"
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
    "concreteType": "UpsertExamTopicsPayload",
    "kind": "LinkedField",
    "name": "upsertExamTopics",
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
    "name": "FormExamUpsertTopicsMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutationType"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormExamUpsertTopicsMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "FormExamUpsertTopicsMutation",
    "operationKind": "mutation",
    "text": "mutation FormExamUpsertTopicsMutation(\n  $input: UpsertExamTopicsInput!\n) {\n  upsertExamTopics(input: $input) {\n    result {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})() |json}
];
