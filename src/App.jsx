import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Home from "./components/Home/Home";
import Page from "./components/Page/Page";
const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const largerDevice = useMediaQuery({ query: "(min-width: 790px)" });
  const smallerDevice = useMediaQuery({ query: "(min-width: 400px)" });
  const handleLoginChange = (isLoggedIn) => {
    setLoggedIn(isLoggedIn);
  };

  return (
    <>
      <Header loggedIn={loggedIn} largerDevice={largerDevice} />
      <Section
        largerDevice={largerDevice}
        smallerDevice={smallerDevice}
        loggedIn={loggedIn}
        onLoginChange={handleLoginChange}
      />
      <Home
        largerDevice={largerDevice}
        loggedIn={loggedIn}
        handleLoginChange={handleLoginChange}
      />
      <Page largerDevice={largerDevice} loggedIn={loggedIn} smallerDevice={smallerDevice} onLoginChange={handleLoginChange} />
    </>
  );
};

export default App;
