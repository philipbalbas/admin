open ReasonUrql;

let client = Client.make(~url="http://localhost:4000/api", ());

ReactDOMRe.renderToElementWithId(
  <Provider value=client> <App /> </Provider>,
  "root",
);