// styles.js
import styled from 'styled-components';

export const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;

export const BlogsPageContainer = styled.div`
  margin-left:1%;
  margin-right:1%;
`;

export const BlogsHeader = styled.div`
background-color: teal;
border-radius:5px;
@media (max-width: 600px) {
margin-left:2%;
margin-right:2%;
}
`;

export const PageHeading = styled.div`
  padding: 10px;
  text-align: center;

  h1 {
    color: #fff;
    font-size: 24px;
  }
  
  p{
    color: #fff;
    font-size: 13px;
    margin-top: -20px;
  }
`;

export const SearchBar = styled.div`
  padding: 10px;
  text-align: center;
  margin-top: 3%;

  input {
    padding: 12px;
    width: 80%;
    max-width: 400px;
  }

  @media (max-width: 600px) {
    input {
      width: 80%; 
    padding: 6px;
    margin-top: 10%;
    }
  }
`;

export const CategoriesContainer = styled.div`
  .category-cards {
    display: flex;
    gap: 16px;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  
  @media (max-width: 600px) {
    width: 100%;
    }
`;

export const CategoryCard = styled.div`
  background-color: white;
  border: 1px solid teal;
  padding: 16px;
  text-align: center;
  border-radius: var(--radius-10);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  margin-bottom: 10px;

  h3 {
    font-family: var(--ff-league_spartan);
    color:teal;
    font-size: var(--fs-2);
    line-height: 1.1;
    margin-top: 8px;
  }

  @media (max-width: 600px) {
    width: 10%; 
    h3 {
      
      font-size: 0.4rem;
    }
  }
`;
