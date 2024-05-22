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
              <StyledNavLink to="/epostjobs" activeClassName="active">
                <NavText>Post a Job</NavText>
              </StyledNavLink>
            </ActionItem>
            <ActionItem onClick={() => console.log("Viewing applications...")}>
              <ActionIcon><FaUserClock /></ActionIcon>
              <StyledNavLink to="/eapp" activeClassName="active">
                <NavText>View Applications</NavText>
              </StyledNavLink>
            </ActionItem>
            <ActionItem onClick={() => console.log("Checking messages...")}>
              <ActionIcon><FaEnvelopeOpenText /></ActionIcon>
              <StyledNavLink to="/einbox" activeClassName="active">
                <NavText>Check Messages</NavText>
              </StyledNavLink>
            </ActionItem>
            <ActionItem onClick={handleSeekHelp}>
              <ActionIcon><FaHandsHelping /></ActionIcon>
              <StyledNavLink to="/ehelp" activeClassName="active">
                <NavText>Seek Help</NavText>
              </StyledNavLink>
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
  @media (max-width: 768px) {
    margin: 0 auto;
    padding: 0 10px;
  }
`;

const WelcomeSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    margin-bottom: 30px;
  }
`;

const WelcomeContent = styled.div`
  max-width: 500px;
  margin-bottom: 20px; /* Common margin for both desktop and mobile */
  
  @media (max-width: 768px) {
    max-width: 100%;
    background: linear-gradient(130deg, #e0f7fa 30%, #80deea 90%);
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    animation: slideIn 0.5s ease-in-out;
    margin-bottom: 20px; /* Maintain consistent margin on smaller screens */
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;


const WelcomeMessage = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: black;
  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 15px;
  }
`;

const SupportMessage = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: black;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const AboutImage = styled.img`
  width: 50%;
  max-width: 350px;
  height: auto;
  @media (max-width: 768px) {
    display: none; /* Hide image on smaller screens */
  }
`;

const QuickActionsSection = styled.div`
  margin-top: 40px;
`;

const QuickActionsHeader = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    color: teal;
    text-decoration: underline;
  }

  &.active {
    color: black;
  }
`;

const NavText = styled.span`
  font-size: 16px;
  text-decoration: none !important; /* Remove underline */
  color: black;
  transition: color 0.3s;
  &:hover {
    color: teal;
  }
  &.active {
    color: black;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;


const ActionGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const ActionItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  &:hover {
    background-color: #e0f7fa;
    transform: translateY(-3px);
  }
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const ActionIcon = styled.div`
  font-size: 36px;
  margin-bottom: 10px;
  color: teal;
  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 5px;
  }
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
  transition: background-color 0.3s ease, transform 0.3s ease;
  &:hover {
    background-color: #ffffff;
    color: #004d40;
    border: 5px teal solid;
    transform: translateY(-3px);
  }
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 12px 20px;
    margin-top: 15px;
  }
`;

export default Edash;
