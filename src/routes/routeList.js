import Example from "../components/layouts/Example";
import Introduction from "../components/layouts/Introduction";
import LandingPage from "../components/layouts/LandingPage";
import Structure from "../components/layouts/Structure";

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
    path: ROUTE_PATHS.STRUCTURE,
    component: Structure,
    exact: true,
  },

  {
    path: ROUTE_PATHS.EXAMPLE,
    component: Example,
    exact: true,
  },
];

export default routes;
