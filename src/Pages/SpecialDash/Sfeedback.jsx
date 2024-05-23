import React, { useState } from 'react';
import Layout from "./Slayout";
import styled from 'styled-components';

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmitFeedback = (event) => {
    event.preventDefault();
    console.log('Submitting feedback:', feedback);
    setTimeout(() => {
      setSubmitted(true);
      setFeedback('');
    }, 1000);
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
  padding: 20px; /* Add padding to prevent content from touching edges on small screens */

  @media (max-width: 768px) {
    margin-top: 50%;
    margin-bottom: 50%;
    height: auto; /* Adjust height for better layout on small screens */
    padding: 10px; /* Add padding for small screens */
  }
`;

const FeedbackForm = styled.form`
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100%; /* Make the form take full width on small screens */
    padding: 10px; /* Adjust padding for small screens */
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Adjust font size for small screens */
  }
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1rem; /* Adjust font size for small screens */
  }
`;

const FeedbackInput = styled.input`
  width: 95%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;

  @media (max-width: 768px) {
    width: 94%; /* Make input take full width on small screens */
    padding: 8px; /* Adjust padding for small screens */
  }
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

  @media (max-width: 768px) {
    padding: 8px; /* Adjust padding for small screens */
  }
`;

const FeedbackSubmitted = styled.p`
  text-align: center;
  color: #00796b;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Adjust font size for small screens */
  }
`;

export default FeedbackPage;
