import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  & > svg {
    margin: 0 auto;
    display: block;
  }
`;

function MainWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default MainWrapper;
