import { css } from "styled-components";

export const baseUnderline = css`
  position: relative;
  opacity: 0.75;
  transition: opacity var(--transition);

  &:hover {
    opacity: 1;
  }

  &::before {
    position: absolute;
    content: "";
    width: 0;
    left: 50%;
    height: 0.25rem;
    bottom: 0;
    opacity: 0;
    transition: all 0.2s ease;
  }

  &:hover::before {
    opacity: 1;
    width: 100%;
    left: 0;
  }
`;

export const Gutters = css`
  padding-left: 6%;
  padding-right: 6%;
`;
