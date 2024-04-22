import React from 'react';
import Layout from './Slayout'; 
import Blogs from '../BlogsPage/Blogs';
import styled from 'styled-components';

const BlogsContainer = styled.div`
  padding: 0.5rem;
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const Sblogs = () => {
    return (
        <Layout>
            <BlogsContainer>
            <Blogs />
            </BlogsContainer>
        </Layout>
  );
};

export default Sblogs;