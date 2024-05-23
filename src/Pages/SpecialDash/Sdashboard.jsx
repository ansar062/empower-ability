import React from 'react';
import Layout from './Slayout'; // Adjust the path as needed
import styled from 'styled-components';

// Styled components for the dashboard layout
const DashboardContainer = styled.div`
  padding: 2rem;
  margin-top: 60px;
  display: grid;
  grid-template-columns: 1fr; /* One column for the personalized section */
  gap: 2rem;
`;

const MainContent = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 768px) {
    width: 80%;
   }
`;

const MainTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: teal; /* Darker teal for better contrast */
`;

const MainSubtitle = styled.p`
  color: #333; /* Dark gray for better contrast */
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
`;

const MainButton = styled.button`
  background-color: teal; /* Darker teal for better contrast */
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #004d40;
    color: #ffffff;
  }
`;

const Card = styled.div`
  background-color: teal;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
   width: 60%;
   }
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: #ffffff;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
   }
`;

const Subtitle = styled.p`
  color: #e0f2f1; /* Light teal text color for better contrast */
  margin-bottom: 1.5rem;
  font-size: 1.1rem;

  @media screen and (max-width: 768px) {
  font-size: 0.8rem;
   }
`;

const Button = styled.button`
  background-color: #ffffff;
  color: #00796b;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #004d40;
    color: #ffffff;
  }

  @media screen and (max-width: 768px) {
  padding: 0.5rem 1rem;
  font-size: 0.7rem;
     }
  
`;

const ImageContainer = styled.div`
  margin-left: 5%; /* Adjusted margin for better layout */
  flex-shrink: 0;

  @media screen and (max-width: 768px) {
    display: none; /* Hide image on smaller screens */
  }
`;

const DashboardImageStyled = styled.img`
  width: 80%;
  height: auto;
  border-radius: 10px;
`;

const DashboardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2rem;
`;

const ParallelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ParallelSections = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

const Sdashboard = () => {
  return (
    <Layout>
      <DashboardContainer>
        {/* Personalized welcome section */}
        <MainContent>
          <DashboardContent>
            <MainTitle>Welcome to Your Dashboard!</MainTitle>
            <MainSubtitle>Take control of your learning and career journey with EmpowerAbility.</MainSubtitle>
            <MainButton>Get Started</MainButton>
          </DashboardContent>
          <ImageContainer>
            <DashboardImageStyled src="/Images/sdash.webp" alt="Dashboard" />
          </ImageContainer>
        </MainContent>

        {/* Parallel sections for community engagement and career opportunities */}
        <ParallelSections>
          {/* Community engagement section */}
          <Card>
            <ParallelContainer>
              <SectionTitle>Join the EmpowerAbility Community</SectionTitle>
              <Subtitle>Connect with like-minded individuals and share your experiences.</Subtitle>
              <Button>Join Community</Button>
            </ParallelContainer>
          </Card>

          {/* Career opportunities section */}
          <Card>
            <ParallelContainer>
              <SectionTitle>Discover Exciting Job Opportunities</SectionTitle>
              <Subtitle>Explore job openings from inclusive employers.</Subtitle>
              <Button>Explore Jobs</Button>
            </ParallelContainer>
          </Card>
        </ParallelSections>
      </DashboardContainer>
    </Layout>
  );
};

export default Sdashboard;
