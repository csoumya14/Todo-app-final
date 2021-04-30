import React from 'react';
import styled from 'styled-components';
import Title from './Title/Title';
import Button from './Button/ThemeChangeButton';
import VisuallyHiddenSpan from './ForAccessibility/SpanElement';

const HeadingAndButton = styled.div`
  display: flex;
  flex-direction: row;
  width: 85%;
  height: 20px;
  justify-content: space-between;
  align-items: center;
  margin-top: 48px;
  margin-left: 26px;
  .visually-hidden {
    border: 0;
    padding: 0;
    margin: 0;
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px);
  }
`;

const Heading = ({ toggleTheme }) => {
  return (
    <HeadingAndButton>
      <Title text="Todo" />
      <Button onClick={toggleTheme}>
        {' '}
        <VisuallyHiddenSpan>Click button to toggle theme</VisuallyHiddenSpan>
      </Button>
    </HeadingAndButton>
  );
};

export default Heading;
