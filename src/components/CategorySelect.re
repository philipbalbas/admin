[@react.component]
let make = () =>
  <div>
    <Ant.Select className="w-full">
      <Ant.Select.Option key="1" value="1">
        "Heere"->React.string
      </Ant.Select.Option>
    </Ant.Select>
  </div>;