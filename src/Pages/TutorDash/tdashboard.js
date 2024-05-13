import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Dashboard = () => {
  
  const [courses, setCourses] = useState([]); // Replace the dummy data with an empty array

  const totalCourses = courses?.length;
 useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8000/getmycourses", {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setCourses(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
 }, [])
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
          {/* <StatCard>
            <StatValue>{totalStudentsEnrolled}</StatValue>
            <StatLabel>Total Students Enrolled</StatLabel>
          </StatCard> */}
        </DashboardStats>
        <CourseList>
          <CourseListTitle>My Courses</CourseListTitle>
          {
          courses &&
          courses.map(course => (
            <CourseItem key={course.id}>
              <CourseImage src={course.cover} alt={course.title} />
              <CourseDetails>
                <CourseTitle>{course.title}</CourseTitle>
                
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
