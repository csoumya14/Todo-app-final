import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-image: ${({ theme }) => theme.mobileMainBackgroundImage};
  background-color: ${({ theme }) => theme.mainBackgroundColor};
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    background-image: ${({ theme }) => theme.desktopMainBackgroundImage};
    justify-content: flex-start;
  }
`;

const Background = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Background;
