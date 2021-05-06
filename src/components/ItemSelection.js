import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../context';
import Button from './Button/ButtonWithText';

const SelectionButtons = styled.div`
  display:flex:
  flex-direction:row;
  width: 90vw;
  height: 48px;
  border: none;
  margin-top: 1rem;
  background: ${({ theme }) => theme.backgroundColor};
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  
  display:flex;
  justify-content:center;
  align-items:center;
  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    margin-top: -5rem;
    width: 55%;
    justify-content: center;
  }
  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    width: 10%;
    margin-top:-3rem;
  }
  
`;

const ItemSelection = () => {
  const { setState } = useContext(Context);
  const clearButton = false;

  return (
    <SelectionButtons>
      <Button onClick={() => setState(0)} clearButton={clearButton}>
        All
      </Button>
      <Button onClick={() => setState(1)} clearButton={clearButton}>
        Active
      </Button>
      <Button onClick={() => setState(2)} clearButton={clearButton}>
        Completed
      </Button>
    </SelectionButtons>
  );
};

export default ItemSelection;
