import "./App.css";
import React, { useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import Routes from "../../routes";

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
        <AppContext.Provider value={{ accessToken }}>
          <Routes />
        </AppContext.Provider>
      </header>
    </div>
  );
};

export default App;
