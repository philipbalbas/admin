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
  <div> <Link to_=link> name->str </Link> </div>;
};