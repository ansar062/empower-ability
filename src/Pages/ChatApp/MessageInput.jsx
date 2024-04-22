import React, { useState } from 'react';
import styled from 'styled-components';
import { RiSendPlane2Line, RiAttachmentFill } from 'react-icons/ri'; // Updated import

const InputContainer = styled.div`
  position: fixed;
  bottom: 0;
  margin-left: 40px;
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
`;


const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid teal;
  border-radius: 5px;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: teal;
  color: #fff;
  cursor: pointer;
`;

const FileInput = styled.input`
  display: none; /* Hide the file input by default */
`;

const AttachmentButton = styled.label`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 16px;
  border: 1px solid teal;
  border-radius: 5px;
  background-color: transparent;
  color: teal;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const MessageInput = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Handle file upload logic here
      console.log('File uploaded:', file);
    }
  };

  return (
    <InputContainer>
      <Input
        type="text"
        placeholder="Type your message..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <Button onClick={handleSendMessage}><RiSendPlane2Line /></Button>
      <AttachmentButton>
        <RiAttachmentFill />
        <FileInput type="file" onChange={handleFileChange} />
      </AttachmentButton>
    </InputContainer>
  );
};

export default MessageInput;
