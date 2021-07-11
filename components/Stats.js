import styled from "styled-components";
import { QUERIES } from "../shared/constants";
import { SRonly } from "../shared/helpers";

const StatsWrapper = styled.section`
  padding-top: 1.75rem;
  text-transform: uppercase;
  max-width: 34.375rem;
  margin: 0 auto;

  @media ${QUERIES.tabletAndUp} {
    padding-top: 2.3125rem;
    max-width: revert;
    margin: revert;
  }

  @media ${QUERIES.desktopAndUp} {
    padding-top: 5.4375rem;
    padding-bottom: 3.5rem;
  } ;
`;

const Heading = styled.h2`
  ${SRonly}
`;

const List = styled.ul`
  & > * + * {
    margin-top: 0.5rem;
  }

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    justify-content: space-between;

    & > * + * {
      margin-left: 0.6875rem;
    }
  }
`;

const ListItem = styled.li`
  font-size: 0.5rem;
  color: hsla(var(--color-white), 0.5);
  font-weight: 700;
  line-height: 2;
  letter-spacing: 0.045625rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5625rem 1.5rem;
  border: 1px solid currentColor;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 0 1.1875rem 0.9375rem;
    margin-top: revert;
    flex: 1;
  }

  @media ${QUERIES.desktopAndUp} {
    font-size: 0.6875rem;
    line-height: 2.27;
    letter-spacing: 0.0625rem;
    padding: 1.25rem 0 1.6875rem 1.5rem;
  } ;
`;

const Fact = styled.span`
  font-family: var(--font-family-antonio);
  color: hsl(var(--color-white));
  font-size: clamp(1.25rem, 3vw, 2.5rem);
  line-height: 1.3;
  letter-spacing: 0.047rem;

  @media ${QUERIES.tabletAndUp} {
    padding-top: 0.375rem;
  }

  @media ${QUERIES.desktopAndUp} {
    letter-spacing: -0.09375rem;
    padding-top: 0.25rem;
  } ;
`;

function Stats({ rotation, revolution, radius, temperature }) {
  return (
    <StatsWrapper>
      <Heading>planet statistics</Heading>
      <List>
        <ListItem>
          Rotation time
          <Fact>{rotation}</Fact>
        </ListItem>
        <ListItem>
          Revolution time
          <Fact>{revolution}</Fact>
        </ListItem>
        <ListItem>
          Radius
          <Fact>{radius}</Fact>
        </ListItem>
        <ListItem>
          Average temp
          <Fact>{temperature}</Fact>
        </ListItem>
      </List>
    </StatsWrapper>
  );
}

export default Stats;
