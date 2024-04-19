// styles.js
import styled from 'styled-components';

export const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;

const tealColor = '#008080';

export const BlogsPageContainer = styled.div`
  /* Add your global styles for the entire page here */
`;

export const PageHeading = styled.div`
  background-color: ${tealColor};
  padding: 10px;
  text-align: center;

  h1 {
    color: #fff;
    font-size: 24px;
  }
`;

export const SearchBar = styled.div`
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

export const CategoriesContainer = styled.div`
  .category-cards {
    display: flex;
    gap: 16px;
    overflow-x: auto;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const CategoryCard = styled.div`
  background-color: ${(props) => (props.tealBackground ? tealColor : '#fff')};
  border: 1px solid ${tealColor};
  padding: 16px;
  text-align: center;
  border-radius: var(--radius-10);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  margin-bottom: 10px;

  h3 {
    font-family: var(--ff-league_spartan);
    color: ${(props) => (props.tealBackground ? '#fff' : tealColor)};
    font-size: var(--fs-2);
    line-height: 1.1;
    margin-top: 8px;
  }

  @media (max-width: 600px) {
    width: calc(100% - 32px); /* Adjust the value as needed for spacing */
  }
`;
