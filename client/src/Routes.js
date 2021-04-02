import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";

import store from "./store";

const routes = [];

routes.push(require("./features/Products").routes);
routes.push(require("./features/Stores").routes);
routes.push(require("./features/Home").routes);

const Routes = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/stores">Stores</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </nav>

          <Switch>{routes}</Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default Routes;
