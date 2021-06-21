import { PlanetData } from "../data/planets";

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

export default function Color({ planet }) {
  return (
    <div>
      <h1>{planet.name}</h1>
    </div>
  );
}
