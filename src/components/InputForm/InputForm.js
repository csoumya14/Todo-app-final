import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../context';
import Form from '../Input/InputFormElement';
import Circle from '../Circle';

const InputElement = styled.div`
  margin-top: 1rem;
  width: 90vw;
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.backgroundColor};
  justify-content: space-around;
  align-items: center;
  box-shadow: ${({ theme }) => theme.boxShadow};

  border-radius: 5px;
  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    width: 55%;
    justify-content: flex-start;
    margin-top: 2rem;
  }
  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    width: 35%;
  }
`;

const InputForm = () => {
  const { newTask, addTodo, handleTaskChange } = useContext(Context);

  return (
    <InputElement>
      <Circle />
      <Form newTask={newTask} addTodo={addTodo} handleTaskChange={handleTaskChange} />
    </InputElement>
  );
};
export default InputForm;
