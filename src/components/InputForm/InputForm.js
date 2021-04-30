import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../context';
import Form from '../Input/InputForm';
import Circle from '../Circle';

const InputElement = styled.div`
  margin-left: 24px;
  margin-top: 40px;
  width: 90vw;
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.backgroundColor};
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  border-radius: 5px;
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
