import React from "react";
import MainWrapper from "./components/MainWrapper";
import Navbar from "./components/Navbar/Navbar";
import Mercury from "./pages/Mercury";
import GlobalStyle from "./shared/Globalstyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <MainWrapper>
        <Mercury />
      </MainWrapper>
    </>
  );
}

export default App;
