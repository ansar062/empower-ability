import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${({ sender }) => (sender ? '#007bff' : '#f0f0f0')};
  color: ${({ sender }) => (sender ? 'white' : 'black')};
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-top: 20px;
  align-self: ${({ sender }) => (sender ? 'flex-end' : 'flex-start')};
`;

const Text = styled.p`
  margin: 0;
`;

const Timestamp = styled.span`
  font-size: 12px;
  color: #666;
`;

const MessageItem = ({ text, sender, timestamp }) => {
  return (
    <Container sender={sender}>
      <Text>{text}</Text>
      <Timestamp>{timestamp}</Timestamp>
    </Container>
  );
};

export default MessageItem;
