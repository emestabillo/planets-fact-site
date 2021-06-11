import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  /* padding: 1.5625rem 6%; */
  padding-left: 6%;
  padding-right: 6%;
`;

export const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
