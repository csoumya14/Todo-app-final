import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../context';
import Button from './Button/CheckButton';
import CrossButton from './Button/CrossButton';
import VisuallyHiddenSpan from './ForAccessibility/SpanElement';
import { Droppable, DragDropContext, Draggable } from 'react-beautiful-dnd';

const ListItem = styled.div`
  .list-container {
    display: block;
    list-style: none;
    border-bottom: 1px solid #e3e4f1;
    background: transparent;
  }
  .list-item {
    width: 100%;
    margin-left: -10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 0rem;
    padding-bottom: 20px;
  }
`;

const OuterCircle = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${({ theme }) => theme.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-image: linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    cursor: pointer;
  }
`;

const Task = styled.div`
  position: absolute;
  margin-left: 44px;
  margin-top: 0.3rem;
  text-decoration: ${({ isCompleted }) => (isCompleted ? 'line-through' : '')};
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.166667px;
  background: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme, isCompleted }) => (isCompleted ? theme.strikedColor : theme.listTextColor)};
  font-weight: 400;
`;

const TodoItem = () => {
  const { todos, deleteTodo, completeTodo, state, handleOnDragEnd } = useContext(Context);

  const createList = (item, i) => {
    return (
      <Draggable
        draggableId={Math.random().toString(36).substr(2, 9).toString()}
        key={Math.random().toString(36).substr(2, 9)}
        index={i}
      >
        {provided => (
          <li
            className="list-item"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <OuterCircle>
              <Button onClick={() => completeTodo(item._id)} isCompleted={item.completed}>
                <VisuallyHiddenSpan>Click button to mark item as completed</VisuallyHiddenSpan>
              </Button>
            </OuterCircle>
            <Task isCompleted={item.completed} className="task">
              {item.task}
            </Task>
            <CrossButton onClick={() => deleteTodo(item)} isCompleted={item.completed}>
              <VisuallyHiddenSpan>Click button to remove item</VisuallyHiddenSpan>
            </CrossButton>
          </li>
        )}
      </Draggable>
    );
  };

  const list = todos.map((item, i) => {
    let listItem = null;
    if (state === 0) {
      listItem = createList(item, i);
    } else if (state === 1 && !item.completed) {
      listItem = createList(item, i);
    } else if (state === 2 && item.completed) {
      listItem = createList(item, i);
    }
    return listItem;
  });

  return (
    <ListItem>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="list-container">
          {provided => (
            <ul className="list-container" {...provided.droppableProps} ref={provided.innerRef}>
              {list}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </ListItem>
  );
};

export default TodoItem;
