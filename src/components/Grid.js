import React from 'react';
import styled from 'styled-components';
import { Square } from './Square';

const StyledGrid = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
`;

export const Grid = () => {
  return (
    <StyledGrid>
      <Square
        size="300px"
        infoTitle="I am a title"
        infoText="Lorem ipsum dolor sit amet, consectetur adipiscing"
      >
        Hello!
      </Square>
      <Square size="100px"></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
    </StyledGrid>
  );
};
