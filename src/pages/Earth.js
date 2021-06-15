import React from "react";
import Tabs from "../components/Tabs";
import { PlanetsData } from "../data/data";
import { ReactComponent as OverviewImg } from "../assets/planet-earth.svg";
import overviewImg from "../assets/planet-earth.svg";
import Header from "../components/Header";
import Stats from "../components/Stats";

const Planet = PlanetsData[2];
const { name, overview, rotation, revolution, radius, temperature, images } =
  Planet;

function Earth() {
  return (
    <>
      <Header name={name} overview={overview} />
      <Tabs />
      <div>
        <img src={images.planet} alt={`${name} geology`} />
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

export default Earth;
