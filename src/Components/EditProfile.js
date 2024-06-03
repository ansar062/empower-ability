import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUserEdit } from 'react-icons/fa';

const EditProfilePage = () => {
  const [formData, setFormData] = useState({
    username: 'The Kiet',
    email: 'kiet@example.com',
    description: 'Website Designer',
    website: 'http://example.com',
    facebook: 'http://facebook.com/example',
    twitter: 'http://twitter.com/example',
    instagram: 'http://instagram.com/example',
    walletAddress: '0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    // Add logic to handle profile image change
    console.log('Image changed:', e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit form data to backend
    console.log(formData);
  };

  return (
    <Container>
      <ProfileIcon>
        <ProfileImage src="profile.jpg" alt="Profile" />
        <ChangeImageButton>
          Change Profile
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </ChangeImageButton>
      </ProfileIcon>
      <Form onSubmit={handleSubmit}>
        <GridContainer>
          <GridItem>
            <Label>Username</Label>
            <Input type="text" name="username" value={formData.username} onChange={handleChange} />
          </GridItem>
          <GridItem>
            <Label>Email</Label>
            <Input type="email" name="email" value={formData.email} onChange={handleChange} />
          </GridItem>
          <GridItem>
            <Label>Description</Label>
            <Textarea name="description" value={formData.description} onChange={handleChange} />
          </GridItem>
          <GridItem>
            <Label>Website</Label>
            <Input type="text" name="website" value={formData.website} onChange={handleChange} />
          </GridItem>
          <GridItem>
            <SocialInput type="text" name="facebook" value={formData.facebook} onChange={handleChange} placeholder="Facebook" />
          </GridItem>
          <GridItem>
            <SocialInput type="text" name="twitter" value={formData.twitter} onChange={handleChange} placeholder="Twitter" />
          </GridItem>
          <GridItem>
            <SocialInput type="text" name="instagram" value={formData.instagram} onChange={handleChange} placeholder="Instagram" />
          </GridItem>
          <GridItem>
            <Label>Wallet Address</Label>
            <Input type="text" name="walletAddress" value={formData.walletAddress} onChange={handleChange} />
          </GridItem>
        </GridContainer>
        <Button type="submit">Save Changes</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  max-width: 600px;
  margin: 50px 400px;
  padding: 20px;
  background-color: #f0f4f8;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ProfileIcon = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const ChangeImageButton = styled.label`
  display: block;
  color: teal;
  margin-top: 10px;
  cursor: pointer;
`;

const Form = styled.form`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

const Textarea = styled.textarea`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

const SocialInput = styled(Input)`
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 12px;
  background-color: teal;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #007B5E;
  }
`;

export default EditProfilePage;
