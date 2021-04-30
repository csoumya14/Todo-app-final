import React from 'react';
import styled from 'styled-components';
import checkIcon from '../../assets/icon-check.svg';

const RoundButton = styled.button`
  background-image: url(${checkIcon}),
    linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
  background: ${({ isCompleted }) => (isCompleted ? '' : 'transparent')};
  background-size: fit;
  background-position: center;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid hsl(233, 11%, 84%);
`;

const Button = ({ children, onClick, isCompleted }) => (
  <RoundButton onClick={onClick} isCompleted={isCompleted}>
    {children}
  </RoundButton>
);

export default Button;
