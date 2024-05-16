import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Comments from '../../Components/Comments';
import axios from 'axios';

// Styled components
const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 20px;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const MediaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 50%;
  max-width: 600px;
  margin-right: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const ResponsiveIframe = styled.iframe`
  width: 100%;
  height: 315px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ContentSection = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
`;

const AssignmentList = styled.ul`
  list-style: none;
  padding: 0;
`;

const AssignmentItem = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
`;

const CourseDetails = () => {
const params = useParams();
const id = params.id;
const [course, setCourse] = useState({});
  // Dummy data for the course
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`https://empowerabilitybackend56dcdfs4q43srd.vercel.app/getcourse/${id}`, {
        withCredentials: true
      });
      const data = await response.data;
      console.log(data);
      setCourse(data);
    }
    fetchData();
  }, []);

  return (
    <Container>
      {course && 
      <div>
        <Header>
        <Title>{course.title}</Title>
        {course.publisher && <Subtitle>Instructor: {course.publisher.username}</Subtitle> }
      </Header>

      <MediaContainer>
       
        <Image src={course.cover} alt="Course Preview" />
      </MediaContainer>

      <ContentSection>
        <SectionTitle>About the Course</SectionTitle>
        <Description>{course.description}</Description>
      </ContentSection>

      {/* <ContentSection>
        <SectionTitle>Assignments</SectionTitle>
        <AssignmentList>
          {course.assignments.map((assignment, index) => (
            <AssignmentItem key={index}>{assignment}</AssignmentItem>
          ))}
        </AssignmentList>
      </ContentSection> */}
      <Comments />
      </div>
      }
    </Container>
  );
};

export default CourseDetails;
