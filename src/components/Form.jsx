import React, { useState } from "react";
import config from "../config";
import axios from 'axios'

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`${config.SERVER_BASE_URL}/login`, {
      username, password
    })
  }

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

export default Form;
