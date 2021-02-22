import React from 'react';
import styled from 'styled-components';
import img from '../assets/bg-mobile-light.jpg';

const Container = styled.div`
  background-image: url(${img});
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
/*background-image: url(${backgroundImg});

*/
