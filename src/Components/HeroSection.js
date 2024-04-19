import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components
const HeroContainer = styled.section`
  color: black;
  text-align: center;
  padding: 20px 10px;
  background-color: white;
  margin-top: 35px;
`;

const ContentContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
`;

const TextContainer = styled.div`
  flex: 1;
  text-align: left;
  padding-right: 20px;
  z-index: 1;
`;

const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  width: 40%;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const EmpowerSpan = styled.span`
  color: #008080;
  font-family: 'Roboto, sans-serif';
  font-size: 4rem;
  margin-bottom: 20px;
`;

const HStyle = styled.span`
  font-size: 4rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: grey;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const GetStartedButton = styled.button`
  background-color: #008080;
  color: white;
  padding: 15px 30px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005757;
  }
`;

const FindJobsButton = styled.button`
  background-color: white;
  color: teal;
  border-style: solid;
  border-width: 2px;
  border-color: teal;
  padding: 15px 30px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: teal;
    color:white;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <ContentContainer>
        <TextContainer>
          <h1>
            <EmpowerSpan>Unlock</EmpowerSpan> <HStyle>Your Potential, Embrace Growth</HStyle>
          </h1>
          <Subtitle>
            Elevate your life with our diverse range of online courses. Dive into a flexible learning
            experience tailored to your schedule, allowing you to absorb knowledge at your own pace.
          </Subtitle>
          <ButtonContainer>
            <Link to="/courses">
              <GetStartedButton>Start Your Journey</GetStartedButton>
            </Link>
            <Link to="/jobs">
              <FindJobsButton>Find Jobs</FindJobsButton>
            </Link>
          </ButtonContainer>
        </TextContainer>
        <ImageContainer>
          <Image src="/Images/hero.jpg" alt="Hero" />
        </ImageContainer>
      </ContentContainer>
    </HeroContainer>
  );
};

export default HeroSection;
