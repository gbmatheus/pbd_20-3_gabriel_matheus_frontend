import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

import { routesContador } from "./contador";
import { routesAdmin } from "./admin";
import { isAuthenticated } from "../services/auth";

function Routes() {
  return (
    <>
      <Switch>
        {routesContador.map((route) => (
          <PrivateRoute
            key={route.path}
            path={`/contador${route.path}`}
            exact={route.exact}
            component={() => (<route.main />)}
            // children={<route.main />}
          />
        ))}
        {routesAdmin.map((route) => (
          <PrivateRoute
            key={route.path}
            path={`/admin${route.path}`}
            exact={route.exact}
            component={() => (<route.main />)}
            // children={}
          />
        ))}
        {/* <Route path="/contador" exact component={Contador} /> */}
        {/* <Route path="/admin" exact component={Admin} /> */}
        <PrivateRoute path="/app" component={() => <h1>APp</h1>} />
        <Route path="/" exact component={Login} />

        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
  {...rest}
  render={(props) =>
    isAuthenticated() ? (
      <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
      />
);

export default Routes;
