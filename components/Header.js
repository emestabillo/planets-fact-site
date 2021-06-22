import styled from "styled-components";
// import { ReactComponent as Source } from "../assets/icon-source.svg";

const Wrapper = styled.header`
  grid-area: header;
`;

const Heading = styled.h1`
  font-family: var(--font-family-antonio);
  font-size: 2.5rem;
  text-transform: uppercase;
  padding-bottom: 1rem;
`;

const Overview = styled.p`
  font-size: 0.6875rem;
  line-height: 2;
  padding-bottom: 2rem;
`;

function Header({ name, overview }) {
  return (
    <Wrapper>
      <Heading>{name}</Heading>
      <Overview>{overview.content}</Overview>
      <div>
        <span>Source: </span>
        <a href={overview.source}>Wikipedia</a>
        {/* <Source /> */}
      </div>
    </Wrapper>
  );
}

export default Header;
