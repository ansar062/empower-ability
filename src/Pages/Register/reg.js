import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

const StyledRegisterFormContainer = styled.div`
  background-color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 40px;
  margin-top:20px;
  margin-bottom:20px;
  width: 350px;
  max-width: 50%;
`;

const StyledRegisterTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: teal;
  margin-bottom: 30px;
  text-align: center;
`;

const StyledRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledRegisterLabel = styled.label`
  margin-bottom: 10px;
  font-size: 13px;
  color: #333333;
`;

const StyledRegisterInput = styled.input`
  padding: 12px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 12px;
  color: #333333;

  &:focus {
    outline: none;
    border-color: teal;
  }
`;

const StyledRegisterSelect = styled.select`
  padding: 12px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 12px;
  color: #333333;

  &:focus {
    outline: none;
    border-color: teal;
  }
`;

const StyledRegisterButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledRegisterButton = styled.button`
  padding: 12px 24px;
  cursor: pointer;
  background-color: teal;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #00796b;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

const StyledAlreadyAccount = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #333333;
`;

const StyledLoginLink = styled(Link)`
  color: teal;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'client'
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

    // Once validation is done, you can proceed with form submission
    console.log('Form submitted:', formData);
    // Reset form data after submission
    setFormData({
      username: '',
      email: '',
      password: '',
      role: 'client'
    });
  };

  // Dynamically set the link destination based on the selected role
  let linkDestination;
  switch (formData.role) {
    case 'teacher':
      linkDestination = '/freelancer';
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
        <StyledRegisterTitle>
        Welcome to EmpowerAbility</StyledRegisterTitle>
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
          <StyledRegisterButtonContainer>
            <Link to={linkDestination}>
              <StyledRegisterButton type="submit">Register</StyledRegisterButton>
            </Link>
          </StyledRegisterButtonContainer>
        </StyledRegisterForm>
        {registrationError && (
          <div style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>Registration failed. Please check the provided information.</div>
        )}
        <StyledAlreadyAccount>
          Already have an account? <StyledLoginLink to="/login">Login</StyledLoginLink>
        </StyledAlreadyAccount>
      </StyledRegisterFormContainer>
    </StyledRegister>
  );
};

export default Register;
