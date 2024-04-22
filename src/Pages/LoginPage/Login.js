import React, { useState } from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom'; 
import styled from 'styled-components';
import { FaGoogle, FaFacebookF, FaTwitter } from 'react-icons/fa';

const StyledLogin = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin-top:20px;
`;

const StyledLoginForm = styled.form`
  width: 80%; /* Adjusted for responsiveness */
  max-width: 300px; /* Added max-width for larger screens */
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 128, 128, 0.3);
  border-radius: 10px;
`;

const StyledLoginTitle = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
  text-align: center;
`;

const LogoImage = styled.img`
  width: 100px; 
  height: 50px; 
  margin-left: 35%;
  align-self: center; vertically center
`;

const StyledLoginLabel = styled.label`
  display: block;
  margin: 10px 0;
`;

const StyledLoginInputContainer = styled.div`
  position: relative;
`;

const StyledLoginInput = styled.input`
  width:90%; 
  padding: 10px;
  margin-bottom: 15px;
  background-color: white;
  border: 1px solid teal;
  border-radius: 5px;
`;

const StyledPasswordToggle = styled.span`
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const StyledRememberMeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const StyledRememberMeLabel = styled.label`
  margin-left: 5px;
`;

const StyledLoginButton = styled.button`
  width: 95%; /* Adjusted for responsiveness */
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
  color: #333333;
  cursor: pointer;
  margin: 0 10px;
  transition: color 0.3s ease;

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
    rememberMe: false, // New state for "Remember Me" checkbox
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: val,
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
        rememberMe: formData.rememberMe, // Keep the state of "Remember Me" checkbox
      });
      setLoginError(false);
      navigate('/'); // Redirect to home page after successful login
    } else {
      console.log('Invalid credentials. Login failed.');
      setLoginError(true);
      setErrorMessage('Invalid email or password. Please try again.'); // Set error message
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <StyledLogin>
      <StyledLoginForm onSubmit={handleSubmit}>
        <StyledLoginTitle>Welcome back!</StyledLoginTitle>
        <NavLink to="/">
          <LogoImage src="/images/logo.png" alt="logo" />
        </NavLink>
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
        <StyledLoginInputContainer>
          <StyledLoginInput
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Enter your password..."
            value={formData.password}
            onChange={handleChange}
            style={{ borderColor: loginError ? 'red' : 'teal' }}
          />
          {/* Password Visibility Toggle */}
          <StyledPasswordToggle onClick={togglePasswordVisibility}>
            {showPassword ? 'Hide' : 'Show'}
          </StyledPasswordToggle>
        </StyledLoginInputContainer>
        {/* Remember Me Option */}
        <StyledRememberMeContainer>
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
          <StyledRememberMeLabel htmlFor="rememberMe">Remember Me</StyledRememberMeLabel>
        </StyledRememberMeContainer>
        <StyledLoginButton type="submit">Login</StyledLoginButton>
        {loginError && <div style={{ color: 'red', marginTop: '5px' }}>{errorMessage}</div>} {/* Display error message */}
        <StyledSocialLoginContainer>
          <StyledLoginWithText>OR LOGIN WITH</StyledLoginWithText>
          <div>
            <StyledSocialLoginIcon href="#google">
              <FaGoogle />
            </StyledSocialLoginIcon>
            <StyledSocialLoginIcon href="#facebook">
              <FaFacebookF />
            </StyledSocialLoginIcon>
            <StyledSocialLoginIcon href="#twitter">
              <FaTwitter />
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
