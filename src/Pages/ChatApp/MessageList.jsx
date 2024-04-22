import React from 'react';
import styled from 'styled-components';
import MessageItem from './MessageItem';

const ListContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`;

const EmptyMessage = styled.div`
  text-align: center;
  color: #666;
`;

const MessageList = ({ messages }) => {
  return (
    <ListContainer>
      {messages.length > 0 ? (
        messages.map((message, index) => (
          <MessageItem key={index} message={message} />
        ))
      ) : (
        <EmptyMessage>No messages yet</EmptyMessage>
      )}
    </ListContainer>
  );
};

export default MessageList;
