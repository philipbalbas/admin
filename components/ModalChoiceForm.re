open React;
open Ant;
open ReasonRelay;

module ModalFormCreateChoice = [%relay.mutation
  {|
    mutation ModalChoiceFormChoiceCreateMutation($input: CreateChoiceInput!) {
      createChoice(input: $input) {
        result {
          id
          content
        }
      }
    }
  |}
];

[@bs.deriving jsConverter]
type state = {content: string};

[@react.component]
let make = (~visible, ~onCancel) => {
  let (form, _) = Form.useForm();
  let (createChoice, isCreatingChoice) = ModalFormCreateChoice.use();

  let resetFields = () => {
    form |> Form.resetFields();
  };

  let onFinish = values => {
    let state = stateFromJs(values);
    createChoice(
      ~variables={
        input: {
          inputData: {
            content: state.content,
          },
        },
      },
      ~updater=
        (store, res) => {
          let newData =
            switch (res.createChoice) {
            | Some(choice) =>
              switch (choice.result) {
              | Some(res) => res
              | None => {id: "", content: ""}
              }
            | None => {id: "", content: ""}
            };
          let newRecord =
            store->RecordSourceSelectorProxy.get(
              ~dataId=makeDataId(newData.id),
            );

          switch (
            store
            ->RecordSourceSelectorProxy.getRoot
            ->RecordProxy.getLinkedRecords(~name="listChoices", ())
          ) {
          | Some(records) =>
            let _ =
              store
              ->RecordSourceSelectorProxy.getRoot
              ->RecordProxy.setLinkedRecords(
                  ~records=Belt.Array.concat(records, [|newRecord|]),
                  ~name="listChoices",
                  (),
                );
            ();
          | None => ()
          };
          ();
        },
      ~onCompleted=
        (res, err) => {
          switch (res.createChoice) {
          | Some(response) =>
            switch (response.result) {
            | Some(_) =>
              Message.(message |> success({j| Choice created  |j}));
              resetFields();
            | None => ()
            }
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
  };

  <Modal
    visible
    title={"Create Choice"->string}
    footer={
      <div>
        <Button
          _type=`primary
          htmlType="submit"
          loading=isCreatingChoice
          onClick={_ => form |> Form.submit()}>
          "Create"->string
        </Button>
        <Button loading=isCreatingChoice onClick={_ => onCancel()}>
          "Return"->string
        </Button>
      </div>
    }>
    <Form form onFinish>
      <Form.Item
        name="content"
        rules=[|{"required": true, "message": "Content is required"}|]>
        <Slate.Editor />
      </Form.Item>
    </Form>
  </Modal>;
};