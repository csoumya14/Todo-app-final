import React from 'react';
import styled from 'styled-components';
import moonIcon from '../assets/icon-moon.svg';

const HeadingAndButton = styled.div`
  display: flex;
  flex-direction: row;
  width: 85%;
  height: 20px;
  justify-content: space-between;
  align-items: center;
  margin-top: 48px;
  margin-left: 26px;

  .heading-element {
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 18px;
  }
  .button-element {
    background-image: ${({ theme }) => theme.backgroundImage};
    background-size: cover;
    background-color: transparent;
    border: none;
    width: 19.32px;
    height: 20px;
  }
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
      <h1 className="heading-element">todo</h1>
      <button className="button-element" onClick={toggleTheme}>
        {' '}
        <span className="visually-hidden">Click button to display details</span>
      </button>
    </HeadingAndButton>
  );
};

export default Heading;
