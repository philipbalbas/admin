open Ant;
open React;

[@react.component]
let make = () => {
  let fallback = <div> "Loading ..."->string </div>;

  <div className="p-8">
    <div className="flex justify-end mb-4">
      <Next.Link href="/create" _as="/create">
        <Button
          _type=`primary
          style={"display": "inline-flex", "alignItems": "center"}
          icon={<Icons.PlusOutlined />}>
          "Create Category"->string
        </Button>
      </Next.Link>
    </div>
    <Suspense fallback> <ListCategory /> </Suspense>
  </div>;
};

let default = make;