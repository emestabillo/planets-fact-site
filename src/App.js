import React from "react";
import MainWrapper from "./components/MainWrapper";
import Navbar from "./components/Navbar/Navbar";
import Tabs from "./components/Tabs";
import GlobalStyle from "./shared/Globalstyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <MainWrapper>
        <Tabs />
      </MainWrapper>
    </>
  );
}

export default App;
