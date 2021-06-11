import React from "react";
import styled from "styled-components";

const FactList = styled.ul``;

const ListItem = styled.li`
  border: 1px solid var(--color-white);
`;

function Stats({ rotation, revolution, radius, temperature }) {
  return (
    <ul>
      <ListItem>
        <span>Rotation time</span>
        <span>{rotation}</span>
      </ListItem>
      <ListItem>
        <span>Revolution time</span>
        <span>{revolution}</span>
      </ListItem>
      <ListItem>
        <span>Radius</span>
        <span>{radius}</span>
      </ListItem>
      <ListItem>
        <span>Average temp</span>
        <span>{temperature}</span>
      </ListItem>
    </ul>
  );
}

export default Stats;
