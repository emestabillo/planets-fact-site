import React from "react";
import Tabs from "../components/Tabs";
import { PlanetsData } from "../data/data";
import { ReactComponent as OverviewImg } from "../assets/planet-mars.svg";
import Header from "../components/Header";
import Stats from "../components/Stats";

const Planet = PlanetsData[3];
const { name, overview, rotation, revolution, radius, temperature } = Planet;

function Mars() {
  return (
    <>
      <Header name={name} overview={overview} />
      <Tabs />
      <OverviewImg />
      <Stats
        rotation={rotation}
        revolution={revolution}
        radius={radius}
        temperature={temperature}
      />
    </>
  );
}

export default Mars;
