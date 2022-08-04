import Introduction from "../components/layouts/Introduction";
import LandingPage from "../components/layouts/LandingPage";
import Working from "../components/layouts/Working";

import { ROUTE_PATHS } from "./routePath";

const routes = [
  {
    path: ROUTE_PATHS.HOME,
    component: LandingPage,
    exact: true,
  },

  {
    path: ROUTE_PATHS.INTRODUCTION,
    component: Introduction,
    exact: true,
  },

  {
    path: ROUTE_PATHS.WORKING,
    component: Working,
    exact: true,
  },
];

export default routes;
