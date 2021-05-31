import React from "react";
import MainWrapper from "./components/MainWrapper";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from "./shared/Globalstyles";

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
