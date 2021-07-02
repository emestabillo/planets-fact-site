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
