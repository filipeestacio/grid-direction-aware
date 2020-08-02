import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSquare = styled.div`
  width: ${(props) => props.size || '200px'};
  height: ${(props) => props.size || '200px'};
  border: 1px solid black;
  background: ${(props) => (props.movement === 'inTop' ? 'red' : '')};
`;

const TextBox = styled.div.attrs((props) => ({
  duration: '300ms',
  timingFn: 'ease',
  turquoise: '#1ABC9C',
  wetAsphalt: '#34495E',
  midnightBlue: '#2C3E50',
  clouds: '#ECF0F1',
}))`
  transform: rotate3d(1, 0, 0, 90deg);

  width: 100%;
  height: 100%;
  padding: 20px;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 4px;
  pointer-events: none;
  background-color: transparentize(${(props) => props.turquoise}, 0.1);
`;

export const Square = ({ size }) => {
  const [direction, setDirection] = useState();

  const getDirection = (event) => {
    const item = event.currentTarget;

    const cursor = { x: event.pageX, y: event.pageY };
    const center = {
      x: item.offsetLeft + item.offsetWidth / 2,
      y: item.offsetTop + item.offsetHeight / 2,
    };

    const deltaX = cursor.x - center.x;
    const deltaY = cursor.y - center.y;

    // Calculates the angle theta
    const theta = (Math.atan2(deltaX, deltaY) * 180) / Math.PI;

    // Works out the direction of the cursor based on the quadrant of theta
    return Math.abs(theta) >= 135
      ? 'top'
      : Math.abs(theta) <= 45
      ? 'bottom'
      : theta > 0
      ? 'left'
      : theta < 0
      ? 'right'
      : null;
  };

  const mouseAction = (event) => {
    setDirection(`${event.type}-${getDirection(event)}`);
  };

  return (
    <StyledSquare
      size={size}
      onMouseEnter={(event) => mouseAction(event)}
      onMouseLeave={(event) => mouseAction(event)}
    >
      {direction}
      <TextBox>Caption goes here</TextBox>
    </StyledSquare>
  );
};
