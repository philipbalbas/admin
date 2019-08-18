let str = ReasonReact.string;
open Queries;

[@react.component]
let make = (~name, ~id, ~entity) => {
  let entityString =
    switch (entity) {
    | Module => "modules"
    | Subject => "subjects"
    | Topic => "topics"
    | Page => "pages"
    | Note => "notes"
    };

  let link = {j|/$entityString/$id|j};
  <Link to_=link>
    <div
      className="cursor-pointer text-indigo-900 hover:text-indigo-500 text-lg mb-3">
      name->str
    </div>
  </Link>;
};