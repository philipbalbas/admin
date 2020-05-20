open EntityProvider;

type pageProps = {.};

%raw
"import('../styles/main.css')";

%raw
"import('antd/dist/antd.css')";

module PageComponent = {
  type t = React.component(pageProps);
};

type props = {
  [@bs.as "Component"]
  component: PageComponent.t,
  pageProps,
};

type state = {entity};

let reducer = (_, action) =>
  switch (action) {
  | UpdateEntity(entity) => entity
  };

let make = (props: props): React.element => {
  let {component, pageProps} = props;
  let (state, dispatch) =
    React.useReducer(reducer, {categoryId: "", moduleId: "", subjecId: ""});

  let router = Next.Router.useRouter();
  let query = router.query;

  // React.useEffect1(
  //   () => {
  //     if (!Ramda.isEmpty(query)) {
  //       Js.log("Over heree");
  //       dispatch(UpdateEntity({...state, categoryId: query##categoryId}));
  //     };
  //     Js.log("Over heree instead");

  //     Some(() => ());
  //   },
  //   [|router.route|],
  // );

  let content = React.createElement(component, pageProps);

  let shownContent =
    switch (router.route) {
    | "/" => content
    | _ => <MainLayout> content </MainLayout>
    };

  <ReasonRelay.Context.Provider environment=RelayEnv.environment>
    <Next.Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
      />
      <title> "Review Dashboard"->React.string </title>
    </Next.Head>
    <EntityProvider value=(state, dispatch)> shownContent </EntityProvider>
  </ReasonRelay.Context.Provider>;
};