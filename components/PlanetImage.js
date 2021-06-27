import Image from "next/image";
import styled from "styled-components";

const ImageDiv = styled.div`
  max-width: 25rem;
  margin: 0 auto;
`;

function PlanetImage({ images, active }) {
  let image;
  if (active === "Overview") {
    image = images.planet;
  } else if (active === "Structure") {
    image = images.internal;
  } else {
    image = images.geology;
  }
  return (
    <ImageDiv>
      {active === "Geology" && <Image src={images.planet} />}
      <Image
        src={image}
        alt="Picture of something nice"
        width={650}
        height={750}
        quality={65}
      />
    </ImageDiv>
  );
}

export default PlanetImage;
