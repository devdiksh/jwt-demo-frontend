import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../components/layouts/Header";
import routes from "./routeList";

const HeaderThis = (props) => {
  return (
    <Header>
      <props.component />
    </Header>
  );
};

const CustomRoutes = () => {
  return (
    <Switch>
      {routes.map(({ path, exact, auth, ...rest }) => (
        <Route
          key={path}
          path={path}
          exact={exact}
          render={() => <HeaderThis component={rest.component} />}
        />
      ))}
    </Switch>
  );
};

export default CustomRoutes;
