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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <StyledRegisterLabel>Fistname</StyledRegisterLabel>
          <StyledRegisterInput
            type="text"
            name="firstname"
            placeholder="Enter your firstname..."
            value={formData.firstname}
            onChange={handleChange}
          />
          <StyledRegisterLabel>Lastname</StyledRegisterLabel>
          <StyledRegisterInput
            type="text"
            name="lastname"
            placeholder="Enter your lastname..."
            value={formData.lastname}
            onChange={handleChange}
          />
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
