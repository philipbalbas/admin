// module UpdateNote = [%graphql
//   {|
//     mutation updateNote($input: UpdateNoteInput!) {
//       updateNote(input: $input) {
//         id
//         content
//       }
//     }
//   |}
// ];

module CreateSubject = [%graphql
  {|
    mutation createSubject($name: String!, $moduleId: ID!, $description: String) {
      createSubject(input: {
        name: $name
        moduleId: $moduleId
        description: $description
      }) {
        id
        name
        description
      }
    }
  |}
];

module CreateTopic = [%graphql
  {|
    mutation createTopic($name: String!, $subjectId: ID!, $description: String) {
      createTopic(input: {
        name: $name
        subjectId: $subjectId
        description: $description
      }) {
        id
        name
        description
      }
    }
  |}
];

module CreatePage = [%graphql
  {|
    mutation createPage($name: String!, $topicId: ID!, $description: String, $content: String) {
      createPage(input: {
        name: $name
        topicId: $topicId
        description: $description
        content: $content
      }) {
        id
        name
        description
        content
      }
    }
  |}
];

module UpdateNote = [%graphql
  {|
    mutation updateNote($id: ID!, $content: String, $pageId: ID!) {
      updateNote(input: {
        id: $id
        content: $content
        pageId: $pageId
      }) {
        id
        content
      }
    }
  |}
];

let updateNote = {|
    mutation updateNote($id: ID!, $name: String, $content: String, $pageId: ID!) {
      updateNote(input: {
        id: $id
        content: $content
        pageId: $pageId
        name: $name
      }) {
        id
        content
      }
    }
  |};