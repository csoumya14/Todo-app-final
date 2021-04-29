import React from 'react';
import styled from 'styled-components';

const Footerdiv = styled.div`
  text-align: center;
  margin-top: 20px;
  .drag-instruction {
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.194444px;
    color: #9495a5;
  }
`;

const Footer = () => {
  return (
    <Footerdiv>
      <p className="drag-instruction">Drag and drop to reorder list</p>
    </Footerdiv>
  );
};

export default Footer;
