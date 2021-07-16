import Image from "next/image";
import styled from "styled-components";
import { QUERIES } from "../shared/constants";
import { PlanetSize } from "../shared/helpers";
import { motion, AnimatePresence } from "framer-motion";
import { item } from "./MainWrapper";

const Wrapper = styled.div`
  padding: 1.5rem 0;
  margin: 0 auto;
  height: 19rem;
  display: flex;
  align-items: center;
  position: relative;
  grid-area: image;

  @media ${QUERIES.tabletAndUp} {
    padding: 15rem 0;
  }

  @media ${QUERIES.desktopAndUp} {
    min-height: 100%;
  } ;
`;

const ImageDiv = styled(motion.div)`
  position: relative;
  width: ${PlanetSize};
  height: ${PlanetSize};

  @media ${QUERIES.tabletAndUp} {
    transform: scale(1.65);
  }

  @media ${QUERIES.desktopAndUp} {
    transform: scale(2.6);
  } ;
`;

const SmallImage = styled(motion.div)`
  position: absolute;
  bottom: ${({ name }) =>
    name === "Mercury" ? "15%" : name === "Jupiter" ? "0" : "12%"};
  width: 6.125rem;
  height: 7.5rem;
  margin: 0 auto;
  left: 0;
  right: 0;

  @media ${QUERIES.desktopAndUp} {
    transform: scale(1.65);
    bottom: 10%;
  } ;
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
      <AnimatePresence exitBeforeEnter>
        <ImageDiv
          key={name}
          variants={item}
          name={name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Image
            src={activeTab === "Geology" ? images.planet : image}
            alt={activeTab === "Geology" ? "" : alt}
            layout="responsive"
            objectFit="cover"
          />
        </ImageDiv>
        {activeTab === "Geology" && (
          <AnimatePresence>
            <SmallImage
              name={name}
              key={name}
              name={name}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.4, delay: 0.2 },
              }}
              exit={{ opacity: 0 }}
            >
              <Image src={image} alt={alt} width={163} height={199} />
            </SmallImage>
          </AnimatePresence>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}

export default PlanetImage;
