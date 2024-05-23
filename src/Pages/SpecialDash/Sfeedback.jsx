import React, { useState } from 'react';
import Layout from "./Slayout";
import styled from 'styled-components';
import axios from 'axios';
import { toast } from 'react-toastify';

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmitFeedback = async (event) => {
    event.preventDefault();
    setSubmitted(false);
    await axios.post('https://empowerabilitybackend56dcdfs4q43srd.vercel.app/addfeedback', { feedback }, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    }).then((response) => {
      console.log(response);
      if(response.data.status){
        toast(response.data.message);
        setSubmitted(true);
      }else{
        toast(response.data.message);
        setSubmitted(false);
      }
    });
    
    
  };

  return (
    <Layout>
      <Container>
        <FeedbackForm onSubmit={handleSubmitFeedback}>
          <Title>Feedback Form</Title>
          {!submitted ? (
            <>
              <InputLabel>
                Feedback:
                <FeedbackInput
                  type="text"
                  value={feedback}
                  onChange={handleFeedbackChange}
                  placeholder="Enter your feedback here"
                  required
                />
              </InputLabel>
              <SubmitButton type="submit">Submit Feedback</SubmitButton>
            </>
          ) : (
            <FeedbackSubmitted>Thank you for your feedback!</FeedbackSubmitted>
          )}
        </FeedbackForm>
      </Container>
    </Layout>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FeedbackForm = styled.form`
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const FeedbackInput = styled.input`
  width: 95%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  background-color: teal;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: white;
    border: 2px teal solid;
    color: teal;
  }
`;

const FeedbackSubmitted = styled.p`
  text-align: center;
  color: #00796b;
  font-weight: bold;
`;

export default FeedbackPage;
