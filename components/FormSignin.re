open React;
open Ant;

module SignIn = [%relay.mutation
  {|
    mutation FormSigninMutation($email: String!, $password: String!) {
      signin(email: $email, password: $password) {
        token
        user {
          id
          email
          firstName
          lastName
        }
      }
    }
  |}
];

[@bs.deriving jsConverter]
type state = {
  email: string,
  password: string,
};

[@react.component]
let make = () => {
  let (form, _) = Form.useForm();
  let (signin, signingin) = SignIn.use();
  let (_, dispatch) = AuthProvider.useAuth();

  let onFinish = values => {
    let state = stateFromJs(values);

    signin(
      ~variables={email: state.email, password: state.password},
      ~updater=
        (_, res) => {
          switch (res.signin) {
          | Some({token, user}) =>
            let localstorage = Dom.Storage.localStorage;
            localstorage |> Dom.Storage.setItem("token", token);
            dispatch(
              Signin(
                token,
                {
                  id: user.id,
                  email: user.email,
                  firstName: user.firstName,
                  lastName: user.lastName,
                },
              ),
            );
          | None => ()
          }
        },
      ~onCompleted=
        (res, err) => {
          switch (res.signin) {
          | Some(_) =>
            Message.(message |> success("Signed in successfully"));

            Next.Router.(router |> push("/"));
          | None => ()
          };

          switch (err) {
          | Some(err) =>
            let _ =
              Belt.Array.map(err, e => {
                Message.(message |> error(e.message))
              });
            ();
          | None => ()
          };
        },
      (),
    )
    |> ignore;
    ();
  };

  <Form
    form name="signup" labelCol={"span": 4} wrapperCol={"span": 12} onFinish>
    <Form.Item name="email" label={"Email"->string}> <Input /> </Form.Item>
    <Form.Item name="password" label={"Password"->string}>
      <Input.Password />
    </Form.Item>
    <Form.Item wrapperCol={"offset": 4, "span": 12}>
      <Button
        className="mr-4" _type=`primary htmlType="submit" loading=signingin>
        {signingin ? "Signing In" : "Sign In"}->string
      </Button>
    </Form.Item>
  </Form>;
};