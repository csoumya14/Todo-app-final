import React from 'react';
import styled from 'styled-components';

const ButtonElement = styled.button`
  border: none;
  background: transparent;
  font-size: ${({ clearButton }) => (clearButton ? '12px' : '14px')};
  line-height: ${({ clearButton }) => (clearButton ? '12px' : '14px')}
  margin-right: ${({ clearButton }) => (clearButton ? '24px' : '0px')}
  letter-spacing: ${({ clearButton }) => (clearButton ? '-0.166667px' : '-0.194444px')};
  color: #9495a5;
  font-family: inherit;
`;

const Button = ({ children, onClick, clearButton }) => (
  <ButtonElement onClick={onClick} clearButton={clearButton}>
    {children}
  </ButtonElement>
);

export default Button;
