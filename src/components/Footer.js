import React from 'react';
import styled from 'styled-components';
import Text from './Text/Text';

const FooterDiv = styled.div`
  text-align: center;
  margin-top: 20px;
  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    margin-top: 5rem;
  }
`;

const Footer = () => {
  const dragInstruction = true;
  return (
    <FooterDiv>
      <Text dragInstruction={dragInstruction}>Drag and drop to reorder list</Text>
    </FooterDiv>
  );
};

export default Footer;
