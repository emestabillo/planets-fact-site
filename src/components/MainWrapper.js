import React from "react";
import styled from "styled-components";
import { Gutters } from "../shared/helpers";

const Wrapper = styled.main`
  text-align: center;
  padding-bottom: 3rem;

  & > svg {
    margin: 0 auto;
    display: block;
  }
`;

function MainWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default MainWrapper;
