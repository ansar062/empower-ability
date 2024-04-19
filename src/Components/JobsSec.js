import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaGlobe, FaUsers, FaRocket } from 'react-icons/fa';

const JobSection = () => {
  return (
    <Container>
      <TextContainer>
        <SectionHeading>
          <IconWrapper>
          </IconWrapper>
          Unlocking Potential, Embracing Diversity
        </SectionHeading>
        <SubHeading>
          <IconWrapper>
          </IconWrapper>
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
`;

const ImageContainer = styled.div`
  flex: 1;
  position: relative;
`;

const BackgroundImage = styled.img`
  width: 105%;
  height: 97%;
  border-radius: 10px;
  z-index: 1;
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
`;

export default JobSection;
