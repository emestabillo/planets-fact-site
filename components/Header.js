import styled from "styled-components";
import Tabs from "../components/Tabs";
import { QUERIES } from "../shared/constants";

const Wrapper = styled.header`
  display: grid;
  grid-template-areas: "tabs" "image" "heading" "info";

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "image image" "heading ." "info tabs";
    text-align: left;
  }

  @media ${QUERIES.desktopAndUp} {
    padding-top: 126px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "image image heading" "image image info" "image image tabs";
  }
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
