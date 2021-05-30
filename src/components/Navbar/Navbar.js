import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Hamburger } from "../../assets/icon-hamburger.svg";
import { ReactComponent as Chevron } from "../../assets/icon-chevron.svg";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 85.625rem;
  padding: 1.5625rem 5%;
  align-items: center;
  border-bottom: 1px solid hsla(var(--color-white), 20%);
  position: relative;
  z-index: 3;
`;

const MenuButton = styled.button`
  /* svg {
    fill: ${({ showMenu }) =>
    showMenu ? "hsla(var(--color-white), 25%)" : "hsl(var(--color-white))"};
  } */
  &:hover,
  &:focus {
    svg {
      fill: hsla(var(--color-white), 25%);
    }
  }
`;

const NavList = styled.ul`
  position: absolute;
  top: 8.75rem;
  width: 100vw;
  right: 0;
  padding: 0 5%;
`;

const LogoLink = styled.a`
  text-transform: uppercase;
  font-family: "Antonio", sans-serif;
  font-size: 1.75rem;
  letter-spacing: -1.05px;
`;

const NavItems = styled.li`
  text-transform: uppercase;
  border-bottom: 1px solid hsla(var(--color-white), 10%);
  padding: 1.25rem 0;
`;

const PlanetLinks = styled.a`
  font-size: 0.9375rem;
  font-weight: 700;
  line-height: 1.5625rem;
  letter-spacing: 0.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Circles = styled.span`
  width: 1.75rem;
  height: 1.75rem;
  display: inline-block;
  margin-right: 1.5625rem;
  border-radius: 50%;
  background-color: ${(props) => {
    if (props.index === 0) {
      return "red";
    } else {
      return "green";
    }
  }};
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

const navItems = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  console.log(showMenu);
  return (
    <Nav>
      <LogoLink href="/">The planets</LogoLink>
      <MenuButton onClick={toggleMenu}>
        <Hamburger />
      </MenuButton>
      <NavList>
        {navItems.map((planet, index) => {
          return (
            <NavItems key={index}>
              <PlanetLinks href="/">
                <ItemContainer>
                  <Circles></Circles>
                  {planet}
                </ItemContainer>
                <button>
                  <Chevron />
                </button>
              </PlanetLinks>
            </NavItems>
          );
        })}
      </NavList>
    </Nav>
  );
}

export default Navbar;
