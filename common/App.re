open React;
open AuthProvider;

type pageProps = {.};

%raw
"import('antd/dist/antd.css')";

%raw
"import('../styles/main.css')";

module PageComponent = {
  type t = component(pageProps);
};

type props = {
  [@bs.as "Component"]
  component: PageComponent.t,
  pageProps,
};

type authState = {user};

let authReducer = (_, action) =>
  switch (action) {
  | Signin(token, user) => {...user, token}
  | Logout => initUser
  };

[@gentype]
let make = (props: props): element => {
  let {component, pageProps} = props;
  let (state, dispatch) = useReducer(authReducer, initUser);

  useEffect1(
    () => {
      if (state.token == "") {
        Next.Router.(router |> push("/sign-in"));
      };
      Some(() => ());
    },
    [|state.token|],
  );

  let router = Next.Router.useRouter();

  let content = createElement(component, pageProps);

  let shownContent =
    switch (router.route) {
    | "/" => content
    | "/create" => content
    | "/[categoryId]/edit" => content
    | "/sign-in" => content
    | _ => <MainLayout> content </MainLayout>
    };

  let environment = RelayEnv.initializeEnvironment(state.token);

  <ReasonRelay.Context.Provider environment>
    <Next.Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
      />
      <title> "Review Dashboard"->string </title>
    </Next.Head>
    <AuthProvider value=(state, dispatch)> shownContent </AuthProvider>
  </ReasonRelay.Context.Provider>;
};