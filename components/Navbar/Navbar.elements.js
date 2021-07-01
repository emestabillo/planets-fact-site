import styled from "styled-components";
import { QUERIES } from "../../shared/constants";
import { baseUnderline } from "../../shared/helpers";
import { Gutters } from "../../shared/helpers";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  /* max-width: 85.625rem; */
  padding-top: 1.5625rem;
  padding-bottom: 1.5625rem;
  align-items: center;
  border-bottom: 1px solid hsla(var(--color-white), 20%);
  position: relative;
  z-index: 3;
  ${Gutters}

  @media ${QUERIES.tabletAndUp} {
    flex-direction: column;
  }

  @media ${QUERIES.desktopAndUp} {
    flex-direction: revert;
  }
`;

export const LogoLink = styled.a`
  text-transform: uppercase;
  font-family: "Antonio", sans-serif;
  font-size: 1.75rem;
  letter-spacing: -1.05px;

  @media ${QUERIES.tabletAndUp} {
    padding-bottom: 2.5rem;
  }

  @media ${QUERIES.desktopAndUp} {
    flex-shrink: 0;
    padding: 0;
  }
`;

export const MenuButton = styled.button`
  padding-top: 0.3125rem;

  svg {
    height: 1.0625rem;
  }

  &:hover,
  &:focus {
    svg {
      fill: hsl(var(--color-white), 0.25);
    }
  }

  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

export const NavList = styled.ul`
  position: fixed;
  z-index: 10;
  top: 6.8125rem;
  width: 100vw;
  background-color: var(--color-background);
  padding: 0 6%;
  opacity: ${({ showMenu }) => (showMenu ? "1" : "0")};
  left: ${({ showMenu }) => (showMenu ? "0" : "100vw")};

  transition: all 0.5s ease-in-out;

  @media ${QUERIES.tabletAndUp} {
    position: revert;
    transform: revert;
    background-color: transparent;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    opacity: revert;
  }

  @media ${QUERIES.desktopAndUp} {
    justify-content: flex-end;

    & > * + * {
      margin-left: 2.3vw;
    }
  }
`;

export const NavItems = styled.li`
  text-transform: uppercase;
  padding: 1.25rem 0;
  transition: 0.25s ease;

  @media ${QUERIES.tabletAndUp} {
    padding: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid hsl(var(--color-white), 0.1);

    @media ${QUERIES.tabletAndUp} {
      border-bottom: revert;
    }
  }

  svg {
    margin-left: auto;
    @media ${QUERIES.tabletAndUp} {
      display: none;
    }
  }

  &:hover {
    border-bottom: 1px solid hsl(var(--color-white), 0.5);

    svg {
      path {
        opacity: 0.8;
      }
    }
    @media ${QUERIES.tabletAndUp} {
      border-bottom: revert;
    }
  }
`;

export const PlanetLinks = styled.a`
  ${baseUnderline}
  font-size: 0.9375rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.5625rem;
  letter-spacing: 0.1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  opacity: 0.75;
  transition: opacity var(--transition);

  &:hover {
    opacity: 1;
  }

  @media ${QUERIES.tabletAndUp} {
    font-size: 0.6875rem;
    position: relative;

    &::before {
      height: 0.25rem;
      bottom: -1.6rem;
      background-color: ${({ planet }) => {
        switch (planet) {
          case "Mercury":
            return "var(--color-mercury-main)";
          case "Venus":
            return "var(--color-venus-main)";
          case "Earth":
            return "var(--color-earth-main)";
          case "Mars":
            return "var(--color-mars-main)";
          case "Jupiter":
            return "var(--color-jupiter-main)";
          case "Saturn":
            return "var(--color-saturn-main)";
          case "Uranus":
            return "var(--color-uranus-main)";
          case "Neptune":
            return "var(--color-neptune-main)";
        }
      }};
    }
  }

  @media ${QUERIES.desktopAndUp} {
    &::before {
      top: -2.025rem;
      bottom: revert;
    }
  }
`;

export const Circles = styled.span`
  width: 1.75rem;
  height: 1.75rem;
  display: inline-block;
  margin-right: 1.5625rem;
  border-radius: 50%;
  background-color: ${({ planet }) => {
    switch (planet) {
      case "Mercury":
        return "var(--color-mercury-menu)";
      case "Venus":
        return "var(--color-venus-menu)";
      case "Earth":
        return "var(--color-earth-menu)";
      case "Mars":
        return "var(--color-mars-menu)";
      case "Jupiter":
        return "var(--color-jupiter-menu)";
      case "Saturn":
        return "var(--color-saturn-menu)";
      case "Uranus":
        return "var(--color-uranus-menu)";
      case "Neptune":
        return "var(--color-neptune-menu)";
    }
  }};

  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;