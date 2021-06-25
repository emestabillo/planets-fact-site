import { useState } from "react";
import styled from "styled-components";
import { baseUnderline } from "../shared/helpers";
import { Gutters } from "../shared/helpers";

const FlexContainer = styled.div`
  grid-area: tabs;
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

const buttons = ["Overview", "Structure", "Geology"];

function Tabs() {
  const [active, setActive] = useState(buttons[0]);

  let But;
  if (active === "Overview") {
    But = <p>Overview</p>;
  } else if (active === "Structure") {
    But = <p>STructure</p>;
  } else {
    But = <p>geology</p>;
  }
  return (
    <FlexContainer>
      {buttons.map((type) => (
        <Tab
          key={type}
          active={active === type}
          onClick={() => setActive(type)}
        >
          {type}
          {But}
        </Tab>
      ))}
    </FlexContainer>
  );
}

export default Tabs;
