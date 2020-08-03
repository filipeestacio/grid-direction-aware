import React from 'react';
import styled from 'styled-components';
import { Square } from './Square';

const StyledGrid = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-content: center;
`;

export const Grid = () => {
  return (
    <StyledGrid>
      <Square size="300px">Hello!</Square>
      <Square size="150px"></Square>
      <Square caption={{ title: 'hello', text: 'Lorem' }}></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
    </StyledGrid>
  );
};
