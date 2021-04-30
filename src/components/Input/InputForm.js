import React from 'react';
import styled from 'styled-components';

const FormField = styled.form`
  .input-element {
    height: 48px;
    width: 65vw;
    border: none;
    outline: none;
    background: ${({ theme }) => theme.backgroundColor};
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

const InputForm = ({ addTodo, newTask, handleTaskChange }) => {
  return (
    <FormField onSubmit={addTodo}>
      <label htmlFor="input-text" className="visually-hidden">
        create a to do list
      </label>
      <input
        id="input-text"
        name="text"
        type="text"
        value={newTask}
        onChange={handleTaskChange}
        className="input-element"
        placeholder="Create a new todo..."
      />
    </FormField>
  );
};

export default InputForm;
