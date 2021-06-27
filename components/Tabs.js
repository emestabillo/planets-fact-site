import { useState } from "react";
import styled from "styled-components";
import { baseUnderline } from "../shared/helpers";
import { Gutters } from "../shared/helpers";
import Image from "next/image";

const ImageDiv = styled.div`
  max-width: 25rem;
  margin: 0 auto;
`;

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

function Tabs({ images }) {
  const [active, setActive] = useState(buttons[0]);

  let image;
  if (active === "Overview") {
    image = images.planet;
  } else if (active === "Structure") {
    image = images.internal;
  } else {
    image = images.geology;
  }
  return (
    <>
      <FlexContainer>
        {buttons.map((type) => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))}
      </FlexContainer>
      <ImageDiv>
        {active === "Geology" && <Image src={images.planet} />}
        <Image src={image} />
      </ImageDiv>
    </>
  );
}

export default Tabs;
