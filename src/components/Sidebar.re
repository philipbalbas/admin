open Utils;
open Ant;

module SidebarLink = {
  [@react.component]
  let make = (~children, ~to_) => {
    <a onClick={_e => push(to_)}> children </a>;
  };
};

[@react.component]
let make = () => {
  <div>
    <Menu mode=`inline defaultOpenKeys=[|"sub1", "sub2"|]>
      <Menu.SubMenu title="Lectures" key="sub1">
        <Menu.Item key="1">
          <SidebarLink to_="/modules"> "Modules"->str </SidebarLink>
        </Menu.Item>
        <Menu.Item key="2">
          <SidebarLink to_="/subjects"> "Subjects"->str </SidebarLink>
        </Menu.Item>
        <Menu.Item key="3">
          <SidebarLink to_="/topics"> "Topics"->str </SidebarLink>
        </Menu.Item>
        <Menu.Item key="4">
          <SidebarLink to_="/pages"> "Pages"->str </SidebarLink>
        </Menu.Item>
        <Menu.Item key="5">
          <SidebarLink to_="/notes"> "Notes"->str </SidebarLink>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu title="Tests" key="sub2">
        <Menu.Item key="6">
          <SidebarLink to_="/exams"> "Exams"->str </SidebarLink>
        </Menu.Item>
        <Menu.Item key="7">
          <SidebarLink to_="/cards"> "Cards"->str </SidebarLink>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  </div>;
};