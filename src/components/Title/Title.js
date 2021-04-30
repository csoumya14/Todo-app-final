import React from 'react';
import styled from 'styled-components';

const HeadingText = styled.h1`
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 18px;
`;

const Title = props => <HeadingText>{props.text}</HeadingText>;

export default Title;
