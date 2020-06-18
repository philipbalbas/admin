type icon;

[@bs.module "@fortawesome/pro-solid-svg-icons"] external faCog: icon = "faCog";

[@bs.module "@fortawesome/pro-solid-svg-icons"]
external faEdit: icon = "faEdit";

[@bs.module "@fortawesome/pro-solid-svg-icons"]
external faMinusCircle: icon = "faMinusCircle";

[@bs.module "@fortawesome/pro-solid-svg-icons"]
external faPlus: icon = "faPlus";

[@bs.module "@fortawesome/react-fontawesome"] [@react.component]
external make: (~icon: icon, ~className: string=?) => React.element =
  "FontAwesomeIcon";