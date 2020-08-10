import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const overlayMotion = {};

overlayMotion.inTop = keyframes`0% {height: 0; bottom: 100%;} 100% { height: 100%; bottom: 0;}`;
overlayMotion.inRight = keyframes`0% {width: 0; left: 100%;} 100% {width: 100%; left: 0;}`;
overlayMotion.inBottom = keyframes`0% {height: 0;} 100% {height: 100%;}`;
overlayMotion.inLeft = keyframes`0% {width: 0;} 100% {width: 100%;}`;
overlayMotion.outTop = keyframes`0% {height: 100%; bottom: 0;} 100% {height: 0; bottom: 100%}`;
overlayMotion.outRight = keyframes`0% {width: 100%; left: 0;} 100% {width: 0; left: 100%;}`;
overlayMotion.outBottom = keyframes`0% {height: 100%;} 100% {height: 0;}`;
overlayMotion.outLeft = keyframes`0% {width: 100%;} 100% {width: 0;}`;

const getOverlayMotion = (action, direction) => {
  switch (action) {
    case 'enter':
      switch (direction) {
        case 'top':
          return overlayMotion.inTop;
        case 'right':
          return overlayMotion.inRight;
        case 'bottom':
          return overlayMotion.inBottom;
        case 'left':
          return overlayMotion.inLeft;
        default:
          return '';
      }
    case 'leave':
      switch (direction) {
        case 'top':
          return overlayMotion.outTop;
        case 'right':
          return overlayMotion.outRight;
        case 'bottom':
          return overlayMotion.outBottom;
        case 'left':
          return overlayMotion.outLeft;
        default:
          return '';
      }
    default:
      return '';
  }
};

const animation = ({ action, direction }) => css`
  ${getOverlayMotion(action, direction)} 0.3s ease forwards;
`;

const Container = styled.div`
  position: relative;
  width: ${(props) => props.size || '200px'};
  height: ${(props) => props.size || '200px'};
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const Overlay = styled.div`
  position: absolute;
  background-color: rgba(255,0,0,0.5);;
  overflow: hidden;
  height: 0;
  width: 0;
  ${(props) => props.initialPosition}
  animation: ${animation};
`;

const Text = styled.div`
  color: white;
  font-size: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const Square = ({ size, caption = {}, src }) => {
  const [direction, setDirection] = useState('');
  const [action, setAction] = useState('');

  const handleMouseEnter = (event) => {
    setDirection(getDirection(event));
    setAction(getAction(event));
  };

  const handleMouseLeave = (event) => {
    setDirection(getDirection(event));
    setAction(getAction(event));
  };

  const getAction = (event) => {
    switch (event.type) {
      case 'mouseleave':
        return 'leave';
      case 'mouseenter':
        return 'enter';
      default:
        return '';
    }
  };

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
      ? 'right'
      : theta < 0
      ? 'left'
      : null;
  };

  const getInitialPosition = (direction) => {
    switch (direction) {
      case 'top':
        return `bottom: 100%; left: 0; right: 0; width: 100%; height: 0;`;
      case 'right':
        return `bottom: 0; left: 100%; right: 0; width: 0; height: 100%;`;
      case 'bottom':
        return `bottom: 0; left: 0; right: 0; width: 100%; height: 0;`;
      case 'left':
        return 'bottom: 0; left: 0; right: 0; width: 0; height: 100%;';
      default:
        return '';
    }
  };

  return (
    <Container
      size={size}
      src={src}
      onMouseEnter={(event) => handleMouseEnter(event)}
      onMouseLeave={(event) => handleMouseLeave(event)}
    >
      <Image src={src}></Image>
      <Overlay
        initialPosition={getInitialPosition(direction)}
        action={action}
        direction={direction}
      >
        <Text>
          {caption.title && <h3>{caption.title}</h3>}
          {caption.text && <p>{caption.text}</p>}
        </Text>
      </Overlay>
    </Container>
  );
};
