open Ant;
open React;
open Next;

module Query = [%relay.query
  {|
  query ListCategoryQuery {
    listCategories {
      id
      name
      description
    }
  }
|}
];

[@react.component]
let make = () => {
  let queryData = Query.use(~variables=(), ());

  let content =
    switch (queryData.listCategories) {
    | Some(categories) =>
      categories
      |> Array.mapi(
           (i, cat: ListCategoryQuery_graphql.Types.response_listCategories) => {
           let id = cat.id;

           <Card
             key={i->string_of_int}
             title={
               <Link href="/[categoryId]" _as={j|/$id|j}>
                 <a className="cursor-pointer"> cat.name->string </a>
               </Link>
             }
             extra={
               <Link href="/[categoryId]/edit" _as={j|/$id/edit|j}>
                 <a className="cursor-pointer"> <Icons.SettingFilled /> </a>
               </Link>
             }
             hoverable=true>
             <Link href="/[categoryId]" _as={j|/$id|j}>
               <a className="cursor-pointer"> cat.description->string </a>
             </Link>
           </Card>;
         })
      |> array
    | _ => <Card> "Nada"->string </Card>
    };

  <div className="grid grid-cols-5 gap-4"> content </div>;
};