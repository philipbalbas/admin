open ReasonUrql;
open Hooks;
open Queries;

let str = ReasonReact.string;

[@react.component]
let make = (~id) => {
  let request = GetModule.make(~id, ());
  let ({response}, _) = useQuery(~request, ());

  switch (response) {
  | Fetching => "Fetching"->str
  | NotFound => "No Data"->str
  | Error(_e) => "Error"->str
  | Data(data) =>
    switch (data##module_) {
    | None => "No Item"->str
    | Some(module_) =>
      switch (module_##name, module_##description, module_##subjects) {
      | (Some(name), Some(description), Some(subjects)) =>
        let subjectsList =
          subjects
          |> Array.map(subject =>
               switch (subject) {
               | Some(subject) =>
                 switch (subject##id, subject##name) {
                 | (Some(id), Some(name)) =>
                   <Link to_={j|subjects/$id|j} key=id>
                     <div
                       className="text-indigo-900 cursor-pointer hover:text-purple-600">
                       name->str
                     </div>
                   </Link>
                 | _ => React.null
                 }
               | None => "No Subject"->str
               }
             )
          |> React.array;

        <div>
          <div className="text-4xl font-semibold text-indigo-800">
            name->str
          </div>
          <div className="text-lg font-semibold text-indigo-600">
            description->str
          </div>
          <div className="mt-6">
            <div className="text-lg"> "Subjects:"->str </div>
            <div> subjectsList </div>
          </div>
        </div>;
      | _ => React.null
      }
    }
  };
};