%bs.raw
{|import "./tailwind.css"|};

%bs.raw
{|import "antd/dist/antd.css"|};

[@bs.val] external apiUrl: string = "process.env.API_PROD";

open ReasonUrql;

let client = Client.make(~url=apiUrl, ());

ReactDOMRe.renderToElementWithId(
  <Provider value=client> <App /> </Provider>,
  "root",
);