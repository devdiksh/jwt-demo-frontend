import React from "react";

const AccessToken = ({ accessToken }) => {
  let header = "";
  let payload = "";
  let signature = "";

  if (accessToken) {
    header = accessToken.split(".")[0];
    payload = accessToken.split(".")[1];
    signature = accessToken.split(".")[2];
  }

  return (
    <div>
      {header && payload && signature && (
        <div>
          <div className="Jwtbox">
            <span className="Jwt-text-red">{`${header}.`}</span>
            <span className="Jwt-text-violet">{`${payload}.`}</span>
            <span className="Jwt-text-blue">{`${signature}`}</span>
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default AccessToken;
