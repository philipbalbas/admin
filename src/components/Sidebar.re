open Utils;

module SidebarLink = {
  [@react.component]
  let make = (~children, ~to_) => {
    <a
      className="text-indigo-900 cursor-pointer hover:text-indigo-300 mb-3"
      onClick={_e => push(to_)}>
      children
    </a>;
  };
};

[@react.component]
let make = () => {
  <div
    className="flex flex-col px-6 pt-10 shadow-md border-r-3 border-gray-200 bg-gray-300">
    <SidebarLink to_="/modules"> "Modules"->str </SidebarLink>
    <SidebarLink to_="/subjects"> "Subjects"->str </SidebarLink>
    <SidebarLink to_="/topics"> "Topics"->str </SidebarLink>
    <SidebarLink to_="/pages"> "Pages"->str </SidebarLink>
    <SidebarLink to_="/notes"> "Notes"->str </SidebarLink>
  </div>;
};