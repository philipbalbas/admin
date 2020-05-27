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

  switch (queryData.getExam) {
  | Some(exam) =>
    let cardsList =
      switch (exam.cards) {
      | Some(cards) =>
        <Ant.List
          dataSource=cards
          renderItem={card => {
            let answers =
              Belt.(
                Option.mapWithDefault(card.answers, [||], arr => arr)
                ->Array.map(answer => answer.id)
              );

            <Ant.List.Item key={card.id}>
              <Ant.Card title={card.question}>
                {switch (card.choices) {
                 | Some(choices) =>
                   <Ant.List
                     dataSource=choices
                     renderItem={choice => {
                       let isAnswer = Js.Array.includes(choice.id, answers);

                       let className = isAnswer ? "bg-green-400" : "";

                       <Ant.List.Item key={choice.id} className>
                         <div className="text-center w-full">
                           choice.content->React.string
                         </div>
                       </Ant.List.Item>;
                     }}
                   />
                 | _ => React.null
                 }}
              </Ant.Card>
            </Ant.List.Item>;
          }}
        />

      | None => [|React.null|]->React.array
      };
    <div>
      <div className="font-extrabold text-2xl"> exam.name->React.string </div>
      cardsList
    </div>;
  | _ => React.null
  };
};