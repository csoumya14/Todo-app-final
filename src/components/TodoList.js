import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../context';
import TodoItem from './TodoItem';
import Button from './Button/ButtonWithText';
import Text from './Text/Text';

const ToList = styled.div`
  margin-top: 1rem;
  background: ${({ theme }) => theme.backgroundColor};
  border-radius: 5px;
  width: 90%;

  box-shadow: ${({ theme }) => theme.boxShadow};
  .number-items-clear-complete {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    width: 55%;
    margin-top: 5rem;
  }
  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    width: 35%;
  }
`;

const TodoList = () => {
  const { todos, clearComplete } = useContext(Context);
  const clearButton = true;
  const dragInstruction = false;
  return (
    <ToList>
      <TodoItem />
      <div className="number-items-clear-complete">
        <Text dragInstruction={dragInstruction}>
          <span>{todos.length}</span> items left
        </Text>
        <Button onClick={() => clearComplete(todos)} clearButton={clearButton}>
          Clear completed
        </Button>
      </div>
    </ToList>
  );
};

export default TodoList;
