import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Hamburger } from "../../assets/icon-hamburger.svg";
import { ReactComponent as Chevron } from "../../assets/icon-chevron.svg";
import PlanetsData from "../../data/data.json";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 85.625rem;
  padding: 1.5625rem 6%;
  align-items: center;
  border-bottom: 1px solid hsla(var(--color-white), 20%);
  position: relative;
  z-index: 3;
`;

const MenuButton = styled.button`
  padding-top: 0.3125rem;
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
  position: fixed;
  z-index: 10;
  top: 8.75rem;
  width: 100vw;
  left: 0;
  padding: 0 6%;
  transition: transform 0.3s cubic-bezier(0, 0.52, 0, 1);
  transform: ${({ showMenu }) =>
    showMenu ? "translate3d(0vw, 0, 0)" : "translate3d(-100vw, 0, 0)"};
`;

const LogoLink = styled.a`
  text-transform: uppercase;
  font-family: "Antonio", sans-serif;
  font-size: 1.75rem;
  letter-spacing: -1.05px;
`;

const NavItems = styled.li`
  text-transform: uppercase;
  padding: 1.25rem 0;
  transition: 0.25s ease;

  &:not(:last-child) {
    border-bottom: 1px solid hsla(var(--color-white), 10%);
  }

  &:hover {
    border-bottom: 1px solid hsla(var(--color-white), 50%);

    svg {
      path {
        opacity: 0.8;
      }
    }
  }
`;

const PlanetLinks = styled.a`
  font-size: 0.9375rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.5625rem;
  letter-spacing: 0.1rem;
  display: flex;
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
      return "var(--color-mercury)";
    } else if (props.index === 1) {
      return "var(--color-venus)";
    } else if (props.index === 2) {
      return "var(--color-earth)";
    } else if (props.index === 3) {
      return "var(--color-mars)";
    } else if (props.index === 4) {
      return "var(--color-jupiter)";
    } else if (props.index === 5) {
      return "var(--color-saturn)";
    } else if (props.index === 6) {
      return "var(--color-uranus)";
    } else {
      return "var(--color-neptune)";
    }
  }};
`;

const Arrow = styled.button`
  margin-left: auto;
`;

const navItems = PlanetsData.map((a) => a.name);

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
      <NavList showMenu={showMenu}>
        {navItems.map((planet, index) => {
          return (
            <NavItems key={index}>
              <PlanetLinks href="/">
                <Circles index={index}></Circles>
                {planet}
                <Arrow>
                  <Chevron />
                </Arrow>
              </PlanetLinks>
            </NavItems>
          );
        })}
      </NavList>
    </Nav>
  );
}

export default Navbar;
