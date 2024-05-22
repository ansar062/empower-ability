import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #f8f8f8;
  padding: 40px 20px;
  color: black;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    box-shadow: none;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: teal;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 15px;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.4;
  }
`;

const NewsletterBox = styled.div`
  margin-top: 30px;
`;

const NewsletterHeading = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: teal;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 10px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 768px) {
    padding: 10px;
    margin: 6px 0;
  }
`;

const SubscribeButton = styled.button`
  background-color: teal;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00528c;
  }

  @media (max-width: 768px) {
    padding: 10px 18px;
    font-size: 0.9rem;
  }
`;

const ContactForm = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 5px;
  display: block;
  color: teal;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;

  @media (max-width: 768px) {
    padding: 10px;
    margin: 6px 0;
  }
`;

const SubmitButton = styled.button`
  background-color: teal;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00528c;
  }

  @media (max-width: 768px) {
    padding: 10px 18px;
    font-size: 0.9rem;
  }
`;

const ContactSec = () => {
  return (
    <Container>
      <LeftSection>
        <SectionHeading>About EmpowerAbility</SectionHeading>
        <Description>
          EmpowerAbility is dedicated to providing resources, courses, and support to empower individuals in their professional journeys. Our mission is to create an inclusive community and bridge the gap between education and employment opportunities.
        </Description>
        <NewsletterBox>
          <NewsletterHeading>Subscribe to Our Newsletter</NewsletterHeading>
          <Input type="text" placeholder="Enter your email" />
          <SubscribeButton>Subscribe Now</SubscribeButton>
        </NewsletterBox>
      </LeftSection>

      <RightSection>
        <ContactForm>
          <SectionHeading>Contact Us</SectionHeading>
          <FormGroup>
            <Label htmlFor="name">Name:</Label>
            <Input type="text" id="name" name="name" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <Input type="email" id="email" name="email" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">Message:</Label>
            <TextArea id="message" name="message" rows="4"></TextArea>
          </FormGroup>

          <SubmitButton>Submit</SubmitButton>
        </ContactForm>
      </RightSection>
    </Container>
  );
};

export default ContactSec;
