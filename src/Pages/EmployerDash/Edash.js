import React from 'react';
import styled from 'styled-components';
import { FaRegLightbulb, FaUserClock, FaEnvelopeOpenText, FaHandsHelping } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Edash = () => {
  const handleSeekHelp = () => {
    console.log("Seeking help...");
  };

  return (
    <Wrapper>
      <DashboardContainer>
        <WelcomeSection>
          <WelcomeContent>
            <WelcomeMessage>Welcome to Your Dashboard!</WelcomeMessage>
            <SupportMessage>
            Your job postings empower individuals with disabilities, providing equal opportunities for meaningful employment and fostering independence. Thank you for promoting diversity and inclusion in the workforce!
            </SupportMessage>
            <GetStartedButton to="/epostjobs">Get Started</GetStartedButton>
          </WelcomeContent>
          <AboutImage src="/Images/edashboard.jpg" alt="Dashboard Image" />
        </WelcomeSection>
        <QuickActionsSection>
          <QuickActionsHeader>Quick Actions</QuickActionsHeader>
          <ActionGrid>
            <ActionItem onClick={() => console.log("Posting a job...")}>
              <ActionIcon><FaRegLightbulb /></ActionIcon>
              <NavLink to="/epostjobs" activeClassName="active">
            <NavText>Post a Job</NavText>
          </NavLink>
            </ActionItem>
            <ActionItem onClick={() => console.log("Viewing applications...")}>
              <ActionIcon><FaUserClock /></ActionIcon>
              <NavLink to="/eapp" activeClassName="active">
            <NavText>View Applications</NavText>
          </NavLink>
            </ActionItem>
            <ActionItem onClick={() => console.log("Checking messages...")}>
              <ActionIcon><FaEnvelopeOpenText /></ActionIcon>
              <NavLink to="/einbox" activeClassName="active">
            <NavText>Check Messages</NavText>
          </NavLink>
            </ActionItem>
            <ActionItem onClick={handleSeekHelp}>
              <ActionIcon><FaHandsHelping /></ActionIcon>
              <NavLink to="/ehelp" activeClassName="active">
            <NavText>Seek Help</NavText>
          </NavLink>
            </ActionItem>
          </ActionGrid>
        </QuickActionsSection>
      </DashboardContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const DashboardContainer = styled.div`
  flex: 1;
  max-width: 1000px;
  margin-left: 130px;
  padding: 0px;
`;

const WelcomeSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const WelcomeContent = styled.div`
  max-width: 500px;
`;

const WelcomeMessage = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
`;

const SupportMessage = styled.p`
  font-size: 18px;
  line-height: 1.6;
`;



const AboutImage = styled.img`
  width: 50%;
  max-width: 350px;
  height: auto;
`;

const QuickActionsSection = styled.div`
  margin-top: 40px;
`;

const QuickActionsHeader = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
`;


const NavText = styled.span`
  font-size: 16px;
  text-decoration: none;
  color: #333;
  transition: color 0.3s;
  &:hover {
    color: teal;
  }
  &.active {
    color: teal;
  }
`;

const ActionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const ActionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #f8f8f8;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const ActionIcon = styled.div`
  font-size: 36px;
  margin-bottom: 10px;
`;

const GetStartedButton = styled(Link)`
  display: block;
  background-color: teal;
  color: white;
  padding: 15px 25px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 8px;
  margin-top: 20px;
  &:hover {
    background-color: white;
    color: teal;
  }
`;

export default Edash;
