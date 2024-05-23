import React from "react";
import Layout from "./Slayout";
import Posts from '../../Components/Blogs/Posts';
import Sidebar from '../../Components/Blogs/Sidebar';

import styled from "styled-components";

const tealColor = "#008080";

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
  
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const BlogsPageContainer = styled.div`
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 8%;

  @media (max-width: 600px) {
    margin-top: 30%;
  }
`;

const BlogsHeader = styled.div`
  background-color: ${tealColor};
  border-radius: 5px;
  @media (max-width: 600px) {
    width: 95%;
  }
`;

const PageHeading = styled.div`
  padding: 10px;
  text-align: center;

  h1 {
    color: #fff !important; /* Override color */
    font-size: 24px;
  }

  p {
    color: #fff !important; /* Override color */
    font-size: 13px;
    margin-top: -20px;
  }
`;

const SearchBar = styled.div`
  background-color: ${tealColor};
  padding: 10px;
  text-align: center;
  margin-top: 3%;

  input {
    padding: 12px;
    width: 80%;
    max-width: 400px;

    @media (max-width: 600px) {
      width: 80%;
      padding: 6px;
    }
  }
`;

const CategoriesContainer = styled.div`
  .category-cards {
    display: flex;
    gap: 16px;
    overflow-x: auto;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const Sblogs = () => {
  const categories = [
    { id: 1, name: 'Personal Stories' },
    { id: 3, name: 'Skill Development' },
    { id: 4, name: 'Job Search Tips' },
    { id: 5, name: 'Accessibility in Daily Life' },
  ];

  return (
    <Layout>
      <BlogsPageContainer>
        <BlogsHeader>
          <PageHeading>
            <h1>Blogs</h1>
            <p>Home/Blogs</p>
          </PageHeading>
          <SearchBar>
            <input type="text" placeholder="Search..." />
          </SearchBar>
        </BlogsHeader>

        <MainContent>
          <Posts />
          <Sidebar />
        </MainContent>
      </BlogsPageContainer>
    </Layout>
  );
};

export default Sblogs;
