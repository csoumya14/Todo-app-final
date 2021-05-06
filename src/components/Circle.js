import React from 'react';
import styled from 'styled-components';

const OuterCircle = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  margin-left: 1rem;
  background: ${({ theme }) => theme.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-image: linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    cursor: pointer;
  }
  .circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-top: 0px;
    margin-left: 0rem;
    border: 1px solid hsl(233, 11%, 84%);
    background: ${({ theme }) => theme.backgroundColor};
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    margin-left: 2rem;
  }
`;

const Circle = () => (
  <OuterCircle>
    <div className="circle"></div>
  </OuterCircle>
);

export default Circle;
