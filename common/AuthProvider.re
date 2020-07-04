[@decco]
type user = {
  id: string,
  email: string,
  firstName: option(string),
  lastName: option(string),
};

[@decco]
type state = {
  token: string,
  user,
};

type authAction =
  | Signin(string, user)
  | UpdateUser(user)
  | SetToken(string)
  | Logout;

type dispatch = authAction => unit;
type contextValue = (state, dispatch);

let initState = {
  user: {
    id: "",
    email: "",
    firstName: None,
    lastName: None,
  },
  token: "",
};

let initValue: contextValue = (initState, _ => ignore());

let context = React.createContext(initValue);
let useAuth = () => React.useContext(context);

let make = React.Context.provider(context);

let makeProps = (~value, ~children, ()) => {
  "value": value,
  "children": children,
};