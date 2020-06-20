[@decco]
type user = {
  id: string,
  email: string,
  token: string,
  firstName: option(string),
  lastName: option(string),
};

type authAction =
  | Signin(string, user)
  | Logout;

type dispatch = authAction => unit;
type contextValue = (user, dispatch);

let initUser = {
  id: "",
  email: "",
  token: "",
  firstName: None,
  lastName: None,
};

let initValue: contextValue = (initUser, _ => ignore());

let context = React.createContext(initValue);
let useAuth = () => React.useContext(context);

let make = React.Context.provider(context);

let makeProps = (~value, ~children, ()) => {
  "value": value,
  "children": children,
};