import LandingPage from "../components/layouts/LandingPage"
import ROUTE_PATHS from "./routePath"

const routes = [
  {
    path: ROUTE_PATHS.HOME,
    component: LandingPage,
    exact: true,
  },
]

export default routes
