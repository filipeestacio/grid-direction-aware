import React from 'react';
import styled from 'styled-components';
import { Square } from './Square';

const StyledGrid = styled.div`
  display: grid;
`;

export const Grid = () => {
  return (
    <StyledGrid>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
    </StyledGrid>
  );
};
