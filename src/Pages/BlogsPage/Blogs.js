import React from 'react';
import Posts from '../../Components/Blogs/Posts';
import * as Styles from './styles';

const Blogs = () => {
  const categories = [
    { id: 1, name: 'Personal Stories' },
    { id: 3, name: 'Skill Development' },
    { id: 4, name: 'Job Search Tips' },
    { id: 5, name: 'Accessibility in Daily Life' },
  ];

  return (
    <Styles.BlogsPageContainer>
    <Styles.BlogsHeader>
      <Styles.PageHeading>
        <h1>Blogs</h1>
        <p>Home/Blogs</p>
      </Styles.PageHeading>
      <Styles.SearchBar>
        <input type="text" placeholder="Search..." />
      </Styles.SearchBar>
      </Styles.BlogsHeader>

      <Styles.CategoriesContainer>
        <div className="category-cards">
          {categories.map((category) => (
            <Styles.CategoryCard key={category.id}>
              <h3>{category.name}</h3>
              {/* Add a description if needed */}
            </Styles.CategoryCard>
          ))}
        </div>
      </Styles.CategoriesContainer>

      <Styles.MainContent>
        <Posts />
      </Styles.MainContent>
    </Styles.BlogsPageContainer>
  );
};

export default Blogs;
