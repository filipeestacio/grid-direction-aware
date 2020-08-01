import React from 'react';
import styled from 'styled-components';

const StyledSquare = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid red;
`;

export const Square = () => {
  return <StyledSquare />;
};
