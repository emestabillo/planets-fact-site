import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  padding: 1.5625rem 6%;
`;

function MainWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default MainWrapper;
