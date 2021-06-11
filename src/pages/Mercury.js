import React, { useState } from "react";
import styled from "styled-components";
import Tabs from "../components/Tabs";
import data from "../data/data.json";
import { ReactComponent as OverviewImg } from "../assets/planet-mercury.svg";
import { ReactComponent as Source } from "../assets/icon-source.svg";
import Stats from "../components/Stats";

const Planet = data[0];

// const Image = styled.div`
//   svg {
//     margin: 0 auto;
//     display: block;
//   }
// `;

const Mercury = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(0);
  const { name, overview, rotation, revolution, radius, temperature } = Planet;
  console.log(Planet);
  return (
    <>
      <Tabs />
      <OverviewImg />
      <span>Source:</span>
      <a href={overview.source}>Wikipedia</a>
      <Source />
      <h1>{name}</h1>
      <p>{overview.content}</p>
      <Stats
        rotation={rotation}
        revolution={revolution}
        radius={radius}
        temperature={temperature}
      />
    </>
  );
};

export default Mercury;
