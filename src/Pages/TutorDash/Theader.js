import React from 'react';
import styled from 'styled-components';
import { FaHome, FaBriefcase, FaPaperPlane, FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UserDropdownMenu from '../../Components/UserDropdownMenu';

const TutorsHeader = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/">
          <LogoImage src="/images/logo.png" alt="logo" />
        </Link>
      </LogoContainer>
      <Navigation>
        <NavItem>
          <NavLink to="/tdashboard" activeClassName="active">
            <NavIcon><FaHome /></NavIcon>
            <NavText>Dashboard</NavText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/tcourses" activeClassName="active">
            <NavIcon><FaBriefcase /></NavIcon>
            <NavText>Manage Courses</NavText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/tcommunication" activeClassName="active">
            <NavIcon><FaPaperPlane /></NavIcon>
            <NavText>Communication</NavText>
          </NavLink>
        </NavItem>
      </Navigation>
      <RightSection>
        <NotificationButton>
          <FaBell />
        </NotificationButton>
        <UserDropdownMenu />
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
`;

const LogoContainer = styled.div`
  margin-right: 20px;
`;

const LogoImage = styled.img`
  width: 130px;
  height: auto;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

const NavItem = styled.div`
  margin-right: 20px;
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
`;

const NavIcon = styled.div`
  margin-right: 5px;
`;

const NavText = styled.span`
  font-size: 14px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const NotificationButton = styled.div`
  cursor: pointer;
  margin-right: 20px;
`;

export default TutorsHeader;
