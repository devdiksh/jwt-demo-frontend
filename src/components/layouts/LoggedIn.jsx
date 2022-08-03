import React from "react";
import AccessToken from "./AccessToken";
import GetUser from "./GetUser";

const LoggedIn = () => {
  return (
    <div>
      <AccessToken />
      <GetUser />
    </div>
  );
};

export default LoggedIn;
