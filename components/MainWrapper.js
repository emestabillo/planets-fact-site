import styled from "styled-components";
import { Gutters } from "../shared/helpers";
import { QUERIES } from "../shared/constants";

const Wrapper = styled.main`
  ${Gutters}
  text-align: center;
  padding-bottom: 3rem;

  & > svg {
    margin: 0 auto;
    display: block;
  }

  @media ${QUERIES.desktopAndUp} {
    padding: 0 11.5vw;
  }
`;

function MainWrapper({ children }) {
  return <Wrapper id="main">{children}</Wrapper>;
}

export default MainWrapper;
