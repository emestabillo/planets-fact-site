import Navbar from "./Navbar/Navbar";
import MainWrapper from "./MainWrapper";

function Layout({ children }) {
  return (
    <>
      <MainWrapper>{children}</MainWrapper>
    </>
  );
}

export default Layout;
