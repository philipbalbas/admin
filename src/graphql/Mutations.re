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