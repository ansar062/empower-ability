import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaGlobe, FaUsers, FaRocket } from 'react-icons/fa';

const JobSection = () => {
  return (
    <Container data-aos="fade-left"
    data-aos-duration="1000">
      <TextContainer>
        <SectionHeading>
          Unlocking Potential, Embracing Diversity
        </SectionHeading>
        <SubHeading>
          Welcome to our Inclusive Job Hub!
        </SubHeading>
        <SubHeading>
          <IconWrapper>
            <FaGlobe color="teal" />
          </IconWrapper>
          Calling all talented individuals with unique abilities! Explore a world of opportunities where diversity is celebrated, and your skills are valued beyond limitations.
        </SubHeading>
        <SubHeading>
          <IconWrapper>
            <FaUsers color="teal" />
          </IconWrapper>
          Employers, be part of the change! Join us in building an inclusive workforce that fosters innovation. Discover exceptional talent to drive your business forward.
        </SubHeading>
        <SubHeading>
          <IconWrapper>
            <FaRocket color="teal" />
          </IconWrapper>
          Ready to empower and be empowered? Explore our diverse range of jobs or seamlessly post opportunities now!
        </SubHeading>
        <Link to="/jobs" style={{ textDecoration: 'none' }}>
          <CTAButton>Explore Job Openings</CTAButton>
        </Link>
      </TextContainer>
      <ImageContainer>
        <BackgroundImage src="/Images/jobsec.jpg" alt="Job Opportunities Image" />
      </ImageContainer>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  display: flex;
  max-width: 1100px;
  margin: 0px auto 10px;
  padding: 60px 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  z-index: 2;
  animation: fadeIn 0.8s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
    background-color: #f2f2f2;
    border: 2px solid teal;
    border-radius: 20px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  }
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  svg {
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
`;

const SubHeading = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 15px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
    margin-bottom: 10px;
  }
`;

const IconWrapper = styled.div`
  margin-right: 8px;
  font-size: 1.5rem;
  color: #555;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const CTAButton = styled.button`
  background-color: #fff;
  color: teal;
  padding: 12px 25px;
  border: 2px solid teal;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
  margin-top:20px;

  &:hover {
    background-color: teal;
    color: #fff;
    border-color: teal;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.7rem;
  }
`;

const ImageContainer = styled.div`
  display: block;
  flex: 1;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export default JobSection;
