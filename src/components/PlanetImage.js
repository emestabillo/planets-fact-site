import React from "react";

function PlanetImage({ source, planet }) {
  return (
    <div>
      <img src={source} alt={`${planet} geology`} />
    </div>
  );
}

export default PlanetImage;
