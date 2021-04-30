import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-image: ${({ theme }) => theme.mainBackgroundImage};
  background-color: ${({ theme }) => theme.mainBackgroundColor};
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Background = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Background;
