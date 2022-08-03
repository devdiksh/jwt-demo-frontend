import "./App.css";
import React, { useEffect, useState } from "react";
import LoginForm from "../layouts/LoginForm";
import LoggedIn from "../layouts/LoggedIn";

const App = () => {
  const [accessToken, setAccessToken] = useState(window.localStorage.getItem("accessToken"))

  useEffect(() => {
    setAccessToken(window.localStorage.getItem("accessToken"))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {!accessToken && <LoginForm />}
        {accessToken && <LoggedIn />}
      </header>
    </div>
  );
};

export default App;
