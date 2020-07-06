/* @generated */

type enum_CardType = [ | `MULTIPLE | `SINGLE | `FutureAddedValue(string)];

let unwrap_enum_CardType: string => enum_CardType =
  fun
  | "MULTIPLE" => `MULTIPLE
  | "SINGLE" => `SINGLE
  | v => `FutureAddedValue(v);

let wrap_enum_CardType: enum_CardType => string =
  fun
  | `MULTIPLE => "MULTIPLE"
  | `SINGLE => "SINGLE"
  | `FutureAddedValue(v) => v;

type enum_CardLevel = [
  | `ANALYSE
  | `APPLY
  | `CREATE
  | `EVALUATE
  | `REMEMBER
  | `UNDERSTAND
  | `FutureAddedValue(string)
];

let unwrap_enum_CardLevel: string => enum_CardLevel =
  fun
  | "ANALYSE" => `ANALYSE
  | "APPLY" => `APPLY
  | "CREATE" => `CREATE
  | "EVALUATE" => `EVALUATE
  | "REMEMBER" => `REMEMBER
  | "UNDERSTAND" => `UNDERSTAND
  | v => `FutureAddedValue(v);

let wrap_enum_CardLevel: enum_CardLevel => string =
  fun
  | `ANALYSE => "ANALYSE"
  | `APPLY => "APPLY"
  | `CREATE => "CREATE"
  | `EVALUATE => "EVALUATE"
  | `REMEMBER => "REMEMBER"
  | `UNDERSTAND => "UNDERSTAND"
  | `FutureAddedValue(v) => v;

module Types = {
  type response_getCard_topic = {
    id: string,
    name: string,
  };
  type response_getCard_exams = {
    name: string,
    id: string,
  };
  type response_getCard_answers = {
    content: string,
    id: string,
  };
  type response_getCard_choices = {
    content: string,
    id: string,
  };
  type response_getCard = {
    question: string,
    rationale: option(string),
    choices: option(array(response_getCard_choices)),
    answers: option(array(response_getCard_answers)),
    exams: option(array(response_getCard_exams)),
    topic: response_getCard_topic,
    level: [
      | `ANALYSE
      | `APPLY
      | `CREATE
      | `EVALUATE
      | `REMEMBER
      | `UNDERSTAND
      | `FutureAddedValue(string)
    ],
    type_: [ | `MULTIPLE | `SINGLE | `FutureAddedValue(string)],
  };

  type response = {getCard: option(response_getCard)};
  type refetchVariables = {id: option(string)};
  let makeRefetchVariables = (~id=?, ()): refetchVariables => {id: id};
  type variables = {id: string};
};

module Internal = {
  type responseRaw;
  let responseConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"getCard":{"n":""},"getCard_rationale":{"n":""},"getCard_choices":{"n":""},"getCard_answers":{"n":""},"getCard_exams":{"n":""},"getCard_level":{"e":"enum_CardLevel"},"getCard_type_":{"e":"enum_CardType"}}} |json}
  ];
  let responseConverterMap = {
    "enum_CardLevel": unwrap_enum_CardLevel,
    "enum_CardType": unwrap_enum_CardType,
  };
  let convertResponse = v =>
    v
    ->ReasonRelay._convertObj(
        responseConverter,
        responseConverterMap,
        Js.undefined,
      );

  let variablesConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {} |json}
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

type preloadToken;

module Utils = {
  open Types;
  let makeVariables = (~id): variables => {id: id};
};

type operationType = ReasonRelay.queryNode;

let node: operationType = [%raw
  {json| (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "question",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rationale",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "content",
    "storageKey": null
  },
  (v4/*: any*/)
],
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "Choice",
  "kind": "LinkedField",
  "name": "choices",
  "plural": true,
  "selections": (v5/*: any*/),
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "concreteType": "Choice",
  "kind": "LinkedField",
  "name": "answers",
  "plural": true,
  "selections": (v5/*: any*/),
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "concreteType": "Exam",
  "kind": "LinkedField",
  "name": "exams",
  "plural": true,
  "selections": [
    (v8/*: any*/),
    (v4/*: any*/)
  ],
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "concreteType": "Topic",
  "kind": "LinkedField",
  "name": "topic",
  "plural": false,
  "selections": [
    (v4/*: any*/),
    (v8/*: any*/)
  ],
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "level",
  "storageKey": null
},
v12 = {
  "alias": "type_",
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FormCardQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Card",
        "kind": "LinkedField",
        "name": "getCard",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          (v12/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "RootQueryType"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormCardQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Card",
        "kind": "LinkedField",
        "name": "getCard",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          (v12/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "FormCardQuery",
    "operationKind": "query",
    "text": "query FormCardQuery(\n  $id: ID!\n) {\n  getCard(id: $id) {\n    question\n    rationale\n    choices {\n      content\n      id\n    }\n    answers {\n      content\n      id\n    }\n    exams {\n      name\n      id\n    }\n    topic {\n      id\n      name\n    }\n    level\n    type_: type\n    id\n  }\n}\n"
  }
};
})() |json}
];

include ReasonRelay.MakePreloadQuery({
  type variables = Types.variables;
  type queryPreloadToken = preloadToken;
  let query = node;
  let convertVariables = Internal.convertVariables;
});
