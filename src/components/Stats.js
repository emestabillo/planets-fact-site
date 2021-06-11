import React from "react";
import styled from "styled-components";

const List = styled.ul`
  padding-top: 1.75rem;
  text-transform: uppercase;
  & > * + * {
    margin-top: 0.5rem;
  }
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5625rem 1.5rem;
  border: 1px solid hsla(var(--color-white), 0.5);
`;

const Heading = styled.h2`
  font-size: 0.5rem;
  color: hsla(var(--color-white), 0.5);
  line-height: 2;
  letter-spacing: 0.045625rem;
`;

const Fact = styled.span`
  font-family: var(--font-family-antonio);
  font-size: 1.25rem;
  line-height: 1.3;
  letter-spacing: 0.047rem;
`;

function Stats({ rotation, revolution, radius, temperature }) {
  return (
    <List>
      <ListItem>
        <Heading>Rotation time</Heading>
        <Fact>{rotation}</Fact>
      </ListItem>
      <ListItem>
        <Heading>Revolution time</Heading>
        <Fact>{revolution}</Fact>
      </ListItem>
      <ListItem>
        <Heading>Radius</Heading>
        <Fact>{radius}</Fact>
      </ListItem>
      <ListItem>
        <Heading>Average temp</Heading>
        <Fact>{temperature}</Fact>
      </ListItem>
    </List>
  );
}

export default Stats;
