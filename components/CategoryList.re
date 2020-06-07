open Ant;

module Query = [%relay.query
  {|
  query CategoryListQuery {
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
           <Link href="/[categoryId]" _as={j|/$id|j} key={i->string_of_int}>
             <a
               className="cursor-pointer"
               onClick={_ =>
                 dispatch(UpdateEntity({...entity, categoryId: id}))
               }>
               <Card title={cat.name->string} hoverable=true>
                 cat.description->string
               </Card>
             </a>
           </Link>;
         })
      |> array
    | _ => <Card> "Nada"->string </Card>
    };

  <div className="grid grid-cols-5 gap-4"> content </div>;
};