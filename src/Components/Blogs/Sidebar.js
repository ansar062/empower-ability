import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

const SidebarWrapper = styled.aside`
  max-width: 600px; 
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

const StaffSection = styled.div`
  margin-bottom: 20px;
  @media (max-width: 600px) {
   display:none;
  }
`;
const SubscribeSection = styled.div`
  margin-bottom: 20px;
  @media (max-width: 600px) {
    display:none;
   }
`;
const WritingSection = styled.div`
  margin-bottom: 20px;

  @media (max-width: 600px) {
    margin-top: -20%;
   }
`;

const CenteredSidebarHeader = styled.h2`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 15px;
  text-align: center; 
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left; /* Left-align the text */
`;

const SidebarListItem = styled.li`
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

const SidebarLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: teal;
  }
`;

const CenteredSubParagraph = styled.p`
  text-align: center;
`;

const CenteredSideHeader = styled.h2`
  font-size: 1.2rem;
`;

const CenteredSidebarParagraph = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 15px;
`;

const SidebarSubscriptionForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between; 
`;

const SidebarSubscribeInput = styled.input`
  padding: 10px;
`;

const SidebarSubButton = styled(Link)`
  background-color: white;
  color: black;
  padding: 10px;
  border: solid 1px teal; 
  border-radius: 20px; 
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  display: inline-block; 

  &:hover {
    background-color: #006666;
    color: white;
  }
`;



const SidebarSubscribeButton = styled.a`
  background-color: teal;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: #006666;
  }
`;

const Sidebar = () => {

  return (
    <SidebarWrapper>
      <StaffSection>
        <h2>Staff Picks</h2>
        <SidebarList>
          <SidebarListItem>
            <SidebarLink href="#">At Skywalker Ranch We Were</SidebarLink>
          </SidebarListItem>
          <SidebarListItem>
            <SidebarLink href="#">How I Won Singapore’s GPT-4 Prompt Engineering Competition</SidebarLink>
          </SidebarListItem>
          <SidebarListItem>
            <SidebarLink href="#">Advice to my younger self and you after 20 years in programming</SidebarLink>
          </SidebarListItem>
          <SidebarListItem>
            <SidebarLink href="#">See the full list</SidebarLink>
          </SidebarListItem>
        </SidebarList>
      </StaffSection>

      <WritingSection>
        <CenteredSideHeader>Writing on Medium</CenteredSideHeader>
        <CenteredSidebarParagraph>
          Express yourself, share your unique perspective, connect with a global community, contribute to discussions,
          and inspire others. Build your online presence and personal brand.
        </CenteredSidebarParagraph>
        <SidebarList>
          <SidebarListItem>
            <SidebarSubButton to="/write">
              Start writing
            </SidebarSubButton>
          </SidebarListItem>
        </SidebarList>
      </WritingSection>

      <SubscribeSection>
        <CenteredSidebarHeader>Subscribe to Our Newsletter</CenteredSidebarHeader>
        <CenteredSubParagraph>Get updates and exclusive content straight to your inbox.</CenteredSubParagraph>
        <SidebarSubscriptionForm>
          <SidebarSubscribeInput type="email" placeholder="Enter your email" />
          <SidebarSubscribeButton type="submit">Subscribe</SidebarSubscribeButton>
        </SidebarSubscriptionForm>
      </SubscribeSection>
    </SidebarWrapper>
  );
};

export default Sidebar;
