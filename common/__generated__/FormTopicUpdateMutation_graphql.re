/* @generated */

module Types = {
  type topicUpdateInput = {
    description: option(string),
    id: string,
    name: option(string),
    order: option(int),
    subjectId: option(string),
  };
  type updateTopicInput = {inputData: topicUpdateInput};
  type response_updateTopic_result = {
    id: string,
    name: string,
    description: option(string),
    order: option(int),
  };
  type response_updateTopic = {result: option(response_updateTopic_result)};

  type response = {updateTopic: option(response_updateTopic)};
  type variables = {input: updateTopicInput};
};

module Internal = {
  type wrapResponseRaw;
  let wrapResponseConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"updateTopic":{"n":""},"updateTopic_result":{"n":""},"updateTopic_result_description":{"n":""},"updateTopic_result_order":{"n":""}}} |json}
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
    {json| {"__root":{"updateTopic":{"n":""},"updateTopic_result":{"n":""},"updateTopic_result_description":{"n":""},"updateTopic_result_order":{"n":""}}} |json}
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
    {json| {"__root":{"input":{"r":"UpdateTopicInput"}},"TopicUpdateInput":{"description":{"n":""},"name":{"n":""},"order":{"n":""},"subjectId":{"n":""}},"UpdateTopicInput":{"inputData":{"r":"TopicUpdateInput"}}} |json}
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
  let make_topicUpdateInput =
      (~description=?, ~id, ~name=?, ~order=?, ~subjectId=?, ())
      : topicUpdateInput => {
    description,
    id,
    name,
    order,
    subjectId,
  };

  let make_updateTopicInput = (~inputData): updateTopicInput => {
    inputData: inputData,
  };

  let makeVariables = (~input): variables => {input: input};

  let make_response_updateTopic_result =
      (~id, ~name, ~description=?, ~order=?, ()): response_updateTopic_result => {
    id,
    name,
    description,
    order,
  };

  let make_response_updateTopic = (~result=?, ()): response_updateTopic => {
    result: result,
  };

  let makeOptimisticResponse = (~updateTopic=?, ()): response => {
    updateTopic: updateTopic,
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
    "type": "UpdateTopicInput!"
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
    "concreteType": "UpdateTopicPayload",
    "kind": "LinkedField",
    "name": "updateTopic",
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
    "name": "FormTopicUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutationType"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormTopicUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "FormTopicUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation FormTopicUpdateMutation(\n  $input: UpdateTopicInput!\n) {\n  updateTopic(input: $input) {\n    result {\n      id\n      name\n      description\n      order\n    }\n  }\n}\n"
  }
};
})() |json}
];
