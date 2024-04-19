import React from 'react';
import Layout from './Slayout'; // Adjust the path as needed
import styled from 'styled-components';

// Styled components for the dashboard layout
const DashboardContainer = styled.div`
  padding: 2rem;
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background-color: #008080; /* Teal color */
  padding: 1.5rem;
  border-radius: 10px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff; /* White text color */
`;

const Subtitle = styled.p`
  color: #fff; /* White text color */
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: #fff; /* White background */
  color: #008080; /* Teal text color */
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #006666; /* Darker teal on hover */
    color: #fff; /* White text color on hover */
  }
`;

const Sdashboard = () => {
  return (
    <Layout>
      <DashboardContainer>
        {/* Personalized welcome section */}
        <Card>
          <SectionTitle>Welcome to Your Dashboard!</SectionTitle>
          <Subtitle>Take control of your learning and career journey with EmpowerAbility.</Subtitle>
          <Button>Get Started</Button>
        </Card>

        {/* Featured courses section */}
        <Card>
          <SectionTitle>Explore Featured Courses</SectionTitle>
          <Subtitle>Discover courses tailored to your interests and needs.</Subtitle>
          <Button>Explore Courses</Button>
        </Card>

        {/* Community engagement section */}
        <Card>
          <SectionTitle>Join the EmpowerAbility Community</SectionTitle>
          <Subtitle>Connect with like-minded individuals and share your experiences.</Subtitle>
          <Button>Join Community</Button>
        </Card>

        {/* Career opportunities section */}
        <Card>
          <SectionTitle>Discover Exciting Job Opportunities</SectionTitle>
          <Subtitle>Explore job openings from inclusive employers.</Subtitle>
          <Button>Explore Jobs</Button>
        </Card>
      </DashboardContainer>
    </Layout>
  );
};

export default Sdashboard;
