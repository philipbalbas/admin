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
                   <Link to_=id key=id> name->str </Link>
                 | _ => React.null
                 }
               | None => "No Subject"->str
               }
             )
          |> React.array;

        <div>
          <div> name->str </div>
          <div> description->str </div>
          <div> subjectsList </div>
        </div>;
      | _ => React.null
      }
    }
  };
};