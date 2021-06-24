import { PlanetData } from "../data/planets";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import Stats from "../components/Stats";

export async function getStaticPaths() {
  const paths = PlanetData.map((planet) => ({
    params: { planet: planet.name },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const planet = PlanetData.find((planet) => planet.name === params.planet);
  return { props: { planet } };
}

export default function Planet({ planet }) {
  const { name, overview, revolution, rotation, temperature, radius } = planet;
  return (
    <>
      <Header name={name} overview={overview} />
      <Tabs />
      <Stats
        revolution={revolution}
        temperature={temperature}
        rotation={rotation}
        radius={radius}
      />
    </>
  );
}
