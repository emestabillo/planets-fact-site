import React from "react";
import MainWrapper from "./components/MainWrapper";
import Navbar from "./components/Navbar";
import GlobalStyle from "./styles/Globalstyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <MainWrapper>
        <Navbar />
      </MainWrapper>
    </>
  );
}

export default App;
