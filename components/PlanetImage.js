import Image from "next/image";
import styled from "styled-components";

const ImageDiv = styled.div`
  max-width: 25rem;
  margin: 0 auto;
`;

function PlanetImage({ images }) {
  return (
    <ImageDiv>
      <Image src={images.planet} layout="fill" />
    </ImageDiv>
  );
}

export default PlanetImage;
