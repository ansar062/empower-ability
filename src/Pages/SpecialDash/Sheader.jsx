import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaBell, FaUser } from 'react-icons/fa'; 
import UserDropdownMenu from '../../Components/UserDropdownMenu'; // Correct import

const HeaderContainer = styled.div`
  position: fixed; /* Fix the position */
  top: 0; /* Position at the top of the viewport */
  width: 100%; /* Take up the full width */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: white; 
  z-index: 999; /* Ensure the header appears above other content */
`;

const Logo = styled.img`
  width: 120px;
  height: 50px;
`;

const SearchBar = styled.input`
  width: 300px;
  height: 17px;
  border-radius: 5px;
  border: 1px solid #ccc; /* Add a border */
  padding: 0.5rem;
  font-size: 1rem;
`;

const NotificationIcon = styled(FaBell)`
  font-size: 1.1rem;
  cursor: pointer;
`;

const UserDropdownMenuContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right:70px;
  gap: 1.5rem; /* Adjust the gap between the notification icon and the user dropdown menu */
`;

const Header = () => {
  return (
    <HeaderContainer>
      <NavLink to="/">
          <Logo src="/images/logo.png" alt="logo" />
        </NavLink>
      <SearchBar type="text" placeholder="Search..." />
      <UserDropdownMenuContainer>
        <NotificationIcon />
        <UserDropdownMenu /> 
      </UserDropdownMenuContainer>
    </HeaderContainer>
  );
};

export default Header;
