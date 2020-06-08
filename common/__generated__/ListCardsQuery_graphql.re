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

module Types = {
  type cardFilter = {
    categoryId: option(string),
    examId: option(string),
    topicId: option(string),
  };
  type response_listCards_exams = {
    id: string,
    name: string,
  };
  type response_listCards_topic = {name: string};
  type response_listCards_answers = {
    content: string,
    id: string,
  };
  type response_listCards_choices = {
    content: string,
    id: string,
  };
  type response_listCards = {
    id: string,
    question: string,
    type_: [ | `MULTIPLE | `SINGLE | `FutureAddedValue(string)],
    rationale: option(string),
    choices: option(array(response_listCards_choices)),
    answers: option(array(response_listCards_answers)),
    topic: response_listCards_topic,
    exams: option(array(response_listCards_exams)),
  };

  type response = {listCards: option(array(response_listCards))};
  type refetchVariables = {filter: option(cardFilter)};
  let makeRefetchVariables = (~filter=?, ()): refetchVariables => {
    filter: filter,
  };
  type variables = {filter: option(cardFilter)};
};

module Internal = {
  type responseRaw;
  let responseConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"listCards":{"n":""},"listCards_type_":{"e":"enum_CardType"},"listCards_rationale":{"n":""},"listCards_choices":{"n":""},"listCards_answers":{"n":""},"listCards_exams":{"n":""}}} |json}
  ];
  let responseConverterMap = {"enum_CardType": unwrap_enum_CardType};
  let convertResponse = v =>
    v
    ->ReasonRelay._convertObj(
        responseConverter,
        responseConverterMap,
        Js.undefined,
      );

  let variablesConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"filter":{"n":"","r":"CardFilter"}},"CardFilter":{"categoryId":{"n":""},"examId":{"n":""},"topicId":{"n":""}}} |json}
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
  let make_cardFilter = (~categoryId=?, ~examId=?, ~topicId=?, ()): cardFilter => {
    categoryId,
    examId,
    topicId,
  };

  let makeVariables = (~filter=?, ()): variables => {filter: filter};
};

type operationType = ReasonRelay.queryNode;

let node: operationType = [%raw
  {json| (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "filter",
    "type": "CardFilter"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "filter",
    "variableName": "filter"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "question",
  "storageKey": null
},
v4 = {
  "alias": "type_",
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rationale",
  "storageKey": null
},
v6 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "content",
    "storageKey": null
  },
  (v2/*: any*/)
],
v7 = {
  "alias": null,
  "args": null,
  "concreteType": "Choice",
  "kind": "LinkedField",
  "name": "choices",
  "plural": true,
  "selections": (v6/*: any*/),
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "Choice",
  "kind": "LinkedField",
  "name": "answers",
  "plural": true,
  "selections": (v6/*: any*/),
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "concreteType": "Exam",
  "kind": "LinkedField",
  "name": "exams",
  "plural": true,
  "selections": [
    (v2/*: any*/),
    (v9/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ListCardsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Card",
        "kind": "LinkedField",
        "name": "listCards",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Topic",
            "kind": "LinkedField",
            "name": "topic",
            "plural": false,
            "selections": [
              (v9/*: any*/)
            ],
            "storageKey": null
          },
          (v10/*: any*/)
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
    "name": "ListCardsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Card",
        "kind": "LinkedField",
        "name": "listCards",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Topic",
            "kind": "LinkedField",
            "name": "topic",
            "plural": false,
            "selections": [
              (v9/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v10/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ListCardsQuery",
    "operationKind": "query",
    "text": "query ListCardsQuery(\n  $filter: CardFilter\n) {\n  listCards(filter: $filter) {\n    id\n    question\n    type_: type\n    rationale\n    choices {\n      content\n      id\n    }\n    answers {\n      content\n      id\n    }\n    topic {\n      name\n      id\n    }\n    exams {\n      id\n      name\n    }\n  }\n}\n"
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
