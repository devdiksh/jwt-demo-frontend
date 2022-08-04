import "./App.css";
import React, { useEffect, useState } from "react";
import LoginForm from "../layouts/LoginForm";
import LoggedIn from "../layouts/LoggedIn";
import { AppContext } from "./AppContext";

const App = () => {
  const [accessToken, setAccessToken] = useState(
    window.localStorage.getItem("accessToken")
  );

  useEffect(() => {
    function checkUserData() {
      const item = localStorage.getItem("accessToken");
      if (item) {
        setAccessToken(item);
      }
    }
    window.addEventListener("storage", checkUserData);
    return () => {
      window.removeEventListener("storage", checkUserData);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <AppContext.Provider
          value={{
            accessToken,
          }}
        >
          <LoginForm />
          <LoggedIn />
        </AppContext.Provider>
      </header>
    </div>
  );
};

export default App;
