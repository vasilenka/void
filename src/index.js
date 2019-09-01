import * as React from "react";
import * as serviceWorker from "./serviceWorker";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DefaultLayout from "./layouts/Default/Default";

import Main from "./pages/main";
import About from "./pages/about";
import NotFound from "./pages/404";

const App = () => (
  <Router>
    <Route
      render={() => (
        <DefaultLayout>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </DefaultLayout>
      )}
    />
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
