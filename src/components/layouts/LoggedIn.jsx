import React from "react";
import AccessToken from "./AccessToken";
import GetUser from "./GetUser";

const LoggedIn = ({ accessToken }) => {
  return (
    <div>
      <AccessToken accessToken={accessToken} />
      <GetUser />
    </div>
  );
};

export default LoggedIn;
