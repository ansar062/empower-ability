import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBell } from 'react-icons/fa';

const IconContainer = styled.div`
  position: relative;
`;

const BellIcon = styled(FaBell)`
  color: #333;
  font-size: 20px;
  cursor: pointer;
`;

const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 10px); /* Adjust the vertical position */
  right: 0;
  background-color: white;
  border: 2px solid teal;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 10px;
  z-index: 999;
  width: 350px;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    right: 1px; /* Adjust the horizontal position */
    border-width: 0 10px 10px;
    border-style: solid;
    border-color: transparent transparent teal;
  }
`;

const NotificationItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: teal;
`;

const MarkAllText = styled.span`
  color: orange;
  text-decoration: underline;
  cursor: pointer;
`;

const NotificationIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMarkAllAsRead = () => {
    // Implement mark all as read functionality here
  };

  return (
    <IconContainer>
      <BellIcon onClick={toggleDropdown} />
      {isOpen && (
        <Dropdown>
          <NotificationItem>New Follower!</NotificationItem>
          <NotificationItem>Richa reacted to your comment</NotificationItem>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <MarkAllText onClick={handleMarkAllAsRead}>Mark All as Read</MarkAllText>
          </div>
        </Dropdown>
      )}
    </IconContainer>
  );
};

export default NotificationIcon;
