open ReasonUrql;
open Hooks;
open Queries;
open Utils;

[@react.component]
let make = (~query) => {
  let request = query();
  let ({response}, _) = useQuery(~request, ());

  switch (response) {
  | Fetching => "Fetching"->str
  | NotFound => "No Data"->str
  | Error(_e) => "Error"->str
  | Data(data) =>
    switch (data##listExams) {
    | None => "No items"->str
    | Some(exams) =>
      let itemsList =
        exams
        |> Array.map(exam => {
             let examType =
               switch (exam.type_) {
               | `PRACTICE => "Practice"
               | `COMPREHENSIVE => "Comprehensive"
               | `MOCK => "Mock"
               };
             let examId = exam.id;
             <>
               <MaterialUi.TableRow key=examId>
                 <MaterialUi.TableCell>
                   <button>
                     <div
                       className="text-indigo-900 cursor-pointer hover:text-purple-600">
                       examId->str
                     </div>
                   </button>
                 </MaterialUi.TableCell>
                 <MaterialUi.TableCell>
                   <button onClick={_ => push({j|/exams/$examId|j})}>
                     <div
                       className="text-indigo-900 cursor-pointer hover:text-purple-600">
                       exam.name->str
                     </div>
                   </button>
                 </MaterialUi.TableCell>
                 <MaterialUi.TableCell> examType->str </MaterialUi.TableCell>
               </MaterialUi.TableRow>
             </>;
           })
        |> React.array;
      <>
        <div className="flex justify-between items-start">
          <p className="font-bold text-4xl mb-8"> "Exams"->str </p>
        </div>
        <MaterialUi.Table>
          <MaterialUi.TableHead>
            <MaterialUi.TableRow>
              <MaterialUi.TableCell> "ID"->str </MaterialUi.TableCell>
              <MaterialUi.TableCell> "Name"->str </MaterialUi.TableCell>
              <MaterialUi.TableCell> "Type"->str </MaterialUi.TableCell>
            </MaterialUi.TableRow>
          </MaterialUi.TableHead>
          <MaterialUi.TableBody> itemsList </MaterialUi.TableBody>
        </MaterialUi.Table>
      </>;
    }
  };
};