open Ant;

let style = {"width": 250};

[@react.component]
let make = () => {
  open! Next;
  let router = Router.useRouter();
  let categoryId = router.query##categoryId;

  <Menu
    style
    mode=`inline
    defaultOpenKeys=[|"sub1", "sub2"|]
    defaultSelectedKeys=[|"1"|]>
    <Menu.SubMenu title="Lectures" key="sub1">
      <Menu.Item key="1">
        <Link href="/[categoryId]/modules" _as={j|/$categoryId/modules|j}>
          <a> "Modules"->React.string </a>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link href="/[categoryId]/subjects" _as={j|/$categoryId/subjects|j}>
          <a> "Subjects"->React.string </a>
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link href="/[categoryId]/topics" _as={j|/$categoryId/topics|j}>
          <a> "Topics"->React.string </a>
        </Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link href="/[categoryId]/pages" _as={j|/$categoryId/pages|j}>
          <a> "Pages"->React.string </a>
        </Link>
      </Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu title="Tests" key="sub2">
      <Menu.Item key="6">
        <Link href="/[categoryId]/exams" _as={j|/$categoryId/exams|j}>
          <a> "Exams"->React.string </a>
        </Link>
      </Menu.Item>
      <Menu.Item key="7">
        <Link href="/[categoryId]/cards" _as={j|/$categoryId/cards|j}>
          <a> "Cards"->React.string </a>
        </Link>
      </Menu.Item>
    </Menu.SubMenu>
  </Menu>;
};