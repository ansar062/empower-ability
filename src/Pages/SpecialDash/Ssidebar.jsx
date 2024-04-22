import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHome, FaBriefcase, FaUsers, FaBookOpen, FaAngleDown } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

const SidebarContainer = styled.div`
  width: 250px;
  height: calc(100% - 80px); 
  background-color: teal;
  position: fixed;
  top: 83px; 
  left: 0;
  overflow-y: auto;
  z-index: 1000;
  transition: transform 0.3s ease;
`;

const SidebarHeader = styled.div`
  padding: 1rem;
  text-align: center;
`;

const SidebarHeading = styled.h2`
  margin: 0;
  color: #fff;
`;

const SidebarNav = styled.nav`
  padding: 1rem;
`;

const SidebarLink = styled(Link)`
  display: flex; 
  align-items: center; 
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
`;

const Icon = styled.div`
  margin-right: 0.5rem;
`;

const DropdownLink = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding-left: 2rem;
  color: #fff;
  cursor: pointer;
`;

const DropdownIcon = styled.div`
  margin-left: auto;
`;

const Sidebar = () => {
  const [freelancerOpen, setFreelancerOpen] = useState(false);
  const [studentOpen, setStudentOpen] = useState(false);

  const toggleFreelancer = () => {
    setFreelancerOpen(!freelancerOpen);
    setStudentOpen(false);
  };

  const toggleStudent = () => {
    setStudentOpen(!studentOpen);
    setFreelancerOpen(false);
  };

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarHeading>Menu</SidebarHeading>
      </SidebarHeader>
      <SidebarNav>
        <SidebarLink to="/sdashboard">
          <Icon><FaHome /></Icon> Dashboard
        </SidebarLink>
        <SidebarLink onClick={toggleFreelancer}>
          <Icon><FaBriefcase /></Icon> Freelancer
          <DropdownIcon><FaAngleDown /></DropdownIcon>
        </SidebarLink>
        <DropdownLink isOpen={freelancerOpen}>
          <SidebarLink to="/sjobs">Jobs</SidebarLink>
          <SidebarLink to="/myjobs">My Jobs</SidebarLink>
          <SidebarLink to="/communication">Communication</SidebarLink>
        </DropdownLink>
        <SidebarLink onClick={toggleStudent}>
          <Icon><FaUsers /></Icon> Student
          <DropdownIcon><FaAngleDown /></DropdownIcon>
        </SidebarLink>
        <DropdownLink isOpen={studentOpen}>
          <SidebarLink to="/scourses">Courses</SidebarLink>
          <SidebarLink to="/mycourses">My Courses</SidebarLink>
          <SidebarLink to="/communication">Communication</SidebarLink>
        </DropdownLink>
        <SidebarLink to="/sblogs">
          <Icon><FaBookOpen /></Icon> Blogs
        </SidebarLink>
      </SidebarNav>
    </SidebarContainer>
  );
};

export default Sidebar;
