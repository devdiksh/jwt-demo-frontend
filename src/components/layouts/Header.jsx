import React from "react";
import { useHistory } from "react-router-dom";
import { HomeLogo, BackLogo } from "../../assets";
import { ROUTE_PATHS } from "../../routes/routePath";

const Header = ({ children }) => {
  const history = useHistory();

  const gohome = () => {
    history.push(ROUTE_PATHS.HOME);
  };

  const goback = () => {
    history.goBack();
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <div className="App">
        <HomeLogo className="Home-Logo" onClick={gohome} />
        <BackLogo className="Back-Logo" onClick={goback} />
        <header className="App-header">{children}</header>
      </div>
    </div>
  );
};

export default Header;
