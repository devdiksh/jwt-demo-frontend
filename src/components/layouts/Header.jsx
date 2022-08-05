import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { HomeLogo, BackLogo, NextLogo } from "../../assets";
import { ROUTE_PATHS } from "../../routes/routePath";

const Header = ({ children }) => {
  const history = useHistory();
  const location = useLocation();

  const gohome = () => {
    history.push(ROUTE_PATHS.HOME);
  };

  const goback = () => {
    history.goBack();
  };

  const getNextLocation = () => {
    switch (location.pathname) {
      case ROUTE_PATHS.HOME: {
        return ROUTE_PATHS.INTRODUCTION;
      }
      case ROUTE_PATHS.INTRODUCTION: {
        return ROUTE_PATHS.STRUCTURE;
      }
      case ROUTE_PATHS.STRUCTURE: {
        return ROUTE_PATHS.VERIFICATION;
      }
      case ROUTE_PATHS.VERIFICATION: {
        return ROUTE_PATHS.EXAMPLE;
      }
      case ROUTE_PATHS.EXAMPLE: {
        return ROUTE_PATHS.STRATEGY;
      }
      case ROUTE_PATHS.STRATEGY: {
        return ROUTE_PATHS.REVOCATION;
      }

      default: {
        return ROUTE_PATHS.HOME;
      }
    }
  };

  const goNext = () => {
    const nextLocation = getNextLocation();
    history.push(nextLocation);
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <div className="App">
        <div
          style={{
            marginLeft: "5vw",
          }}
        >
          <HomeLogo className="Home-Logo Nav-Logo" onClick={gohome} />
          {location.pathname !== ROUTE_PATHS.HOME && (
            <>
              <BackLogo className="Back-Logo Nav-Logo" onClick={goback} />
              <NextLogo className="Back-Logo Nav-Logo" onClick={goNext} />
            </>
          )}
        </div>
        <header className="App-header">{children}</header>
        <footer className="App-footer" />
      </div>
    </div>
  );
};

export default Header;
