import { PlanetData } from "../data/planets";
import Planet from "../pages/[planet]";

const planet = PlanetData.find((planet) => planet.name === "Earth");

export default function Home() {
  return (
    <>
      <Planet planet={planet} />
    </>
  );
}
