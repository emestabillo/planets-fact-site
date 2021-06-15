import React from "react";
import Tabs from "../components/Tabs";
import { PlanetsData } from "../data/data";
import { ReactComponent as OverviewImg } from "../assets/planet-jupiter.svg";
import overviewImg from "../assets/planet-saturn.svg";
import Header from "../components/Header";
import Stats from "../components/Stats";

const Planet = PlanetsData[4];
const { name, overview, rotation, revolution, radius, temperature } = Planet;

function Jupiter() {
  return (
    <>
      <Header name={name} overview={overview} />
      <Tabs />
      <div>
        <img src={overviewImg} alt={`${name} geology`} />
      </div>
      <Stats
        rotation={rotation}
        revolution={revolution}
        radius={radius}
        temperature={temperature}
      />
    </>
  );
}

export default Jupiter;
