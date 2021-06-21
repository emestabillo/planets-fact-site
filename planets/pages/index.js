import Head from "next/head";
import Link from "next/link";
import { PlanetData } from "../data/planets";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Planets!</title>
        <meta name="description" content="facts about planets" />
      </Head>
      {PlanetData.map((planet) => (
        <Link href={`/${planet.name}`}>
          <h2>{planet.name}</h2>
        </Link>
      ))}
    </div>
  );
}
