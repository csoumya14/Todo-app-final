import React from 'react';
import styled from 'styled-components';

const TextLine = styled.p`
  line-height: ${({ dragInstruction }) => (dragInstruction ? '14px' : '12px')};
  font-size: ${({ dragInstruction }) => (dragInstruction ? '14px' : '12px')};
  letter-spacing: ${({ dragInstruction }) => (dragInstruction ? '-0.194444px' : '-0.166667px')};
  margin-left: ${({ dragInstruction }) => (dragInstruction ? '0px' : '24px')};
  color: #9495a5;
`;

const Text = ({ children, dragInstruction }) => (
  <TextLine dragInstruction={dragInstruction}>{children}</TextLine>
);

export default Text;
