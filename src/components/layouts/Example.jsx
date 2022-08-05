/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import LoggedIn from "./LoggedIn";
import { getAccessToken, getAxiosClient } from "../../axiosClient";

const Example = () => {
  const accessToken = getAccessToken();
  const [uu, setuu] = useState(Math.random());

  const handleReload = () => {
    window.location.reload();
  };

  const handleLogout = async () => {
    try {
      const client = await getAxiosClient();
      await client.postRequest("/logout");
      window.localStorage.removeItem("accessToken");
      setuu(Math.random());
    } catch (err) {
      console.error("Logout Failed", err);
    }
  };

  const handleGetUser = async (e) => {
    e.preventDefault();
    try {
      const client = await getAxiosClient();
      await client.getRequest("/get-user");
      setuu(Math.random());
    } catch (err) {
      console.error("Login Failed", err);
    }
  };

  return (
    <div>
      <h3 className="Heading">Login Application</h3>
      <div style={{ marginBottom: "10vh" }}>
        <p className="Para">
          {`This is a simple login form.
       I have setup some valid credentials which are:`}
        </p>
        <p className="Para">{`username=deekshant & password=test`}</p>
      </div>
      <div
        style={{
          height: "10vh",
        }}
      >
        <span className="Submit-Button Light-Button" onClick={handleReload}>
          Reload
        </span>
        <span className="Submit-Button Light-Button" onClick={handleLogout}>
          Logout
        </span>
        <span className="Submit-Button Light-Button" onClick={handleGetUser}>
          GetUser
        </span>
      </div>
      <div
        style={{
          height: "10vh",
        }}
      >
        <span className="Para">{"Access Token is "}</span>
        {accessToken && <span className="Para Para-green">{"present"}</span>}
        {!accessToken && <span className="Para Para-red">{"not present"}</span>}
      </div>
      <LoginForm setuu={setuu} />
      <LoggedIn accessToken={accessToken} />
    </div>
  );
};

export default Example;
