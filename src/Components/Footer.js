import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: teal;
  color: white;
  padding: 20px 0;
  text-align: center;
`;

const EmpowerAbility = styled.div`
  margin-bottom: 20px;
`;

const BottomBar = styled.div`
  border-top: 1px solid #555;
  padding-top: 20px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
`;

const Column = styled.div`
  flex: 1;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  transition: color 0.3s ease, border-bottom 0.3s ease;

  &:hover {
    color: white;
    border-bottom: 1px solid white;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <EmpowerAbility>
        <h2>EmpowerAbility</h2>
        <p>Empowering Lives, Building Futures</p>
      </EmpowerAbility>
      <BottomBar>
        <Container>
          <Column>
            <h3>Contact Us</h3>
            <p>Email: info@empowerability.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </Column>
          <Column>
            <h3>Follow Us</h3>
            <p>Twitter</p>
            <p>Facebook</p>
            <p>Instagram</p>
          </Column>
          <Column>
            <h3>Quick Links</h3>
            <p><StyledLink to="/">Home</StyledLink></p>
            <p><StyledLink to="/courses">Courses</StyledLink></p>
            <p><StyledLink to="/blogs">Blogs</StyledLink></p>
            <p><StyledLink to="/jobs">Jobs</StyledLink></p>
          </Column>
        </Container>
        <p>&copy; 2023 EmpowerAbility. All rights reserved.</p>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;
