import Example from "../components/layouts/Example";
import Introduction from "../components/layouts/Introduction";
import LandingPage from "../components/layouts/LandingPage";
import Revocation from "../components/layouts/Revocation";
import Strategy from "../components/layouts/Strategy";
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

  {
    path: ROUTE_PATHS.STRATEGY,
    component: Strategy,
    exact: true,
  },

  {
    path: ROUTE_PATHS.REVOCATION,
    component: Revocation,
    exact: true,
  },
];

export default routes;
