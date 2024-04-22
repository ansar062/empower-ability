import React from 'react';
import Layout from './Slayout'; 
import Jobs from '../JobsPage/Jobs';
import styled from 'styled-components';

const JobsContainer = styled.div`
  padding: 0.5rem;
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const Sjobs = () => {
    return (
        <Layout>
            <JobsContainer>
            <Jobs />
            </JobsContainer>
        </Layout>
  );
};

export default Sjobs;