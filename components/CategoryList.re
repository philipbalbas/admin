open Ant;

module Query = [%relay.query
  {|
  query CategoryListQuery {
    listCategories {
      name
      id
    }
  }
|}
];

[@react.component]
let make = () => {
  open! React;
  open! Next;
  let queryData = Query.use(~variables=(), ());
  let (entity, dispatch) = EntityProvider.useEntity();

  let content =
    switch (queryData.listCategories) {
    | Some(categories) =>
      categories
      |> Array.mapi(
           (i, cat: CategoryListQuery_graphql.Types.response_listCategories) => {
           let id = cat.id;
           <Card
             title={cat.name}
             hoverable=true
             key={i->string_of_int}
             extra={
               <Link href="/[categoryId]" _as={j|/$id|j}>
                 <a
                   className="cursor-pointer"
                   onClick={_ =>
                     dispatch(UpdateEntity({...entity, categoryId: id}))
                   }>
                   "Select"->string
                 </a>
               </Link>
             }>
             cat.name->string
           </Card>;
         })
      |> array
    | _ => <Card> "Nada"->string </Card>
    };

  <div className="grid grid-cols-3 gap-4"> content </div>;
};