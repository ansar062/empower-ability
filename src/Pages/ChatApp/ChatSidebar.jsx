import React from 'react';
import styled from 'styled-components';
import UserProfile from '../../Components/UserProfile'; // Import UserProfile component

const Sidebar = styled.div`
  width: 300px;
  background-color: white; 
  color: teal; 
  border-right: 1px solid teal;
`;

const ChatItem = styled.div`
  padding: 15px;
  cursor: pointer;
  background-color: ${({ active }) => active ? 'teal' : 'transparent'}; /* Change background color when active */
  border-bottom: 1px solid teal;

  &:hover {
    background-color: #f0f0f0; /* Lighter background color on hover */
  }
`;

const ChatName = styled.div`
  font-weight: bold;
  flex: 1; /* Ensure chat name takes remaining space */
`;

const LastMessage = styled.div`
  color: #666;
`;

const UnreadIndicator = styled.div`
  background-color: teal;
  color: white;
  padding: 3px 8px;
  border-radius: 20px;
  font-size: 12px;
`;

const ChatSidebar = ({ user, chats, onSelect }) => {
  return (
    <>
      {user && <UserProfile user={user} />} {/* Display UserProfile only if user exists */}
      <Sidebar>
        {chats.map(chat => (
          <ChatItem key={chat.id} active={chat.id === onSelect} onClick={() => onSelect(chat.id)}>
            <ChatName>{chat.name}</ChatName>
            <LastMessage>{chat.messages.length > 0 ? chat.messages[chat.messages.length - 1] : 'No messages yet'}</LastMessage>
            {chat.unreadCount > 0 && (
              <UnreadIndicator>{chat.unreadCount}</UnreadIndicator>
            )}
          </ChatItem>
        ))}
      </Sidebar>
    </>
  );
};

export default ChatSidebar;
