import React from 'react';
import styled from 'styled-components';

const ButtonElement = styled.button`
  background-image: ${({ theme }) => theme.backgroundImage};
  background-size: cover;
  background-color: transparent;
  border: none;
  width: 19.32px;
  height: 20px;
`;

const Button = ({ children, onClick }) => (
  <ButtonElement onClick={onClick}>{children}</ButtonElement>
);

export default Button;
