import React, { useState } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

const StyledSquare = styled.div`
  width: ${(props) => props.size || '200px'};
  height: ${(props) => props.size || '200px'};
  border: 1px solid black;
  justify-self: center;
  align-self: center;
  background: red;
  perspective: 400px;
`;

const TextBox = styled(animated.div)`
  width: 100%;
  height: 100%;
  background: green;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 4px;
  pointer-events: none;
  h3,
  p {
    margin: 0;
  }
`;

export const Square = ({ size, caption = {} }) => {
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

  const motion = useSpring({
    opacity:
      direction === 'mouseenter-top' ||
      direction === 'mouseenter-right' ||
      direction === 'mouseenter-bottom' ||
      direction === 'mouseenter-left'
        ? 1
        : 0,
  });

  return (
    <StyledSquare
      size={size}
      onMouseEnter={(event) => mouseAction(event)}
      onMouseLeave={(event) => mouseAction(event)}
    >
      <TextBox style={motion}>
        <h3>{caption.title}</h3>
        <p>{caption.text}</p>
      </TextBox>
    </StyledSquare>
  );
};
