import React from "react";
import Tabs from "../components/Tabs";
import data from "../data/data.json";
import { ReactComponent as OverviewImg } from "../assets/planet-mars.svg";
import Header from "../components/Header";
import Stats from "../components/Stats";

const Planet = data[3];

const Mars = () => {
  const { name, overview, rotation, revolution, radius, temperature } = Planet;

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
};

export default Mars;
