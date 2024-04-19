import React from 'react';
import styled from 'styled-components';

const Dashboard = () => {
  // Dummy data for courses and analytics
  const courses = [
    { id: 1, title: 'Course 1', studentsEnrolled: 120 },
    { id: 2, title: 'Course 2', studentsEnrolled: 95 },
    { id: 3, title: 'Course 3', studentsEnrolled: 78 },
  ];

  const totalCourses = courses.length;
  const totalStudentsEnrolled = courses.reduce((total, course) => total + course.studentsEnrolled, 0);

  return (
    <DashboardContainer>
      <DashboardContent>
        <DashboardHeader>
          <h1>Welcome to Your Dashboard</h1>
          <p>Here's a quick overview of your courses and students enrolled.</p>
        </DashboardHeader>
        <DashboardStats>
          <StatCard>
            <StatValue>{totalCourses}</StatValue>
            <StatLabel>Total Courses</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>{totalStudentsEnrolled}</StatValue>
            <StatLabel>Total Students Enrolled</StatLabel>
          </StatCard>
        </DashboardStats>
        <CourseList>
          <CourseListTitle>My Courses</CourseListTitle>
          {courses.map(course => (
            <CourseItem key={course.id}>
              <CourseImage src={process.env.PUBLIC_URL + '/Images/course-3.jpg'} alt={course.title} />
              <CourseDetails>
                <CourseTitle>{course.title}</CourseTitle>
                <StudentsEnrolled>{course.studentsEnrolled} Students Enrolled</StudentsEnrolled>
              </CourseDetails>
            </CourseItem>
          ))}
        </CourseList>
      </DashboardContent>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  display: flex;
  margin: 20px;
`;

const DashboardContent = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

const DashboardHeader = styled.div`
  margin-bottom: 30px;
  text-align:center;
`;

const DashboardStats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const StatCard = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  flex: 1;
  margin: 0 10px;
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const StatLabel = styled.div`
  color: #555;
  font-size: 14px;
  text-transform: uppercase;
  margin-top: 10px;
`;

const CourseList = styled.div`
  margin-top: 20px;
`;

const CourseListTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const CourseItem = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const CourseImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 8px;
  margin-right: 20px;
`;

const CourseDetails = styled.div`
  flex-grow: 1;
`;

const CourseTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

const StudentsEnrolled = styled.div`
  color: #555;
  font-size: 16px;
`;

export default Dashboard;
