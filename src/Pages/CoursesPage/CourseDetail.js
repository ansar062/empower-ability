import React from 'react';
import styled from 'styled-components';
import Comments from '../../Components/Comments';

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
  // Dummy data for the course
  const course = {
    title: 'Inclusive Web Design for People with Disabilities',
    instructor: 'Dr. Sarah Accessibility',
    description:
      'Join Dr. Sarah Accessibility in this comprehensive course focusing on inclusive web design for people with disabilities. Learn the principles and best practices of accessibility, ensuring your websites are usable by everyone. The course covers topics such as accessible UI/UX, assistive technologies, and testing for accessibility compliance.',
    videoUrl: 'https://www.youtube.com/embed/nGCwxDcrpX0', // Replace with your actual video URL
    imageUrl: '/Images/accessibility-course.jpg', // Replace with your actual image path
    assignments: [
      'Design an accessible user interface for a website.',
      'Create a document outlining the importance of accessible design in web development.',
    ],
  };

  return (
    <Container>
      <Header>
        <Title>{course.title}</Title>
        <Subtitle>Instructor: {course.instructor}</Subtitle>
      </Header>

      <MediaContainer>
        <VideoContainer>
          <ResponsiveIframe
            src={course.videoUrl}
            title="Course Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>

        <Image src={process.env.PUBLIC_URL + course.imageUrl} alt="Course Preview" />
      </MediaContainer>

      <ContentSection>
        <SectionTitle>About the Course</SectionTitle>
        <Description>{course.description}</Description>
      </ContentSection>

      <ContentSection>
        <SectionTitle>Assignments</SectionTitle>
        <AssignmentList>
          {course.assignments.map((assignment, index) => (
            <AssignmentItem key={index}>{assignment}</AssignmentItem>
          ))}
        </AssignmentList>
      </ContentSection>
      <Comments />
    </Container>
  );
};

export default CourseDetails;
