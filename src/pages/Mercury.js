import React, { useState } from "react";
import styled from "styled-components";
import Tabs from "../components/Tabs";
import data from "../data/data.json";
import { ReactComponent as OverviewImg } from "../assets/planet-mercury.svg";
import { ReactComponent as Source } from "../assets/icon-source.svg";

const PlanetMercury = data[0];
// const { name } = PlanetMercur                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     y[planet];

const Image = styled.div`
  svg {
    margin: 0 auto;
    display: block;
  }
`;

const Mercury = () => {
  const [planet, setPlanet] = useState(0);
  console.log(PlanetMercury);
  return (
    <div>
      <Tabs />
      <Image>
        <OverviewImg />
      </Image>
      <span>Source:</span>
      <a href={PlanetMercury.overview.source}>Wikipedia</a>
      <Source />
      <h1>{PlanetMercury.name}</h1>
      <p>{PlanetMercury.overview.content}</p>
      <ul>
        <li>
          <span>Rotation time</span>
          <span>{PlanetMercury.rotation}</span>
        </li>
        <li>
          <span>Revolution time</span>
          <span>{PlanetMercury.revolution}</span>
        </li>
        <li>
          <span>Radius</span>
          <span>{PlanetMercury.radius}</span>
        </li>
        <li>
          <span>Average temp</span>
          <span>{PlanetMercury.temperature}</span>
        </li>
      </ul>
    </div>
  );
};

export default Mercury;
