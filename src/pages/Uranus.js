import React from "react";
import Tabs from "../components/Tabs";
import { PlanetsData } from "../data/data";
import { ReactComponent as OverviewImg } from "../assets/planet-uranus.svg";
import Header from "../components/Header";
import Stats from "../components/Stats";

const Planet = PlanetsData[6];
const { name, overview, rotation, revolution, radius, temperature } = Planet;

function Uranus() {
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

export default Uranus;
