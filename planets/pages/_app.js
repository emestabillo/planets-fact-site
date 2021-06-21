import GlobalStyle from "../shared/Globalstyles";
import MainWrapper from "../components/MainWrapper";
import Navbar from "../components/Navbar";

function MyApp() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <MainWrapper>
        <h1>TEst</h1>
      </MainWrapper>
    </>
  );
}

export default MyApp;
