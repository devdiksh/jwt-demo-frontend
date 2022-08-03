import React, { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username)
    console.log(password)
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
