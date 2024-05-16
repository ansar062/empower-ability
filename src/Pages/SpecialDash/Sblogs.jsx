import React from "react";
import Layout from "./Slayout";
import Posts from '../../Components/Blogs/Posts';
import Sidebar from '../../Components/Blogs/Sidebar';

import styled from "styled-components";

const BlogsContainer = styled.div`
  padding: 0.5rem;
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;

const tealColor = "#008080";

const BlogsPageContainer = styled.div`
  /* Add your global styles for the entire page here */
`;

const PageHeading = styled.div`
  background-color: ${tealColor};
  padding: 10px;
  text-align: center;

  h1 {
    color: #fff;
    font-size: 24px;
  }
`;

const SearchBar = styled.div`
  background-color: ${tealColor};
  padding: 10px;
  text-align: center;

  input {
    padding: 12px;
    width: 80%;
    max-width: 400px;
  }

  @media (max-width: 600px) {
    input {
      width: 100%;
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
`;
const CategoryCard = styled.div`
  background-color: ${(props) => (props.tealBackground ? tealColor : "#fff")};
  border: 1px solid ${tealColor};
  padding: 16px;
  text-align: center;
  border-radius: var(--radius-10);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  margin-bottom: 10px;

  h3 {
    font-family: var(--ff-league_spartan);
    color: ${(props) => (props.tealBackground ? "#fff" : tealColor)};
    font-size: var(--fs-2);
    line-height: 1.1;
    margin-top: 8px;
  }

  @media (max-width: 600px) {
    width: calc(100% - 32px); /* Adjust the value as needed for spacing */
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
      <BlogsContainer>
        <BlogsPageContainer>
          <PageHeading>
            <h1>Blogs</h1>
            <p>Home/Blogs</p>
          </PageHeading>

          <SearchBar>
            <input type="text" placeholder="Search..." />
          </SearchBar>

          <CategoriesContainer>
            <div className="category-cards">
              {categories.map((category) => (
                <CategoryCard key={category.id}>
                  <h3>{category.name}</h3>
                  {/* Add a description if needed */}
                </CategoryCard>
              ))}
            </div>
          </CategoriesContainer>

          <MainContent>
            <Posts />
            <Sidebar />
          </MainContent>
        </BlogsPageContainer>
      </BlogsContainer>
    </Layout>
  );
};

export default Sblogs;
