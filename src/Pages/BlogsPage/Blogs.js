import React from 'react';
import Posts from '../../Components/Blogs/Posts';
import * as Styles from './styles';

const Blogs = () => {

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

      <Styles.MainContent>
        <Posts />
      </Styles.MainContent>
    </Styles.BlogsPageContainer>
  );
};

export default Blogs;
