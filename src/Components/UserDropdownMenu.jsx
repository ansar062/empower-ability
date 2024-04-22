import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaUser, FaEdit, FaQuestion, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UserDropdownMenu = ({ position }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const editIcon = <FaEdit />;
  const helpIcon = <FaQuestion />;
  const logoutIcon = <FaSignOutAlt />;

  return (
    <MenuContainer position={position}>
      <UserIcon onClick={toggleMenu}>
        <FaUser />
      </UserIcon>
      {open && (
        <DropdownMenu ref={menuRef}>
          <UserInfo>
            <UserName>The Kiet</UserName>
            <UserRole>Website Designer</UserRole>
          </UserInfo>
          <MenuList>
            <DropdownItem icon={editIcon} text="Edit Profile" to="/editprofile" />
            <DropdownItem icon={helpIcon} text="Helps" href="mailto:maidatariq06@gmail.com" />

            <DropdownItem icon={logoutIcon} text="Logout" to="/" />
          </MenuList>
        </DropdownMenu>
      )}
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  position: ${(props) => props.position || 'relative'};
`;

const UserIcon = styled.div`
  cursor: pointer;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

const UserInfo = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const UserName = styled.h3`
  margin: 0;
  font-size: 16px;
`;

const UserRole = styled.span`
  font-size: 14px;
  color: #666;
`;

const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const DropdownItem = ({ icon, text, to }) => (
  <ListItem>
    <StyledLink to={to}>
      <DropdownItemIcon>{icon}</DropdownItemIcon>
      <ListItemText>{text}</ListItemText>
    </StyledLink>
  </ListItem>
);

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;

const DropdownItemIcon = styled.div`
  margin-right: 10px;
`;

const ListItemText = styled.span`
  font-size: 14px;
`;

export default UserDropdownMenu;
