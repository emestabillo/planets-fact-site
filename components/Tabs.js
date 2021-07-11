import { useState } from "react";
import styled from "styled-components";
import { QUERIES } from "../shared/constants";
import { baseUnderline } from "../shared/helpers";
import { PlanetColors } from "../shared/helpers";
import { Gutters } from "../shared/helpers";

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

  @media ${QUERIES.desktopAndUp} {
    padding: 2.5rem 0 0;
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
  /* background-color: ${({ activeTab, PlanetColors }) =>
    activeTab ? PlanetColors : "transparent"}; */
  ${baseUnderline}

  &::before {
    background-color: ${PlanetColors};

    @media ${QUERIES.tabletAndUp} {
      background-color: revert;
    }
  }
  /* &:hover {
    opacity: 1;
  }

  &:focus {

  } */

  &:hover,
  &:focus {
    opacity: 1;
  }

  @media ${QUERIES.tabletAndUp} {
    border: 1px solid var(--color-hover);
    text-align: left;
    line-height: 2.78;
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

  @media ${QUERIES.desktopAndUp} {
    font-size: 0.75rem;
    padding: 12px 0 12px 1.85rem;
    line-height: 2.08;
  }
`;

const SpanNumber = styled.span`
  opacity: 0.5;
  display: none;

  @media ${QUERIES.tabletAndUp} {
    display: inline-block;
  }

  @media ${QUERIES.desktopAndUp} {
    padding-right: 1.75rem;
  }
`;

const SpanText = styled.span`
  display: none;

  @media ${QUERIES.tabletAndUp} {
    display: inline-block;
  } ;
`;

function Tabs({ name, activeTab, setActiveTab }) {
  const buttons = ["Overview", "Structure", "Geology"];
  return (
    <>
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
    </>
  );
}

export default Tabs;
