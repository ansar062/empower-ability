import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>© 2023 EmpowerAbility. All rights reserved.</FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: teal;
  padding: 20px 0;
  text-align: center;
  margin-top: 2%;
  
  /* Media query for mobile phones */
  @media (max-width: 768px) {
    padding: 15px 0;
  }
`;

const FooterContent = styled.p`
  color: white;
  margin: 0;
  
  /* Media query for mobile phones */
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Footer;
