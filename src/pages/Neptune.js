import React from "react";
import styled from "styled-components";
import Tabs from "../components/Tabs";
import { PlanetsData } from "../data/data";
import { ReactComponent as OverviewImg } from "../assets/planet-neptune.svg";
import Header from "../components/Header";
import Stats from "../components/Stats";

const Planet = PlanetsData[7];
const { name, overview, rotation, revolution, radius, temperature } = Planet;

function Neptune() {
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

export default Neptune;
