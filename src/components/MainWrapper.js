import React from "react";
import styled from "styled-components";

const Wrapper = styled.main``;

function MainWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default MainWrapper;
