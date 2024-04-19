import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import styled from 'styled-components';

const StyledLogin = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const StyledLoginForm = styled.form`
  width: 300px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 128, 128, 0.3);
  border-radius: 10px;
`;

const StyledLoginTitle = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
  text-align: center;
  color: teal;
`;

const StyledLoginLabel = styled.label`
  display: block;
  margin: 10px 0;
`;

const StyledLoginInput = styled.input`
  width: 90%;
  padding: 10px;
  margin-bottom: 15px;
  background-color: white;
  border: 1px solid teal;
  border-radius: 5px;

  &:focus {
    outline: none;
    border: 1px solid black;
  }
`;

const StyledLoginButton = styled.button`
  width: 98%;
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

const StyledSocialLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;

const StyledLoginWithText = styled.div`
  color: black;
  margin-bottom: 10px;
`;

const StyledSocialLoginIcon = styled.a`
  font-size: 24px;
  color: teal;
  cursor: pointer;
  margin: 5px;

  &:hover {
    color: teal;
  }
`;

const StyledCreateAccountLink = styled.div`
  margin-top: 15px;
  text-align: center;
  color: black;
  cursor: pointer;

  a {
    color: teal;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loginError, setLoginError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const hardcodedCredentials = {
      email: 'maidah@gmail.com',
      password: 'hehe',
    };

    if (formData.email === hardcodedCredentials.email && formData.password === hardcodedCredentials.password) {
      console.log('Login successful!');
      setFormData({
        email: '',
        password: '',
      });
      setLoginError(false);
      navigate('/'); // Redirect to home page after successful login
    } else {
      console.log('Invalid credentials. Login failed.');
      setLoginError(true);
    }
  };
  return (
    <StyledLogin>
      <StyledLoginForm onSubmit={handleSubmit}>
        <StyledLoginTitle>LogIn</StyledLoginTitle>
        <StyledLoginLabel>Email</StyledLoginLabel>
        <StyledLoginInput
          type="text"
          name="email"
          placeholder="Enter your email..."
          value={formData.email}
          onChange={handleChange}
          style={{ borderColor: loginError ? 'red' : 'teal' }}
        />
        <StyledLoginLabel>Password</StyledLoginLabel>
        <StyledLoginInput
          type="password"
          name="password"
          placeholder="Enter your password..."
          value={formData.password}
          onChange={handleChange}
          style={{ borderColor: loginError ? 'red' : 'teal' }}
        />
        <StyledLoginButton type="submit">Login</StyledLoginButton>
        {loginError && <div style={{ color: 'red', marginTop: '5px' }}>Invalid credentials. Please try again.</div>}
        <StyledSocialLoginContainer>
          <StyledLoginWithText>Login with:</StyledLoginWithText>
          <div>
            <StyledSocialLoginIcon href="#github">
              <i className="fab fa-github"></i>
            </StyledSocialLoginIcon>
            <StyledSocialLoginIcon href="#google">
              <i className="fab fa-google"></i>
            </StyledSocialLoginIcon>
          </div>
        </StyledSocialLoginContainer>
        <StyledCreateAccountLink>
          <Link to="/reg">Don't have an account?</Link>
        </StyledCreateAccountLink>
      </StyledLoginForm>
    </StyledLogin>
  );
}
