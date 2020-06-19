open React;
open Ant;
open ReasonRelay;

open FormCardChoicesQuery_graphql.Types;

module ModalFormCreateChoice = [%relay.mutation
  {|
    mutation ModalChoiceFormCreateMutation($input: CreateChoiceInput!) {
      createChoice(input: $input) {
        result {
          id
          content
        }
      }
    }
  |}
];

module ModalFormUpdateChoice = [%relay.mutation
  {|
    mutation ModalChoiceFormUpdateMutation($input: UpdateChoiceInput!) {
      updateChoice(input: $input) {
        result {
          id
          content
        }
      }
    }
  |}
];

type mutationType = [ | `CREATE | `UPDATE];

[@bs.deriving jsConverter]
type state = {content: string};

[@react.component]
let make = (~visible, ~onCancel, ~mutationType, ~choice=?) => {
  let (form, _) = Form.useForm();
  let (createChoice, isCreatingChoice) = ModalFormCreateChoice.use();
  let (updateChoice, isUpdatingChoice) = ModalFormUpdateChoice.use();

  let resetFields = () => {
    form |> Form.resetFields();
  };

  let createMutation = state =>
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

  let choice =
    switch (choice) {
    | Some(choice) => choice
    | None => {key: "", content: ""}
    };

  let updateMutation = state =>
    updateChoice(
      ~variables={
        input: {
          inputData: {
            id: choice.key,
            content: state.content,
          },
        },
      },
      ~updater=
        (store, res) => {
          let newData =
            switch (res.updateChoice) {
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
          switch (res.updateChoice) {
          | Some(response) =>
            switch (response.result) {
            | Some(_) =>
              Message.(message |> success({j| Choice updated  |j}));
              onCancel();
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

  let onFinish = values => {
    let state = stateFromJs(values);
    switch (mutationType) {
    | `CREATE => createMutation(state)
    | `UPDATE => updateMutation(state)
    };
  };

  let title =
    switch (mutationType) {
    | `CREATE => "Create"
    | `UPDATE => "Update"
    };

  let loading = isUpdatingChoice || isCreatingChoice;

  <Modal
    visible
    title={{j|$title Choice|j}->string}
    footer={
      <div>
        <Button
          _type=`primary
          htmlType="submit"
          loading
          onClick={_ => form |> Form.submit()}>
          title->string
        </Button>
        <Button loading onClick={_ => onCancel()}> "Return"->string </Button>
      </div>
    }>
    <Form form onFinish>
      <Form.Item
        name="content"
        rules=[|{"required": true, "message": "Content is required"}|]>
        <Slate.Editor defaultValue={choice.content} />
      </Form.Item>
    </Form>
  </Modal>;
};