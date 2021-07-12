import Navbar from "./Navbar/Navbar";
import MainWrapper from "./MainWrapper";
import styled from "styled-components";

const SkipLinks = styled.a`
  background: var(--color-earth-main);
  color: #fff;
  padding: 0.25rem;
  left: 0.5rem;
  top: 0;
  position: absolute;
  transform: translateY(-100%);
  transition: transform 0.3s;

  &:focus {
    transform: translateY(0%);
  }
`;

function Layout({ children }) {
  return (
    <>
      <SkipLinks href="#main">Skip to content</SkipLinks>
      <Navbar />
      <MainWrapper>{children}</MainWrapper>
    </>
  );
}

export default Layout;
