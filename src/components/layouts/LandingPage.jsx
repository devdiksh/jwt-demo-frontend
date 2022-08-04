import React from "react";
import { useHistory } from "react-router-dom";
import { jwtLogo } from "../../assets";
import ROUTE_PATHS from "../../routes/routePath";

const LandingPage = () => {
  const history = useHistory();
  const handleGetStarted = () => {
    history.push(ROUTE_PATHS.INTRODUCTION);
  };

  return (
    <div>
      <h1 style={{ fontSize: "3.5em" }}>Deep Dive into JWT</h1>
      <img
        onClick={handleGetStarted}
        className="jwtLogo"
        src={jwtLogo}
        alt="jwt-logo"
      />
    </div>
  );
};

export default LandingPage;
