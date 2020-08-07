import React from 'react';
import styled from 'styled-components';
import { Square } from './Square';

const StyledGrid = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: ${(props) => `repeat(4, ${props.squareSize})`};
  grid-template-rows: auto auto;
`;

export const Grid = ({ content, squareSize = '200px' }) => {
  return (
    <StyledGrid squareSize={squareSize}>
      {content.map((item) => (
        <Square
          src={item.src}
          caption={item.caption}
          size={squareSize}
        ></Square>
      ))}
    </StyledGrid>
  );
};
