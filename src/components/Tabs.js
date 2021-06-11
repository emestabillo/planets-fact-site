import React from "react";
import styled from "styled-components";
import { baseUnderline } from "../shared/helpers";
import { Gutters } from "../shared/helpers";

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid hsla(var(--color-white), 20%);
  margin: 0 -7%;
  ${Gutters}
`;

const Tab = styled.button`
  ${baseUnderline}
  color: var(--color-white);
  cursor: pointer;
  padding: 1.25rem 0;

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
    <FlexContainer>
      <Tab>Overview</Tab>
      <Tab>Structure</Tab>
      <Tab>Surface</Tab>
    </FlexContainer>
  );
}

export default Tabs;
