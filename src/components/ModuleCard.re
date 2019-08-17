let str = ReasonReact.string;
open Queries;

[@react.component]
let make = (~name, ~id, ~entity) => {
  let entityString =
    switch (entity) {
    | Module => "module"
    | Subject => "subject"
    | Topic => "topic"
    | Page => "page"
    | Note => "note"
    };

  let link = {j|/$entityString/$id|j};
  <div> <Link to_=link> name->str </Link> </div>;
};