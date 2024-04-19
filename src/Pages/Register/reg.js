import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledRegister = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledRegisterFormContainer = styled.div`
  background-color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 20px;
  width: 300px;
`;

const StyledRegisterTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: teal;
  margin-bottom: 20px;
  text-align: center;
`;

const StyledRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledRegisterLabel = styled.label`
  margin: 10px 0;
  color: teal;
`;

const StyledRegisterInput = styled.input`
  padding: 10px;
  background-color: transparent;
  border: 2px solid teal;
  border-radius: 10px;
  color: teal;

  &:focus {
    outline: none;
  }
`;

const StyledRegisterSelect = styled.select`
  padding: 10px;
  background-color: transparent;
  border: 2px solid teal;
  border-radius: 10px;
  color: teal;

  &:focus {
    outline: none;
  }
`;

const StyledRegisterButton = styled.button`
  width: 98%;
  margin-top: 20px;
  cursor: pointer;
  background-color: teal;
  color: white;
  padding: 10px;
  border: 1px solid teal;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s, border 0.3s;

  &:hover {
    background-color: white;
    color: teal;
    border: 1px solid teal;
  }
`;

const StyledSignUpUsing = styled.div`
  margin-top: 20px;
  text-align: center;
  color: black;
`;

const StyledSocialLoginIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const StyledSocialLoginIcon = styled.a`
  font-size: 30px;
  color: teal;
  margin: 0 10px;
`;

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'client' // Default role
  });
  const [registrationError, setRegistrationError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation here
    // For simplicity, I'm skipping validation in this example

    // Once validation is done, you can proceed with form submission
    console.log('Form submitted:', formData);
    // Reset form data after submission
    setFormData({
      username: '',
      email: '',
      password: '',
      role: 'client' // Reset role to default
    });
  };

  // Dynamically set the link destination based on the selected role
  let linkDestination;
  switch (formData.role) {
    case 'teacher':
      linkDestination = '/tutor';
      break;
    case 'student/freelancer':
      linkDestination = '/sdashboard';
      break;
    case 'client':
      linkDestination = '/edash';
      break;
    default:
      linkDestination = '/';
      break;
  }

  return (
    <StyledRegister>
      <StyledRegisterFormContainer>
        <StyledRegisterTitle>Register</StyledRegisterTitle>
        <StyledRegisterForm onSubmit={handleSubmit}>
          <StyledRegisterLabel>Username</StyledRegisterLabel>
          <StyledRegisterInput
            type="text"
            name="username"
            placeholder="Enter your username..."
            value={formData.username}
            onChange={handleChange}
          />
          <StyledRegisterLabel>Email</StyledRegisterLabel>
          <StyledRegisterInput
            type="text"
            name="email"
            placeholder="Enter your email..."
            value={formData.email}
            onChange={handleChange}
          />
          <StyledRegisterLabel>Password</StyledRegisterLabel>
          <StyledRegisterInput
            type="password"
            name="password"
            placeholder="Enter your password..."
            value={formData.password}
            onChange={handleChange}
          />
          <StyledRegisterLabel>Role</StyledRegisterLabel>
          <StyledRegisterSelect
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="client">Client/Customer</option>
            <option value="teacher">Teacher</option>
            <option value="student/freelancer">Student/Freelancer</option>
          </StyledRegisterSelect>
          <Link to={linkDestination}>
            <StyledRegisterButton type="submit">Register</StyledRegisterButton>
          </Link>
        </StyledRegisterForm>
        {registrationError && (
          <div style={{ color: 'red', marginTop: '5px' }}>Registration failed. Please check the provided information.</div>
        )}
        <StyledSignUpUsing>
          Sign up using:
          <StyledSocialLoginIcons>
            <StyledSocialLoginIcon href="#github">
              <i className="fab fa-github"></i>
            </StyledSocialLoginIcon>
            <StyledSocialLoginIcon href="#google">
              <i className="fab fa-google"></i>
            </StyledSocialLoginIcon>
          </StyledSocialLoginIcons>
        </StyledSignUpUsing>
      </StyledRegisterFormContainer>
    </StyledRegister>
  );
};

export default Register;
