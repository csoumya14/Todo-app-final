import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../context';
const SelectionButtons = styled.div`
  display:flex:
  flex-direction:row;
  width: 90vw;
  height: 48px;
  border: none;
  margin-top: 1rem;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  margin-left: 24px;
  display:flex;
  justify-content:center;
 .buttons{
   display:flex;
   flex-direction:row;  
 }
 .buttons button{
   border:none;
   background:transparent;
   font-size: 14px;
   line-height:14px;
   letter-spacing:-0.194444px;
   color:#9495A5;
   font-family: inherit;
 }
  
`;

const ItemSelection = () => {
  const { setState, state } = useContext(Context);
  console.log(state);
  return (
    <SelectionButtons>
      <div className="buttons">
        <button className="all-button" onClick={() => setState(0)}>
          All
        </button>

        <button className="active-button" onClick={() => setState(1)}>
          Active
        </button>

        <button className="complete-button" onClick={() => setState(2)}>
          Completed
        </button>
      </div>
    </SelectionButtons>
  );
};

export default ItemSelection;
