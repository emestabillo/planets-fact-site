import React from "react";
import styled from "styled-components";

const ContainerDiv = styled.div`
  padding: 1.5625rem 6%;
`;

function Container({ children }) {
  return <div>{children}</div>;
}

export default Container;
