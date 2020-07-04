open React;

module CurrentUserQuery = [%relay.query
  {|
    query OuterLayoutUserQuery {
      me {
        id
        email
        firstName
        lastName
      }
    }
  |}
];

[@react.component]
let make = (~children) => {
  let (_, dispatch) = AuthProvider.useAuth();
  let currentUserQueryData = CurrentUserQuery.use(~variables=(), ());

  useEffect1(
    () => {
      switch (currentUserQueryData.me) {
      | Some(currentUser) =>
        dispatch(
          UpdateUser({
            id: currentUser.id,
            email: currentUser.email,
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
          }),
        )
      | None => Next.Router.(router |> push("/sign-in"))
      };

      Some(() => ());
    },
    [||],
  );

  <> children </>;
};