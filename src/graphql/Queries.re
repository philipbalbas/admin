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
          description
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
        moduleId
        topics {
          id
          name
          description
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
        subjectId
        pages {
          id
          name
          description
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
        topicId
        notes {
          id
          name
          description
        }
      }
    }
  |}
];

module GetNote = [%graphql
  {|
    query note($id: ID!) {
      note(id: $id) {
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
        moduleId
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
        content
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

type card = {
  id: string,
  question: string,
  rationale: option(string),
  examId: option(string),
  topicId: option(string),
};

type cards = card;

type exam = {
  name: string,
  id: string,
  categoryId: string,
  type_: [ | `COMPREHENSIVE | `MOCK | `PRACTICE],
  cards: option(array(option(card))),
};

let stringifyExamType = type_ =>
  switch (type_) {
  | `COMPREHENSIVE => "Comprehensive"
  | `MOCK => "Mock"
  | `PRACTICE => "Practice"
  };

type listExams = exam;
type getExam = exam;

module ListExams = [%graphql
  {|
   query listExams {
     listExams @bsRecord {
       id
       categoryId
       name
       type_ : type
      cards @bsRecord {
        id
        question
        rationale
         examId
         topicId
        }
     }
   }
 |}
];

module GetExam = [%graphql
  {|
  query getExam($id: ID!) {
    getExam(id: $id) @bsRecord {
      id
      categoryId
      name
      type_ : type
      cards @bsRecord {
        id
        question
        rationale
         examId
        topicId
      }
    }
  }
  |}
];

type category = {
  id: string,
  description: string,
  name: string,
};

type listCategories = category;

module ListCategories = [%graphql
  {|
  query listCategories {
    listCategories @bsRecord {
      id
      description
      name
    }
  }
  |}
];

type entity =
  | Module
  | Subject
  | Topic
  | Page
  | Note
  | Exam;