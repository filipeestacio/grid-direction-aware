import React from 'react';
import styled from 'styled-components';
import { Square } from './Square';

const StyledGrid = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: ${(props) => `repeat(4, ${props.squareSize})`};
  grid-template-rows: auto auto;
`;

export const Grid = ({ squareSize = '200px' }) => {
  return (
    <StyledGrid squareSize={squareSize}>
      <Square
        size={squareSize}
        src={'https://via.placeholder.com/200'}
        caption={{ title: 'div1', text: 'caption1' }}
      />
      <Square
        size={squareSize}
        src={'https://via.placeholder.com/200'}
        caption={{ title: 'div2', text: 'caption2' }}
      />
      <Square
        size={squareSize}
        src={'https://via.placeholder.com/200'}
        caption={{ title: 'div3', text: 'caption3' }}
      />
      <Square
        size={squareSize}
        src={'https://via.placeholder.com/200'}
        caption={{ title: 'div4', text: 'caption4' }}
      />
      <Square
        size={squareSize}
        src={'https://via.placeholder.com/200'}
        caption={{ title: 'div5', text: 'caption5' }}
      />
      <Square
        size={squareSize}
        src={'https://via.placeholder.com/200'}
        caption={{ title: 'div6', text: 'caption6' }}
      />
      <Square
        size={squareSize}
        src={'https://via.placeholder.com/200'}
        caption={{ title: 'div7', text: 'caption7' }}
      />
      <Square
        size={squareSize}
        src={'https://via.placeholder.com/200'}
        caption={{ title: 'div8', text: 'caption8' }}
      />
    </StyledGrid>
  );
};
