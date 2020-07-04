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

let authReducer = (state, action) => {
  switch (action) {
  | Signin(token, user) => {user, token}
  | SetToken(token) => {...state, token}
  | UpdateUser(user) => {...state, user}
  | Logout => initState
  };
};

[@gentype]
let make = (props: props): element => {
  let {component, pageProps} = props;
  let (state, dispatch) = useReducer(authReducer, initState);

  useEffect1(
    () => {
      let localStorage = Dom.Storage.localStorage;
      let savedToken = localStorage |> Dom.Storage.getItem("token");

      switch (savedToken) {
      | Some(token) => dispatch(SetToken(token))
      | None => Next.Router.(router |> push("/sign-in"))
      };

      Some(() => ());
    },
    [||],
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
    <AuthProvider value=(state, dispatch)>
      <Suspense fallback={"Loading..."->string}>
        <OuterLayout> shownContent </OuterLayout>
      </Suspense>
    </AuthProvider>
  </ReasonRelay.Context.Provider>;
};