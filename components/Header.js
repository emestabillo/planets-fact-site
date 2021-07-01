import styled from "styled-components";
import Tabs from "../components/Tabs";

const Wrapper = styled.header`
  display: grid;
  grid-template-areas: "tabs" "image" "heading" "info";
`;

function Header({ name, images, overview, structure, geology, active }) {
  return (
    <Wrapper>
      <Tabs
        name={name}
        images={images}
        active={active}
        overview={overview}
        structure={structure}
        geology={geology}
      />
    </Wrapper>
  );
}

export default Header;
