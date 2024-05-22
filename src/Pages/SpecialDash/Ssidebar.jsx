import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHome, FaBriefcase, FaUsers, FaBookOpen, FaAngleDown, FaBars,FaComment } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SidebarContainer = styled.div`
  width: ${({ isOpen }) => (isOpen ? '20%' : '4%')};  
  height: 100%; 
  background-color: teal;
  position: fixed;
  top: 80px;  
  left: 0;
  z-index: 1000;
  transition: width 0.3s ease;

  &:hover {
    width: 20%;
  }

  @media (max-width: 768px) {
    width: ${({ isOpen }) => (isOpen ? '60%' : '0')};
    &:hover {
      width: ${({ isOpen }) => (isOpen ? '60%' : '0')}; // Prevent hover effect on mobile
    }
  }
`;

const SidebarHeader = styled.div`
  padding: 1rem;
  text-align: center;
  overflow: hidden;
`;

const SidebarHeading = styled.h2`
  margin: 0;
  color: #fff;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${SidebarContainer}:hover & {
    opacity: 1;
  }

  @media (max-width: 768px) {
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  }
`;

const SidebarNav = styled.nav`
  ${SidebarContainer}:hover & {
    padding: 1rem;
  }

  @media (max-width: 768px) {
    padding: ${({ isOpen }) => (isOpen ? '1rem' : '0')};
  }
`;

const SidebarLink = styled(Link)`
  display: flex; 
  align-items: center; 
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  ${SidebarContainer}:hover & {
    padding: 0.5rem 1rem;
  }

  @media (max-width: 768px) {
    padding: ${({ isOpen }) => (isOpen ? '0.5rem 1rem' : '0.5rem 0')};
  }
`;

const Icon = styled.div`
  margin-right: 0;
  font-size: 1.5rem;
  flex-shrink: 0;

  ${SidebarContainer}:hover & {
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    margin-right: ${({ isOpen }) => (isOpen ? '0.5rem' : '0')};
  }
`;

const LinkText = styled.span`
  opacity: 0;
  transition: opacity 0.3s ease, margin-left 0.3s ease;
  margin-left: -100px;

  ${SidebarContainer}:hover & {
    opacity: 1;
    margin-left: 0;
  }

  @media (max-width: 768px) {
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    margin-left: ${({ isOpen }) => (isOpen ? '0' : '-100px')};
  }
`;

const DropdownLink = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding-left: 2rem;
  color: #fff;
  cursor: pointer;
`;

const DropdownIcon = styled.div`
  margin-left: auto;
  opacity: 0;
  font-size: 1rem;

  ${SidebarContainer}:hover & {
    opacity: 1;
  }

  @media (max-width: 768px) {
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  position: fixed;
  top: 20px;
  left: 10px;
  z-index: 1100;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Sidebar = () => {
  const [freelancerOpen, setFreelancerOpen] = useState(false);
  const [studentOpen, setStudentOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleFreelancer = () => {
    setFreelancerOpen(!freelancerOpen);
    setStudentOpen(false);
  };

  const toggleStudent = () => {
    setStudentOpen(!studentOpen);
    setFreelancerOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <HamburgerMenu onClick={toggleSidebar}>
        <FaBars />
      </HamburgerMenu>
      <SidebarContainer isOpen={sidebarOpen}>
        <SidebarHeader>
          <SidebarHeading isOpen={sidebarOpen}>Menu</SidebarHeading>
        </SidebarHeader>
        <SidebarNav isOpen={sidebarOpen}>
          <SidebarLink to="/sdashboard" isOpen={sidebarOpen}>
            <Icon isOpen={sidebarOpen}><FaHome /></Icon>
            <LinkText isOpen={sidebarOpen}>Dashboard</LinkText>
          </SidebarLink>
          <SidebarLink onClick={toggleFreelancer} isOpen={sidebarOpen}>
            <Icon isOpen={sidebarOpen}><FaBriefcase /></Icon>
            <LinkText isOpen={sidebarOpen}>Freelancer</LinkText>
            <DropdownIcon isOpen={sidebarOpen}><FaAngleDown /></DropdownIcon>
          </SidebarLink>
          <DropdownLink isOpen={freelancerOpen}>
            <SidebarLink to="/sjobs">
              <LinkText>Jobs</LinkText>
            </SidebarLink>
          </DropdownLink>
          <SidebarLink onClick={toggleStudent} isOpen={sidebarOpen}>
            <Icon isOpen={sidebarOpen}><FaUsers /></Icon>
            <LinkText isOpen={sidebarOpen}>Student</LinkText>
            <DropdownIcon isOpen={sidebarOpen}><FaAngleDown /></DropdownIcon>
          </SidebarLink>
          <DropdownLink isOpen={studentOpen}>
            <SidebarLink to="/scourses">
              <LinkText>Courses</LinkText>
            </SidebarLink>
            <SidebarLink to="/mycourses">
              <LinkText>My Courses</LinkText>
            </SidebarLink>
          </DropdownLink>
          <SidebarLink to="/sblogs" isOpen={sidebarOpen}>
            <Icon isOpen={sidebarOpen}><FaBookOpen /></Icon>
            <LinkText isOpen={sidebarOpen}>Blogs</LinkText>
          </SidebarLink>
          <SidebarLink to="/sfeedback" isOpen={sidebarOpen}>
            <Icon isOpen={sidebarOpen}><FaComment /></Icon>
            <LinkText isOpen={sidebarOpen}>Feedback</LinkText>
          </SidebarLink>
        </SidebarNav>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
