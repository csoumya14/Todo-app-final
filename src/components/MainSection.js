import React from 'react';
import Heading from './Heading';
import InputForm from './InputForm';
import TodoList from './TodoList';
import Background from './Background';
import ItemSelection from './ItemSelection';
import Footer from './Footer';

const MainSection = () => {
  return (
    <Background>
      <Heading />
      <InputForm />
      <TodoList />
      <ItemSelection />
      <Footer />
    </Background>
  );
};

export default MainSection;
