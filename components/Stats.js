import styled from "styled-components";
import { QUERIES } from "../shared/constants";

const StatsWrapper = styled.section`
  /* grid-area: stats; */
`;

const List = styled.ul`
  padding-top: 1.75rem;
  text-transform: uppercase;

  & > * + * {
    margin-top: 0.5rem;
  }

  @media ${QUERIES.tabletAndUp} {
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
`;

const Fact = styled.span`
  font-family: var(--font-family-antonio);
  color: hsl(var(--color-white));
  font-size: 1.25rem;
  line-height: 1.3;
  letter-spacing: 0.047rem;
`;

function Stats({ rotation, revolution, radius, temperature }) {
  return (
    <StatsWrapper>
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
