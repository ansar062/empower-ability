import React from 'react';
import styled from 'styled-components';

// Styled Components
const BlogPostContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const BlogImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const SectionHeader = styled.h2`
  font-size: 1.5rem;
  color: teal;
  margin-bottom: 15px;
`;

const SubSectionHeader = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
`;

const ListItem = styled.li`
  font-size: 1rem;
  margin-bottom: 8px;
`;

const Paragraph = styled.p`
  margin-bottom: 15px;
`;

// React Component
const JobSearchTipsPost = () => {
  return (
    <BlogPostContainer>

      <SectionHeader>Unlocking Job Success: A Step-by-Step Guide for Job Seekers with Disabilities</SectionHeader>
      <BlogImage src="/Images/singlepost.png" alt="Job Search Tips" />

      <SubSectionHeader>Introduction</SubSectionHeader>
      <Paragraph>
        Hey there, fellow job seekers on this incredible journey! Navigating the job market can be a bit tricky, especially when you're dealing with unique challenges like a disability. But fear not! In this blog post, I'm here to share some tips and tricks I've picked up along the way, hoping they'll make your job search adventure a little less daunting.
      </Paragraph>

      <SubSectionHeader>Step 1: Embrace Your Uniqueness</SubSectionHeader>
      <Paragraph>
        First things first, embrace your uniqueness! Your disability is just one part of your awesome self. Think of it as a superpower that brings a fresh perspective and resilience to the table. Let that uniqueness shine through in your job search.
      </Paragraph>

      <SubSectionHeader>Step 2: Your Superpower Toolkit</SubSectionHeader>
      <ul>
        <ListItem><strong>2.1 Accessibility is Your Ally:</strong> Make sure your job application materials are accessible. There are cool tools out there to help, so take advantage of them. And don't hesitate to talk to potential employers about any accommodations you might need – it's your right!</ListItem>
        <ListItem><strong>2.2 Networking Magic:</strong> Attend events, both in person and online, to connect with people who get it. They might just have the perfect advice or job lead for you. Remember, the job market is all about who you know.</ListItem>
      </ul>

      <SubSectionHeader>Step 3: Tailor Your Resume Like a Pro</SubSectionHeader>
      <Paragraph>
        Your resume is your superhero cape. Tailor it for each job application, highlighting your strengths and skills relevant to the position. Use action words and quantify your achievements. Show them what you're made of!
      </Paragraph>

      <SubSectionHeader>Step 4: Job Search Platforms Made Easy</SubSectionHeader>
      <Paragraph>
        Leverage job search platforms that prioritize accessibility. Websites with features like screen reader compatibility and easy navigation can make your job search more efficient. Explore platforms that cater specifically to disabled job seekers.
      </Paragraph>

      <SubSectionHeader>Step 5: Ace the Interview</SubSectionHeader>
      <ul>
        <ListItem><strong>5.1 Prepare Your Success Stories:</strong> Be ready to share specific examples of your achievements. This not only showcases your skills but also gives employers a glimpse of what you bring to the table.</ListItem>
        <ListItem><strong>5.2 Address Accommodations Early:</strong> If you require any accommodations for the interview, communicate this early in the process. It demonstrates your proactive approach and ensures a smooth experience.</ListItem>
      </ul>

      <SubSectionHeader>Step 6: Build a Support System</SubSectionHeader>
      <Paragraph>
        Building a strong support system is crucial. Surround yourself with mentors, peers, and allies who understand your journey. Join online communities or local groups where you can share experiences, gain insights, and receive encouragement.
      </Paragraph>

      <SectionHeader>Conclusion</SectionHeader>
      <Paragraph>
        Job searching with a disability may have its unique challenges, but it also opens the door to incredible opportunities. Remember, you are not alone on this journey. By embracing your uniqueness, utilizing accessible tools, and building a supportive network, you can unlock the doors to a fulfilling career. Best of luck on your job search adventure!
      </Paragraph>
    </BlogPostContainer>
  );
};

export default JobSearchTipsPost;
