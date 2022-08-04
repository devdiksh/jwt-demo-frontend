import React, { useContext } from "react";
import axiosClient from "../../axiosClient";
import { AppContext } from "../App/AppContext";

const AccessToken = () => {
  const { accessToken } = useContext(AppContext);
  console.log('ACCES', accessToken)

  const handleLogout = async () => {
    try {
      await axiosClient.postRequest("/logout");
      window.localStorage.removeItem("accessToken");
    } catch (err) {
      console.error("Logout Failed", err);
    }
    window.location.reload();
  };

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
      Access Token
      {header && payload && signature && (
        <div>
          <div className="Jwtbox">
            <span className="Jwt-text-red">{`${header}.`}</span>
            <span className="Jwt-text-violet">{`${payload}.`}</span>
            <span className="Jwt-text-blue">{`${signature}`}</span>
          </div>
          <button className="Submit" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default AccessToken;
