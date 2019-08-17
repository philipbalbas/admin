// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as Urql from "urql";
import * as React from "react";
import * as ReactDOMRe from "reason-react/src/ReactDOMRe.js";
import * as UrqlClient from "reason-urql/src/UrqlClient.bs.js";
import * as EmotionTheming from "emotion-theming";
import * as App$ReactHooksTemplate from "./App.bs.js";

var client = UrqlClient.make("http://localhost:4000/api", undefined, undefined, /* () */0);

var ThemeProvider = /* module */[];

var theme = (
    {
      colors: ["#89d4f4", "#007ace", "#001429", "#232323",],
      breakpoints: ["40rem", "52rem", "64rem"],
      fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
      space: [0, 4, 8, 16, 32, 64, 128, 256],
    }
  );

ReactDOMRe.renderToElementWithId(React.createElement(EmotionTheming.ThemeProvider, {
          children: React.createElement(Urql.Provider, {
                value: client,
                children: React.createElement(App$ReactHooksTemplate.make, { })
              }),
          theme: theme
        }), "root");

export {
  client ,
  ThemeProvider ,
  theme ,
  
}
/* client Not a pure module */
