open ReasonUrql;

let client = Client.make(~url="http://localhost:4000/api", ());

module ThemeProvider = {
  [@bs.module "emotion-theming"] [@react.component]
  external make: (~children: React.element, ~theme: string) => React.element =
    "ThemeProvider";
};

let theme = [%raw
  {|
    {
      colors: ["#89d4f4", "#007ace", "#001429", "#232323",],
      breakpoints: ["40rem", "52rem", "64rem"],
      fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
      space: [0, 4, 8, 16, 32, 64, 128, 256],
    }
  |}
];

ReactDOMRe.renderToElementWithId(
  <ThemeProvider theme>
    <Provider value=client> <App /> </Provider>
  </ThemeProvider>,
  "root",
);