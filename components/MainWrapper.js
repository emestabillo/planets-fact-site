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
    /* height: calc(100vh - 5.8125rem); */
    padding: 0 11.5vw;
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
  }
`;

function MainWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default MainWrapper;
