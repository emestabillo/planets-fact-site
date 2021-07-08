import Image from "next/image";
import styled from "styled-components";
import { QUERIES } from "../shared/constants";
import { PlanetSize } from "../shared/helpers";

const Wrapper = styled.div`
  padding: 1.5rem 0;
  margin: 0 auto;
  height: 19rem;
  display: flex;
  align-items: center;
  position: relative;
  grid-area: image;

  @media ${QUERIES.tabletAndUp} {
    /* border: 1px solid red; */
    padding: 15rem 0;
  }
`;

const ImageDiv = styled.div`
  position: relative;
  width: ${PlanetSize};
  height: ${PlanetSize};

  @media ${QUERIES.tabletAndUp} {
    transform: scale(1.65);
    /* border: 1px solid pink; */
    /* padding: 3.375rem 0 2.25rem; */
  }
`;

const SmallImage = styled.div`
  position: absolute;
  bottom: 1.25rem;
  width: 98px;
  height: 120px;
  margin: 0 auto;
  left: 0;
  right: 0;
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
    <Wrapper>
      <ImageDiv name={name}>
        <Image
          src={activeTab === "Geology" ? images.planet : image}
          alt={activeTab === "Geology" ? "" : alt}
          layout="responsive"
          objectFit="cover"
        />
      </ImageDiv>
      {activeTab === "Geology" && (
        <SmallImage name={name}>
          <Image src={image} alt={alt} width={163} height={199} />
        </SmallImage>
      )}
    </Wrapper>
  );
}

export default PlanetImage;
