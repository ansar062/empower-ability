import React from 'react';
import styled from 'styled-components';

const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: teal;
  color: white;
`;

const UserProfileAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  color: teal;
`;

const UserProfileName = styled.div`
  font-weight: bold;
`;

const UserProfile = ({ user }) => {
  // Dummy user data
  const dummyUser = {
    name: "John Doe",
    avatar: "JD" // You can use initials or any other representation for the avatar
  };

  // Use the actual user data if available, otherwise use the dummy user data
  const userData = user ? user : dummyUser;

  return (
    <UserProfileContainer>
      <UserProfileAvatar>{userData.avatar}</UserProfileAvatar>
      <UserProfileName>{userData.name}</UserProfileName>
    </UserProfileContainer>
  );
};

export default UserProfile;
