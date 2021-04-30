import React from 'react';
import styled from 'styled-components';
import crossIcon from '../../assets/icon-cross.svg';

const CrossButton = styled.button`
  background-image: url(${crossIcon});
  background-size: cover;
  background-color: transparent;
  visibility: ${({ isCompleted }) => (isCompleted ? 'visible' : 'hidden')};
  border: none;
  width: 11.79px;
  height: 11.79px;
`;

const Button = ({ children, onClick, isCompleted }) => (
  <CrossButton onClick={onClick} isCompleted={isCompleted}>
    {children}
  </CrossButton>
);

export default Button;
