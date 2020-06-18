open React;
open Ant;

[@react.component]
let make = (~dataSource, ~targetKeys, ~titles, ~columns, ~onChange) => {
  <Transfer.Render dataSource targetKeys titles onChange>
    {({filteredItems, onItemSelectAll, onItemSelect, selectedKeys}) => {
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
         columns
         size=`small
         rowSelection
         dataSource=filteredItems
         onRow={(item, _) => {
           let key = item##key;
           let included = selectedKeys |> Js.Array.includes(key);
           {onClick: Some(_ => {onItemSelect(key, !included)})};
         }}
       />;
     }}
  </Transfer.Render>;
};