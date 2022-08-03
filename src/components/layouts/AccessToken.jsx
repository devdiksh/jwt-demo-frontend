import React from "react";
import axiosClient from "../../axiosClient";

const AccessToken = () => {
  const handleLogout = async () => {
    try {
      await axiosClient.postRequest("/logout");
      window.localStorage.removeItem("accessToken");
    } catch (err) {
      console.error("Logout Failed", err);
    }
    window.location.reload();
  };

  const accessToken = window.localStorage.getItem("accessToken");

  const header = accessToken.split(".")[0];
  const payload = accessToken.split(".")[1];
  const signature = accessToken.split(".")[2];
  return (
    <div>
      Access Token
      <div className="Jwtbox">
        <span className="Jwt-text-red">{`${header}.`}</span>
        <span className="Jwt-text-violet">{`${payload}.`}</span>
        <span className="Jwt-text-blue">{`${signature}`}</span>
      </div>
      <button className="Submit" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default AccessToken;
