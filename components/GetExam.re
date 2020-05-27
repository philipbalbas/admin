module Query = [%relay.query
  {|
    query GetExamQuery($id: ID!) {
      getExam(id: $id) {
        id
        name
        description
        cards {
          id
          question
          type_: type
          rationale
          choices {
            content
            id
          }
          answers {
            content
            id
          }
        }
      }
    }
  |}
];

[@react.component]
let make = (~id="") => {
  let queryData = Query.use(~variables={id: id}, ());
  Js.log(queryData);
  <div> "Exam Page"->React.string </div>;
};