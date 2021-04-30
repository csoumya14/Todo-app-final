import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../context';
import TodoItem from './TodoItem';
import Button from './Button/ButtonWithText';
import Text from './Text/Text';

const ToList = styled.div`
  margin-top: 1rem;
  margin-left: 24px;
  background: ${({ theme }) => theme.backgroundColor};
  border-radius: 5px;
  width: 90%;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  box-shadow: ${({ theme }) => theme.boxShadow};
  .number-items-clear-complete {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .item-left {
    font-size: 12px;
    line-height: 12px;
    letter-spacing: -0.166667px;
    color: #9495a5;
    margin-left: 24px;
  }
  .clear-button {
    font-size: 12px;
    line-height: 12px;
    margin-right: 24px;
    font-weight: normal;
    letter-spacing: -0.166667px;
    color: #9495a5;
    border: none;
    background: none;
    font-family: inherit;
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
        <Text className="item-left" dragInstruction={dragInstruction}>
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
