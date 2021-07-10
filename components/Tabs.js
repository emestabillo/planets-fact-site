import { useState } from "react";
import styled from "styled-components";
import { QUERIES } from "../shared/constants";
import { baseUnderline } from "../shared/helpers";
import { PlanetColors } from "../shared/helpers";
import { Gutters } from "../shared/helpers";
import PlanetImage from "./PlanetImage";

const FlexContainer = styled.div`
  grid-area: tabs;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid hsla(var(--color-white), 20%);
  margin: 0 -6%;
  ${Gutters}

  @media ${QUERIES.tabletAndUp} {
    flex-direction: column;
    border-bottom: revert;
    margin: revert;
    padding: 0 0 2rem 4.375rem;

    & > * + * {
      margin-top: 1rem;
    }
  }
`;

const Heading = styled.h1`
  grid-area: heading;
  font-family: var(--font-family-antonio);
  font-size: clamp(2.5rem, 6vw, 5rem);
  text-transform: uppercase;
  padding-bottom: 1rem;
  order: 2;

  @media ${QUERIES.tabletAndUp} {
    padding-bottom: revert;
  }
`;

const Tab = styled.button`
  color: var(--color-white);
  cursor: pointer;
  padding: 1.25rem 0;
  text-transform: uppercase;
  font-size: 0.5625rem;
  letter-spacing: 0.12rem;
  font-weight: 700;
  opacity: 0.5;
  line-height: 0.625rem;
  ${baseUnderline}

  &::before {
    background-color: ${PlanetColors};

    @media ${QUERIES.tabletAndUp} {
      background-color: revert;
    }
  }

  &:hover,
  &:focus {
    opacity: 1;
  }

  @media ${QUERIES.tabletAndUp} {
    border: 1px solid var(--color-hover);
    text-align: left;
    padding: 0.5rem 0 0.5rem 1.25rem;
    opacity: revert;
    flex: 1;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--color-hover);
      background-clip: padding-box;
    }

    &:focus {
      background-color: ${PlanetColors};
      border-color: ${PlanetColors};
    }
  }
`;
const SpanNumber = styled.span`
  opacity: 0.5;
  display: none;

  @media ${QUERIES.tabletAndUp} {
    display: inline-block;
  } ;
`;

const SpanText = styled.span`
  display: none;
  @media ${QUERIES.tabletAndUp} {
    display: inline-block;
  } ;
`;

const Wrapper = styled.div`
  grid-area: info;

  @media ${QUERIES.tabletAndUp} {
    display: grid;
    grid-template-rows: 11.875rem auto;
  }
`;

const Overview = styled.p`
  font-size: 0.6875rem;
  line-height: 2;
  padding: 0 0.5rem 2rem;
  order: 4;

  @media ${QUERIES.tabletAndUp} {
    padding: 2rem 0 3rem;
    min-height: 10.375rem;
  }
`;

const Source = styled.div`
  font-size: 0.75rem;
  order: 5;
  opacity: 0.5;
  transition: opacity 0.25s ease;
  pointer-events: none;

  &:hover {
    opacity: 1;
  }

  @media ${QUERIES.tabletAndUp} {
    /* font-size: 0.875rem; */
  }

  svg {
    margin-left: 0.25rem;
    vertical-align: middle;

    @media ${QUERIES.tabletAndUp} {
      margin-left: 0.5rem;
    }
  }
`;

const WikiLink = styled.a`
  text-decoration: underline;
  font-weight: 700;
  pointer-events: auto;
`;

const buttons = ["Overview", "Structure", "Geology"];

function Tabs({ name, images, overview, structure, geology }) {
  const [activeTab, setActiveTab] = useState(buttons[0]);

  let planetInfo;
  let wikiSource;

  if (activeTab === "Overview") {
    planetInfo = overview.content;
    wikiSource = overview.source;
  } else if (activeTab === "Structure") {
    planetInfo = structure.content;
    wikiSource = structure.source;
  } else {
    planetInfo = geology.content;
    wikiSource = geology.source;
  }

  return (
    <>
      <Heading>{name}</Heading>
      <PlanetImage name={name} images={images} activeTab={activeTab} />
      <FlexContainer>
        {buttons.map((type, index) => (
          <Tab
            key={type}
            activeTab={activeTab === type}
            onClick={() => setActiveTab(type)}
            name={name}
          >
            <SpanNumber aria-hidden="true">{`0${index + 1}`}</SpanNumber>{" "}
            <SpanText>
              {type === "Structure"
                ? "Internal"
                : type === "Geology"
                ? "Surface"
                : ""}
            </SpanText>{" "}
            {type}
          </Tab>
        ))}
      </FlexContainer>
      <Wrapper>
        <Overview>{planetInfo}</Overview>
        <Source>
          <span>Source : </span>
          <WikiLink href={wikiSource}>
            Wikipedia
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
              <path
                fill="#FFF"
                d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
              />
            </svg>
          </WikiLink>
        </Source>
      </Wrapper>
    </>
  );
}

export default Tabs;
