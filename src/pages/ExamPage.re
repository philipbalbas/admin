open Utils;
open ReasonUrql;
open Hooks;
open Queries;

type columns = array(Ant.Table.column);

type data = {
  id: string,
  question: string,
  rationale: string,
};

let testData: array(data) = [|
  {id: "1", question: "Mike", rationale: "10 Downing Street"},
  {id: "2", question: "John", rationale: "10 Downing Street"},
|];

let columnHeads: array(Ant.Table.column) = [|
  {
    title: Some("Question"),
    dataIndex: Some("question"),
    key: Some("question"),
  },
  {
    title: Some("Rationale"),
    dataIndex: Some("rationale"),
    key: Some("rationale"),
  },
|];

[@react.component]
let make = (~id) => {
  let request = GetExam.make(~id, ());
  let ({response}, _) = useQuery(~request, ());

  switch (response) {
  | Fetching => "Fetching"->str
  | NotFound => "No Data"->str
  | Error(_e) => "Error"->str
  | Data(data) =>
    switch (data##getExam) {
    | None => "No Exams. Create one First"->str
    | Some(data) =>
      let examType = stringifyExamType(data.type_);

      Js.log(data);
      <>
        <div className="text-4xl font-semibold text-indigo-800">
          data.name->str
        </div>
        <div className="text-xl text-indigo-800"> examType->str </div>
        <div className="mt-6">
          <div className="flex justify-between items-center">
            <button className="p-2 bg-indigo-800 text-blue-100 rounded-lg">
              "+ Add Card"->str
            </button>
          </div>
          <Ant.Table dataSource=testData columns=columnHeads />
        </div>
      </>;
    }
  };
};