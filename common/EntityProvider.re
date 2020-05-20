[@decco]
type entity = {
  categoryId: string,
  moduleId: string,
  subjecId: string,
};

type entityAction =
  | UpdateEntity(entity);

type dispatch = entityAction => unit;
type contextValue = (entity, dispatch);
let initValue: contextValue = (
  {categoryId: "", moduleId: "", subjecId: ""},
  _ => ignore(),
);

let context = React.createContext(initValue);
let useEntity = () => React.useContext(context);

let make = React.Context.provider(context);

let makeProps = (~value, ~children, ()) => {
  "value": value,
  "children": children,
};