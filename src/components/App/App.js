import "./App.css";
import React, { useEffect, useState } from "react";
import LoginForm from "../layouts/LoginForm";
import UserData from "../layouts/UserData";

const App = () => {
  const [accessToken, setAccessToken] = useState(window.localStorage.getItem("accessToken"))

  useEffect(() => {
    setAccessToken(window.localStorage.getItem("accessToken"))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {!accessToken && <LoginForm />}
        {accessToken && <UserData />}
      </header>
    </div>
  );
};

export default App;
