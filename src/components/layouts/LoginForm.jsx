import React, { useState } from "react";
import axiosClient from "../../axiosClient";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosClient.postRequest('/login', {
        username,
        password,
      });
      window.localStorage.setItem("accessToken", response?.data?.token);
      window.location.reload();
    } catch (err) {
      console.error("Login Failed", err);
    }
  };

  return (
    <header className="App-header">
      Login Form
      <form onSubmit={(e) => handleSubmit(e)} className="Form">
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
        <button className="Submit" type="submit">
          Submit
        </button>
      </form>
    </header>
  );
};

export default LoginForm;
