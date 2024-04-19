import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const ProfilePageContainer = styled.div`
  padding: 20px;
  color: #333; /* Dark Text */
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ProfileSection = styled.section`
  background-color: #fff; /* White */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 400px;
  max-width: 90%;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #008080; /* Teal */
  text-align: center;
`;

const ProfileInfo = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.span`
  font-weight: bold;
`;

const EditableField = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: orange; /* Orange */
    box-shadow: 0 0 0 2px rgba(255, 165, 0, 0.2); /* Orange shadow */
  }
`;

const SaveButton = styled.button`
  padding: 12px 0;
  background: linear-gradient(to right, #ff8c00, #ff4500); /* Orange gradient */
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #ff6347, #ff4500); /* Darker Orange gradient */
  }
`;

const ProfilePage = () => {
  // Sample Profile Data
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    contact: '+1234567890',
    biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam turpis vel eleifend mattis.',
  });

  const [editableProfile, setEditableProfile] = useState({ ...profile });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableProfile({ ...editableProfile, [name]: value });
  };

  const handleSaveProfile = () => {
    setProfile({ ...editableProfile });
  };

  return (
    <ProfilePageContainer>
      <ProfileSection>
        <Title>Profile Information</Title>
        <ProfileInfo>
          <Label>Name:</Label>
          <EditableField
            type="text"
            name="name"
            value={editableProfile.name}
            onChange={handleInputChange}
          />
        </ProfileInfo>
        <ProfileInfo>
          <Label>Email:</Label>
          <EditableField
            type="email"
            name="email"
            value={editableProfile.email}
            onChange={handleInputChange}
          />
        </ProfileInfo>
        <ProfileInfo>
          <Label>Contact:</Label>
          <EditableField
            type="text"
            name="contact"
            value={editableProfile.contact}
            onChange={handleInputChange}
          />
        </ProfileInfo>
        <ProfileInfo>
          <Label>Biography:</Label>
          <EditableField
            as="textarea"
            name="biography"
            value={editableProfile.biography}
            onChange={handleInputChange}
            rows={4}
          />
        </ProfileInfo>
        <SaveButton onClick={handleSaveProfile}>Save Changes</SaveButton>
      </ProfileSection>
    </ProfilePageContainer>
  );
};

export default ProfilePage;
