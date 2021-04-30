import React from 'react';
import styled from 'styled-components';

const SpanElement = styled.span`
  border: 0;
  padding: 0;
  margin: 0;
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
`;

const VisuallyHiddenSpan = ({ children }) => <SpanElement>{children}</SpanElement>;

export default VisuallyHiddenSpan;
