import Navbar from "./Navbar";
import MainWrapper from "./MainWrapper";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <MainWrapper>{children}</MainWrapper>
    </>
  );
}

export default Layout;
