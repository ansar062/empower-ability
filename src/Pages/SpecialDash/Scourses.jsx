import React from 'react';
import Layout from './Slayout'; 
import Courses from '../CoursesPage/Courses';
import styled from 'styled-components';

const CoursesContainer = styled.div`
  padding: 0.5rem;
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const Scourses = () => {
    return (
        <Layout>
            <CoursesContainer>
            <Courses />
            </CoursesContainer>
        </Layout>
  );
};

export default Scourses;