import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background-color: teal; /* Changed background color to teal */
  color: white; /* Changed text color to white */
  padding: 10px;
  text-align: center;
  font-size: 24px;
  position: fixed; /* Fixed positioning to display over the sidebar */
  width: 100%; /* Full width */
  z-index: 1; /* Ensure header is displayed above sidebar */
  top: 0; /* Align header to the top of the viewport */
`;

const ChatHeader = ({ title }) => {
  return <Header>{title}</Header>;
};

export default ChatHeader;
