%bs.raw
{|import "./tailwind.css"|};

%bs.raw
{|import "antd/dist/antd.css"|};

%bs.raw
{|import 'katex/dist/katex.min.css';|};

[@bs.val] external apiUrl: string = "process.env.API_DEV";

open ReasonUrql;

let client = Client.make(~url=apiUrl, ());

ReactDOMRe.renderToElementWithId(
  <Provider value=client> <App /> </Provider>,
  "root",
);