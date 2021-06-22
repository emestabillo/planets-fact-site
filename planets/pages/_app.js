import GlobalStyle from "../shared/Globalstyles";
import MainWrapper from "../components/MainWrapper";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <MainWrapper>
        <Component {...pageProps} />
      </MainWrapper>
    </>
  );
}

export default MyApp;
