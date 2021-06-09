import React from "react";
import styled from "styled-components";
import { baseUnderline } from "../shared/helpers";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid hsla(var(--color-white), 20%);
`;

const Tab = styled.button`
  ${baseUnderline}
  color: var(--color-white);
  cursor: pointer;
  padding-bottom: 1.25rem;

  &::before {
    background-color: var(--color-mercury-main);
  }

  &:hover::before {
    opacity: 1;
    width: 100%;
  }
`;

function Tabs() {
  return (
    <Wrapper>
      <Tab>Overview</Tab>
      <Tab>Structure</Tab>
      <Tab>Surface</Tab>
    </Wrapper>
  );
}

export default Tabs;
