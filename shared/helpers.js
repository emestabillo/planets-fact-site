import { css } from "styled-components";

export const baseUnderline = css`
  position: relative;
  transition: opacity 0.2s;

  &::before {
    position: absolute;
    content: "";
    width: 0;
    left: 50%;
    height: 0.25rem;
    bottom: 0;
    opacity: 0;
    transition: opacity 0.2s, width 0.2s, left 0.2s;
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
    width: 100%;
    left: 0;
  }
`;

export const Gutters = css`
  padding-left: 6%;
  padding-right: 6%;
`;

export const PlanetSize = css`
  ${({ name }) => {
    switch (name) {
      case "Mercury":
        return "6.9375rem";
      case "Venus":
        return "9.625rem";
      case "Earth":
        return "10.8125rem";
      case "Mars":
        return "8.0625rem";
      case "Jupiter":
        return "14rem";
      case "Saturn":
        return "16rem";
      case "Uranus":
        return "11rem";
      case "Neptune":
        return "10.8125rem";
    }
  }};
`;
