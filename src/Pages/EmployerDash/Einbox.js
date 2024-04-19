import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Mock data for demonstration
const mockMessages = [
  { id: 1, sender: 'employer', content: 'Hello, how can I help you?', timestamp: new Date() },
  { id: 2, sender: 'freelancer', content: 'Hi, I am interested in the job.', timestamp: new Date() }
];

const ChatPage = () => {
  const [messages, setMessages] = useState(mockMessages);
  const [newMessage, setNewMessage] = useState('');

  // Function to handle sending a new message
  const sendMessage = () => {
    if (newMessage.trim() === '') return;
    const newMsg = {
      id: messages.length + 1,
      sender: 'freelancer', // Assuming freelancer is sending the message
      content: newMessage,
      timestamp: new Date()
    };
    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  return (
    <Container>
      <MessageList>
        {messages.map(message => (
          <Message key={message.id} sender={message.sender}>
            <MessageContent>{message.content}</MessageContent>
            <MessageTimestamp>{message.timestamp.toLocaleTimeString()}</MessageTimestamp>
          </Message>
        ))}
      </MessageList>
      <MessageInput>
        <InputField
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
        />
        <SendButton onClick={sendMessage}>Send</SendButton>
      </MessageInput>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MessageList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`;

const Message = styled.div`
  display: flex;
  flex-direction: ${props => (props.sender === 'employer' ? 'row-reverse' : 'row')};
  align-items: flex-end;
  margin-bottom: 10px;
`;

const MessageContent = styled.div`
  max-width: 70%;
  padding: 10px;
  border-radius: 10px;
  background-color: ${props => (props.sender === 'employer' ? '#DCF8C6' : '#E9E9EB')};
`;

const MessageTimestamp = styled.div`
  font-size: 12px;
  color: #999;
  margin-left: 5px;
  margin-bottom: 3px;
`;

const MessageInput = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const InputField = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`;

const SendButton = styled.button`
  padding: 10px 20px;
  background-color: teal;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default ChatPage;
