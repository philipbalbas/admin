module ListModules = [%graphql
  {|
    query modules {
      modules {
        name
        id
      }
    }
  |}
];

module ListSubjects = [%graphql
  {|
    query subjects {
      subjects {
        name
        id
      }
    }
  |}
];

module ListTopics = [%graphql
  {|
    query topics {
      topics {
        name
        id
      }
    }
  |}
];

type entity =
  | Module
  | Subject
  | Topic
  | Page
  | Note;