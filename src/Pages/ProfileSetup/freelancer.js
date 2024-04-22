import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Container = styled.div`
  background-color: #f8f9fa;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.form`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  margin:20px;
`;

const Title = styled.h1`
  color: #333;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
`;

const ColumnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-right: 10px; /* Added padding to the right side of left fields */
  padding-left: 10px; /* Added padding to the left side of right fields */
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  color: #555;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Option = styled.option``;

const Button = styled.button`
  background-color: teal;
  color: #ffffff;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #007a74;
  }
`;

const ProfileSetupPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    skills: '',
    experience: '',
    education: '',
    portfolioLink: '',
    hourlyRate: '',
    availability: 'Full-time',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission here
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <Title>Complete Your Profile</Title>
        <ColumnsContainer>
          <Column>
            <FormGroup>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="address">Address</Label>
              <Input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="skills">Skills</Label>
              <Input
                type="text"
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="Enter your skills (e.g., web development, graphic design)"
                required
              />
            </FormGroup>
          </Column>
          <Column>
            <FormGroup>
              <Label htmlFor="portfolioLink">Portfolio Link</Label>
              <Input
                type="text"
                id="portfolioLink"
                name="portfolioLink"
                value={formData.portfolioLink}
                onChange={handleChange}
                placeholder="Enter link to your portfolio (if any)"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="hourlyRate">Hourly Rate ($)</Label>
              <Input
                type="number"
                id="hourlyRate"
                name="hourlyRate"
                value={formData.hourlyRate}
                onChange={handleChange}
                placeholder="Enter your hourly rate"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="experience">Experience</Label>
              <TextArea
                id="experience"
                name="experience"
                rows="4"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Tell us about your relevant experience"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="education">Education</Label>
              <TextArea
                id="education"
                name="education"
                rows="4"
                value={formData.education}
                onChange={handleChange}
                placeholder="Enter your educational background"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="availability">Availability</Label>
              <Select
                id="availability"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                required
              >
                <Option value="Full-time">Full-time</Option>
                <Option value="Part-time">Part-time</Option>
                <Option value="Contract">Contract</Option>
              </Select>
            </FormGroup>
          </Column>
        </ColumnsContainer>
        <Link to="/tdashboard">
        <Button type="submit">Save Profile</Button>
        </Link>
      </FormContainer>
    </Container>
  );
};

export default ProfileSetupPage;
