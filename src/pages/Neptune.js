import React from "react";
import styled from "styled-components";
import Tabs from "../components/Tabs";
import data from "../data/data.json";
import { ReactComponent as OverviewImg } from "../assets/planet-neptune.svg";
import { ReactComponent as Source } from "../assets/icon-source.svg";
import Stats from "../components/Stats";
import { Wrapper } from "../components/Container";

const Planet = data[7];

const Neptune = () => {
  // const [selectedPlanet, setSelectedPlanet] = useState(0);
  const { name, overview, rotation, revolution, radius, temperature } = Planet;
  console.log(Planet);
  return (
    <Wrapper>
      <Tabs />
      <OverviewImg />
      <div>
        <h1>{name}</h1>
        <p>{overview.content}</p>
        <div>
          <span>Source: </span>
          <a href={overview.source}>Wikipedia</a>
          <Source />
        </div>
      </div>
      <Stats
        rotation={rotation}
        revolution={revolution}
        radius={radius}
        temperature={temperature}
      />
    </Wrapper>
  );
};

export default Neptune;
