import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../context';

const InputElement = styled.div`
  margin-left: 24px;
  margin-top: 40px;
  width: 90vw;
  display: flex;
  flex-direction: row;

  background: #ffffff;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  border-radius: 5px;
  .circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-top: -4px;
    margin-left: 1rem;
    border: 1px solid hsl(233, 11%, 84%);
  }
  .circle:hover {
    border: 1px solid;
    border-image-source: radial-gradient(rgb(0, 143, 104), rgb(250, 224, 66));
    border-image-slice: 1;
    cursor: pointer;
  }
`;

const FormField = styled.form`
  .input-element {
    height: 48px;
    width: 65vw;
    border: none;
    outline: none;
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

const InputForm = () => {
  const { newTask, addTodo, handleTaskChange } = useContext(Context);

  return (
    <InputElement>
      <div className="circle"></div>
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
    </InputElement>
  );
};
export default InputForm;
