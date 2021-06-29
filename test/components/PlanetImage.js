import Image from "next/image";
import styled from "styled-components";

const ImageDiv = styled.div`
  max-width: 422px;
  max-height: 422px;
  margin: 0 auto;
`;

function PlanetImage({ name, images, active }) {
  let image;
  let alt;
  if (active === "Overview") {
    image = images.planet;
    alt = `Illustration of ${name}`;
  } else if (active === "Structure") {
    image = images.internal;
    alt = `Illustration of ${name}'s internal structure`;
  } else {
    image = images.geology;
    alt = `Illustration of ${name}'s surface geology`;
  }
  return (
    <ImageDiv>
      {active === "Geology" && <Image src={images.planet} />}
      <Image src={image} alt={alt} width={422} height={422} quality={65} />
    </ImageDiv>
  );
}

export default PlanetImage;
