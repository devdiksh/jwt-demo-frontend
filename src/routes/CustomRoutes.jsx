import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routeList";

const CustomRoutes = () => {
  return (
    <Switch>
      {routes.map(({ path, exact, auth, ...rest }) => (
        <Route
          key={path}
          path={path}
          exact={exact}
          render={() => <rest.component />}
        />
      ))}
    </Switch>
  );
};

export default CustomRoutes;
