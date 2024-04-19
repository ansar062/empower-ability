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
`;

const FooterContent = styled.p`
  color: white;
  margin: 0;
`;

export default Footer;
