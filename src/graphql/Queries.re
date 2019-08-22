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

module GetModule = [%graphql
  {|
    query module($id: ID!) {
      module_: module(id: $id) {
        id
        name
        description
        subjects {
          id
          name
        }
      }
    }
  |}
];

module GetSubject = [%graphql
  {|
    query subject($id: ID!) {
      subject: subject(id: $id) {
        id
        name
        description
        topics {
          id
          name
        }
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

module ListPages = [%graphql
  {|
    query pages {
      pages {
        name
        id
      }
    }
  |}
];

module ListNotes = [%graphql
  {|
    query notes {
      notes {
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