/* @generated */

module Types = {
  type topicCreateInput = {
    content: option(string),
    description: option(string),
    name: string,
    order: option(int),
    subjectId: string,
  };
  type createTopicInput = {inputData: topicCreateInput};
  type response_createTopic_result = {
    id: string,
    name: string,
    description: option(string),
    order: option(int),
  };
  type response_createTopic = {result: option(response_createTopic_result)};

  type response = {createTopic: option(response_createTopic)};
  type variables = {input: createTopicInput};
};

module Internal = {
  type wrapResponseRaw;
  let wrapResponseConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"createTopic":{"n":""},"createTopic_result":{"n":""},"createTopic_result_description":{"n":""},"createTopic_result_order":{"n":""}}} |json}
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
    {json| {"__root":{"createTopic":{"n":""},"createTopic_result":{"n":""},"createTopic_result_description":{"n":""},"createTopic_result_order":{"n":""}}} |json}
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
    {json| {"__root":{"input":{"r":"CreateTopicInput"}},"CreateTopicInput":{"inputData":{"r":"TopicCreateInput"}},"TopicCreateInput":{"content":{"n":""},"description":{"n":""},"order":{"n":""}}} |json}
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
  let make_topicCreateInput =
      (~content=?, ~description=?, ~name, ~order=?, ~subjectId, ())
      : topicCreateInput => {
    content,
    description,
    name,
    order,
    subjectId,
  };

  let make_createTopicInput = (~inputData): createTopicInput => {
    inputData: inputData,
  };

  let makeVariables = (~input): variables => {input: input};

  let make_response_createTopic_result =
      (~id, ~name, ~description=?, ~order=?, ()): response_createTopic_result => {
    id,
    name,
    description,
    order,
  };

  let make_response_createTopic = (~result=?, ()): response_createTopic => {
    result: result,
  };

  let makeOptimisticResponse = (~createTopic=?, ()): response => {
    createTopic: createTopic,
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
    "type": "CreateTopicInput!"
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
    "concreteType": "CreateTopicPayload",
    "kind": "LinkedField",
    "name": "createTopic",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Topic",
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
    "name": "FormTopicCreateMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutationType"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormTopicCreateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "FormTopicCreateMutation",
    "operationKind": "mutation",
    "text": "mutation FormTopicCreateMutation(\n  $input: CreateTopicInput!\n) {\n  createTopic(input: $input) {\n    result {\n      id\n      name\n      description\n      order\n    }\n  }\n}\n"
  }
};
})() |json}
];
