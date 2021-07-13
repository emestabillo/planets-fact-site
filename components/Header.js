import { useState } from "react";
import styled from "styled-components";
import Tabs from "../components/Tabs";
import PlanetInfo from "./PlanetInfo";
import PlanetImage from "./PlanetImage";
import { QUERIES } from "../shared/constants";
import { motion } from "framer-motion";

const Wrapper = styled.header`
  display: grid;
  grid-template-areas: "tabs" "image" "heading" "info";

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "image image" "heading ." "info tabs";
    text-align: left;
  }

  @media ${QUERIES.desktopAndUp} {
    padding-top: 6.875rem;
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas: "image image image heading heading" "image image image info info" "image image image tabs tabs";
    column-gap: 3rem;
  }
`;

const Heading = styled(motion.h1)`
  grid-area: heading;
  font-family: var(--font-family-antonio);
  font-size: clamp(2.5rem, 6vw, 5rem);
  text-transform: uppercase;
  padding-bottom: 1rem;
  order: 2;

  @media ${QUERIES.tabletAndUp} {
    padding-bottom: revert;
  }

  @media ${QUERIES.desktopAndUp} {
    padding-bottom: 1.4375rem;
  }
`;

function Header({ name, images, overview, structure, geology }) {
  const buttons = ["Overview", "Structure", "Geology"];
  const [activeTab, setActiveTab] = useState(buttons[0]);

  return (
    <Wrapper>
      <Heading
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
        layoutId="title"
      >
        {name}
      </Heading>
      <PlanetImage name={name} images={images} activeTab={activeTab} />
      <PlanetInfo
        activeTab={activeTab}
        overview={overview}
        structure={structure}
        geology={geology}
      />
      <Tabs
        name={name}
        images={images}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </Wrapper>
  );
}

export default Header;
