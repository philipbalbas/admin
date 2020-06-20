open React;
open Ant;

[@react.component]
let make = (~dataSource, ~filterOption, ~targetKeys, ~titles, ~onChange) => {
  let (modalVisible, setModalVisible) = useState(_ => false);
  let (editingChoice, setEditingChoice) =
    useState(_ =>
      (
        {key: "", content: ""}: FormCardChoicesQuery_graphql.Types.response_listChoices
      )
    );

  let onCancel = () => {
    setModalVisible(_ => false);
  };

  <>
    <Transfer.Render
      showSearch=true
      showSelectAll=false
      filterOption
      dataSource
      targetKeys
      titles
      onChange>
      {({filteredItems, onItemSelectAll, onItemSelect, selectedKeys}) => {
         let columnsUpdated:
           array(
             Table.column(
               string,
               FormCardChoicesQuery_graphql.Types.response_listChoices,
             ),
           ) = [|
           {
             title: "Choices",
             dataIndex: [|"content"|],
             key: "content",
             render: None,
             onCell:
               Some(
                 (item, _) => {
                   let key = item.key;
                   let included = selectedKeys |> Js.Array.includes(key);
                   {onClick: Some(_ => {onItemSelect(key, !included)})};
                 },
               ),
           },
           {
             title: "",
             dataIndex: [||],
             key: "action",
             render:
               Some(
                 (_, record, _) => {
                   <Button
                     _type=`link
                     onClick={_ => {
                       setEditingChoice(_ => record);
                       setModalVisible(_ => true);
                     }}>
                     <FontAwesomeIcon icon=FontAwesomeIcon.faEdit />
                   </Button>
                 },
               ),
             onCell: None,
           },
         |];

         let rowSelection: Table.rowSelection('a) = {
           ...Table.defaultRowSelection,
           onSelectAll:
             Some(
               (selected, selectedRows, _) => {
                 let treeSelectedKeys =
                   selectedRows->Belt.Array.map(row => row##key);

                 let diffKeys =
                   selected
                     ? Ramda.difference(treeSelectedKeys, selectedKeys)
                     : Ramda.difference(selectedKeys, treeSelectedKeys);

                 onItemSelectAll(diffKeys, selected);
               },
             ),
           onSelect:
             Some(
               (item, selected, _, _) => {onItemSelect(item##key, selected)},
             ),
           selectedRowKeys: Some(selectedKeys),
         };

         <Table
           columns=columnsUpdated
           size=`small
           rowSelection
           dataSource=filteredItems
         />;
       }}
    </Transfer.Render>
    <ModalChoiceForm
      visible=modalVisible
      choice=editingChoice
      onCancel
      mutationType=`UPDATE
    />
  </>;
};