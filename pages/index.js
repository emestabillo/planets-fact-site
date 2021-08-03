import Head from "next/head";
import { PlanetData } from "../data/planets";
import Planet from "../pages/[planet]";

const planet = PlanetData.find((planet) => planet.name === "Earth");

export default function Home() {
  return (
    <>
      <Head>
        <title>Planets Fact Site</title>
        <meta name="description" content="facts about planets" />
      </Head>
    </>
  );
}
