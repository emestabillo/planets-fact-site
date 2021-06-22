import Head from "next/head";
import Planet from "../pages/[planet]";
import { PlanetData } from "../data/planets";

const planet = PlanetData.find((planet) => planet.name === "Earth");

export default function Home() {
  return (
    <>
      <Head>
        <title>Planets!</title>
        <meta name="description" content="facts about planets" />
      </Head>
      <Planet planet={planet} />
    </>
  );
}
