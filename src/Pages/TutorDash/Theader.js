import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TutorsHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/">
          <LogoImage src="/logo.png" alt="logo" />
        </Link>
      </LogoContainer>
      <MenuToggle onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </MenuToggle>
      <Navigation isMenuOpen={isMenuOpen}>
        <NavItem>
          <NavLink to="/tdashboard" activeClassName="active">
            <NavText>Dashboard</NavText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/tcourses" activeClassName="active">
            <NavText>Manage Courses</NavText>
          </NavLink>
        </NavItem>
        {isMenuOpen && (
          <NavItem>
            <NavLink to="/" activeClassName="active">
              <NavText>Student</NavText>
            </NavLink>
          </NavItem>
        )}
      </Navigation>
      <RightSection>
        {!isMenuOpen && (
          <NavLink to="/" activeClassName="active">
            <NavText>Student</NavText>
          </NavLink>
        )}
      </RightSection>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 10px 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const LogoContainer = styled.div``;

const LogoImage = styled.img`
  width: 130px;
  height: auto;

  @media (max-width: 768px) {
    width: 100px;
  }
`;

const MenuToggle = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    font-size: 24px;
    margin-left: auto;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
    position: absolute;
    top: 60px;
    left: 0;
    background-color: #ffffff;
    border: 1px solid #ddd;
    padding: 10px 20px;
    z-index: 1;
  }
`;

const NavItem = styled.div`
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
    width: 100%;
  }
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  transition: color 0.3s;

  &:hover {
    color: teal;
  }

  &.active {
    color: teal;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    width: 100%;
  }
`;

const NavText = styled.span`
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default TutorsHeader;
