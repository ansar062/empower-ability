import React from 'react';
import Posts from '../../Components/Blogs/Posts';
import Sidebar from '../../Components/Blogs/Sidebar';
import {
  BlogsPageContainer,
  PageHeading,
  SearchBar,
  CategoriesContainer,
  CategoryCard,
  MainContent,
} from './styles';

const Blogs = () => {
  const categories = [
    { id: 1, name: 'Personal Stories' },
    { id: 3, name: 'Skill Development' },
    { id: 4, name: 'Job Search Tips' },
    { id: 5, name: 'Accessibility in Daily Life' },
  ];

  return (
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
  );
};

export default Blogs;
