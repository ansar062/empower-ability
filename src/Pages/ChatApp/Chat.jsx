// ChatApp.js
import React, { useState } from 'react';
import styled from 'styled-components';
import ChatHeader from './ChatHeader';
import ChatSidebar from './ChatSidebar';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const ChatApp = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [chats, setChats] = useState([
    { id: 1, name: "John Doe", messages: [] },
    { id: 2, name: "Jane Smith", messages: [] },
    // Add more chat objects as needed
  ]);

  const handleChatSelect = (chatId) => {
    setSelectedChat(chatId);
  };

  const handleMessageSend = (newMessage) => {
    const updatedChats = chats.map(chat =>
      chat.id === selectedChat
        ? { ...chat, messages: [...chat.messages, newMessage] }
        : chat
    );
    setChats(updatedChats);
  };

  const selectedChatObj = chats.find(chat => chat.id === selectedChat);

  return (
    <Container>
      <ChatSidebar chats={chats} onSelect={handleChatSelect} />
      <div>
        <ChatHeader title={selectedChatObj ? selectedChatObj.name : "Chat App"} />
        <MessageList messages={selectedChatObj ? selectedChatObj.messages : []} />
        {selectedChat && <MessageInput onSendMessage={handleMessageSend} />}
      </div>
    </Container>
  );
};

export default ChatApp;

