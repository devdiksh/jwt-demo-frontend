import React, { useState } from "react";
import { getAxiosClient } from "../../axiosClient";

const LoginForm = ({ setuu }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const axiosClient = await getAxiosClient();
      const response = await axiosClient.postRequest("/login", {
        username,
        password,
      });
      window.localStorage.setItem("accessToken", response?.data?.token);
      setuu(Math.random());
    } catch (err) {
      console.error("Login Failed", err);
    }
  };

  return (
    <div style={{ display: "contents" }}>
      <input
        className="Text-field"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        name="username"
        placeholder="username"
        autoComplete="new-password"
      />
      <input
        className="Text-field"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        name="password"
        placeholder="password"
        autoComplete="new-password"
      />
      <span className="Submit-Button" onClick={handleSubmit}>
        Login
      </span>
    </div>
  );
};

export default LoginForm;
