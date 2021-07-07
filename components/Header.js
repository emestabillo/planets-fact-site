import styled from "styled-components";
import Tabs from "../components/Tabs";
import { QUERIES } from "../shared/constants";

const Wrapper = styled.header`
  display: grid;
  grid-template-areas: "tabs" "image" "heading" "info";

  /* @media ${QUERIES.tabletAndUp} {
    grid-template-areas: "image image" "heading ." "info tabs";
  } */
`;

function Header({ name, images, overview, structure, geology, activeTab }) {
  return (
    <Wrapper>
      <Tabs
        name={name}
        images={images}
        activeTab={activeTab}
        overview={overview}
        structure={structure}
        geology={geology}
      />
    </Wrapper>
  );
}

export default Header;
