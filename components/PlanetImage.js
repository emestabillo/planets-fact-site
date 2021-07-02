import Image from "next/image";
import styled from "styled-components";

const ImageDiv = styled.div`
  padding: 1.5rem 0;
  margin: 0 auto;
`;

function PlanetImage({ name, images, activeTab }) {
  let image;
  let alt;
  if (activeTab === "Overview") {
    image = images.planet;
    alt = `Illustration of ${name}`;
  } else if (activeTab === "Structure") {
    image = images.internal;
    alt = `Illustration of ${name}'s internal structure`;
  } else {
    image = images.geology;
    alt = `Illustration of ${name}'s surface geology`;
  }
  return (
    <ImageDiv name={name}>
      {activeTab === "Geology" && <Image src={images.planet} alt="" />}
      <Image src={image} alt={alt} width={422} height={422} />
    </ImageDiv>
  );
}

export default PlanetImage;
