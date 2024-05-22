import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import axios from 'axios';
import { signInStart, signInFailure, signInSuccess } from '../../store/slices/authSlice';
import { useDispatch, useSelector} from 'react-redux';
import { toast } from 'react-toastify';

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {loading, error, currentUser} = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'client',
    firstname:'',
    lastname:''
  });
  useEffect(() => {
    if(currentUser){
      navigate('/');
    }
  })
  const [registrationError, setRegistrationError] = useState(false);
  const [errors, setErrors] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: ''
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Validation for first name and last name
    if (name === "firstname" || name === "lastname") {
      const onlyAlphabetsRegex = /^[a-zA-Z]*$/;
      if (!value.match(onlyAlphabetsRegex)) {
        setErrors(prevErrors => ({
          ...prevErrors,
          [name]: 'Only alphabets are allowed'
        }));
      } else {
        setErrors(prevErrors => ({
          ...prevErrors,
          [name]: ''
        }));
      }
    }
  
    // Validation for username
    if (name === "username") {
      const alphanumericRegex = /^[a-zA-Z0-9]+$/;
      if (!value.match(alphanumericRegex)) {
        setErrors(prevErrors => ({
          ...prevErrors,
          [name]: 'Only letters and numbers are allowed'
        }));
        return;
      } else {
        setErrors(prevErrors => ({
          ...prevErrors,
          [name]: ''
        }));
      }
    }
    
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
   // Email validation using regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email.trim()) {
    setRegistrationError(true);
    toast("Please enter your email address");
    return;
  } else if (!emailRegex.test(formData.email.trim())) {
    setRegistrationError(true);
    toast("Please enter a valid email address");
    return;
  }

  // Password validation
  if (formData.password.length < 8) {
    setRegistrationError(true);
    toast("Password must be at least 8 characters long");
    return;
  }

    try{
      dispatch(signInStart());
      axios.post('http://localhost:8000/signup', formData, {
        withCredentials: true
      }).then(response => {
        const data = response.data;
        if(data.success === false){
          toast(data.message)
          dispatch(signInFailure(data.message));
          return;
        }
        localStorage.setItem("token", data.token)
        toast(data.message)
        dispatch(signInSuccess(data.user));
        if(data.user.role === "client"){
          navigate('/freelancer');
        }
        navigate('/');
      })
    }catch(err){
      toast(err);
      dispatch(signInFailure(err));
    }
  };

  // Dynamically set the link destination based on the selected role
 

  return (
    <StyledRegister>
      <StyledRegisterFormContainer>
        <StyledRegisterTitle>
        Welcome to EmpowerAbility</StyledRegisterTitle>
        <StyledRegisterForm onSubmit={handleSubmit}>
        <StyledRegisterLabel>First name</StyledRegisterLabel>
        <StyledRegisterInput
          type="text"
          name="firstname"
          placeholder="Enter your firstname..."
          value={formData.firstname}
          onChange={handleChange}
        />
        {errors.firstname && <div style={{ color: 'red' }}>{errors.firstname}</div>}

        <StyledRegisterLabel>Last name</StyledRegisterLabel>
        <StyledRegisterInput
          type="text"
          name="lastname"
          placeholder="Enter your lastname..."
          value={formData.lastname}
          onChange={handleChange}
        />
        {errors.lastname && <div style={{ color: 'red' }}>{errors.lastname}</div>}


  <StyledRegisterLabel>Username</StyledRegisterLabel>
  <StyledRegisterInput
    type="text"
    name="username"
    placeholder="Enter your username..."
    value={formData.username}
    onChange={handleChange}
    style={{
      borderColor: registrationError && !formData.username.match(/^[a-zA-Z0-9]+$/) ? "red" : "#ccc"
    }}
  />
  {registrationError && !formData.username.match(/^[a-zA-Z0-9]+$/) && (
    <div style={{ color: 'red', fontSize: '12px' }}>Username can only contain letters and numbers</div>
  )}

  <StyledRegisterLabel>Email</StyledRegisterLabel>
  <StyledRegisterInput
    type="text"
    name="email"
    placeholder="Enter your email..."
    value={formData.email}
    onChange={handleChange}
    style={{
      borderColor: registrationError && !formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ? "red" : "#ccc"
    }}
  />
  {registrationError && !formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) && (
    <div style={{ color: 'red', fontSize: '12px' }}>Please enter a valid email address</div>
  )}

  <StyledRegisterLabel>Password</StyledRegisterLabel>
  <StyledRegisterInput
    type="password"
    name="password"
    placeholder="Enter your password..."
    value={formData.password}
    onChange={handleChange}
    style={{
      borderColor: registrationError && formData.password.length < 8 ? "red" : "#ccc"
    }}
  />
  {registrationError && formData.password.length < 8 && (
    <div style={{ color: 'red', fontSize: '12px' }}>Password must be at least 8 characters long</div>
  )}
          <StyledRegisterLabel>Role</StyledRegisterLabel>
          <StyledRegisterSelect
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="client">Freelancer/Students</option>
            <option value="trainer">Teacher</option>
            <option value="employer">Employer</option>
          </StyledRegisterSelect>
          <StyledRegisterButtonContainer>
              <StyledRegisterButton type="submit">Register</StyledRegisterButton>
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
