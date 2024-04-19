import React from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  max-width: 800px;
  margin: auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 10px;
`;

const Instructor = styled.p`
  font-style: italic;
  margin-bottom: 20px;
`;

const MediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ResponsiveIframe = styled.iframe`
  width: 100%;
  height: 315px; /* Adjust the height as needed */
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const AccessibilityNote = styled.p`
  font-size: 14px;
  color: #888;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.span`
  font-size: 24px;
  margin-right: 5px;
`;

const SectionHeading = styled.h2`
  font-size: 20px;
  margin-top: 20px;
`;

const AssignmentList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
  margin-top: 10px;
`;

const AssignmentItem = styled.li`
  margin-bottom: 10px;
`;

const Description = styled.p`
  line-height: 1.6;
  margin-top: 20px;
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
      <Title>{course.title}</Title>
      <Instructor>Instructor: {course.instructor}</Instructor>

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

        <AccessibilityNote>
          <Icon role="img" aria-label="Accessibility Icon">
            🌐
          </Icon>{' '}
          Note: This video is subtitled, and alternative descriptions are provided for visual content to ensure accessibility.
        </AccessibilityNote>

        <Image src={process.env.PUBLIC_URL + course.imageUrl} alt="Course Preview" />

        <AccessibilityNote>
          <Icon role="img" aria-label="Accessibility Icon">
            🖼️
          </Icon>{' '}
          Alternative: Image showing a preview of the course. Alt text: Course Preview Image.
        </AccessibilityNote>
      </MediaContainer>

      <Description>{course.description}</Description>

      <SectionHeading>Assignments</SectionHeading>
      <AssignmentList>
        {course.assignments.map((assignment, index) => (
          <AssignmentItem key={index}>
            <Icon role="img" aria-label="Assignment Icon">
              📝
            </Icon>{' '}
            {assignment}
          </AssignmentItem>
        ))}
      </AssignmentList>
    </Container>
  );
};

export default CourseDetails;
