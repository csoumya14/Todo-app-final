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
  margin-left: 24px;
  display:flex;
  justify-content:center;
  align-items:center;
  
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
