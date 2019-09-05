module ListModules = [%graphql
  {|
    query modules {
      modules {
        name
        id
        description
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

module GetTopic = [%graphql
  {|
    query topic($id: ID!) {
      topic: topic(id: $id) {
        id
        name
        description
        pages {
          id
          name
        }
      }
    }
  |}
];
module GetPage = [%graphql
  {|
    query page($id: ID!) {
      page: page(id: $id) {
        id
        name
        description
        content
        notes {
          id
          name
        }
      }
    }
  |}
];

module GetNote = [%graphql
  {|
    query note($id: ID!) {
      note: note(id: $id) {
        id
        name
        description
        content
        pageId
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
        description
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
        description
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
        description
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
        description
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