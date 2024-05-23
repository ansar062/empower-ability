import styled from 'styled-components';

export const JobsContainer = styled.div`
  background-color: #ffffff;
  margin-right: 4%;
  margin-left: 4%;

  @media (max-width: 768px) {
    margin-right: 4%;
    margin-left: 4%;
  }

  @media (max-width: 480px) {
    margin-right: 4%;
    margin-left: 4%;
  }
`;

export const HeadBar = styled.div`
  background-color: teal;
  color: white;
  padding: 15px;
  text-align: center;
  margin-bottom: 30px;
  border-radius: 5px;
  margin-right: -3%;
  margin-left: -3%;

  @media (max-width: 768px) {
    margin-right: -2%;
    margin-left: -2%;
  }

  @media (max-width: 480px) {
    margin-right: -1%;
    margin-left: -1%;
  }  
  h1{
      font-size:1.5rem;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  margin-top: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    margin-top: 30px;
  }
`;

export const SearchBar = styled.input`
  width: 500px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  margin-right: 5px;

  @media (max-width: 768px) {
    width: 90%;
    padding:3%;
  margin-top: 5%;
  }
`;

export const FilteringOptions = styled.div`
  margin-top: 10px;

  label {
    margin-right: 10px;
    color: #fff;
  }

  select {
    padding: 8px;
    border: none;
    border-radius: 4px;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    margin-top: -1%;
    display: flex;
    flex-wrap: wrap;
    align-items:center;

    label {
      width: 40%;
    }

    select {
      padding: 4px;
      width: 100%;
    }
  }
`;

export const JobListings = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
  margin-top: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const JobCard = styled.div`
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin: 10px;
  width: 30%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  a {
    font-size: 1.2rem;
    font-weight: bold;
    color: black;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: teal;
    }
  }

  button {
    background-color: teal;
    color: white;
    padding: 6px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 1rem;

    &:hover {
      background-color: white;
      border: 2px teal solid;
      color: teal;
    }
  }

  p {
    color: #666;
    margin-bottom: 15px;
  }

  &:hover {
    h3 {
      color: teal;
      text-decoration: underline;
    }
  }

  @media (max-width: 1024px) {
    width: 45%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 2%;

    a {
      font-size: 1rem;
    }

    p {
      font-size: 0.8rem;
    }

    button {
      font-size: 0.9rem;
      padding: 6px 10px;
    }
  }
`;

export const SuccessStoriesSection = styled.div`
  background-color: #ffffff;
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
  overflow-x: auto; /* Enable horizontal scrolling */

  @media (max-width: 480px) {
    /* Ensure success stories are displayed vertically on mobile */
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    font-size: 28px;
    color: teal;
    margin-bottom: 20px;
    position: relative;
    text-align: center;
    &::before {
      left: -60px;
    }

    &::after {
      right: -60px;
    }
  }

    @media (max-width: 480px) {
      display: flex;
      overflow-x: auto; /* Enable horizontal scrolling */
      scroll-snap-type: x mandatory; /* Snap scrolling to each card */
      -webkit-overflow-scrolling: touch; /* Enable smooth scrolling on iOS */
  
      h2 {
        margin-bottom: 10px; /* Move heading to the top on mobile */
      }
    }
`;

export const StoryCard = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  margin-bottom: 20px;
  margin-right: 20px; /* Add margin between cards */

  @media (max-width: 480px) {
    /* Ensure cards are displayed in a row on mobile */
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    margin-right: 0;
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 20px;

    @media (max-width: 480px) {
      /* Display image above text on mobile */
      margin-right: 0;
      margin-bottom: 10px;
    }
  }

  div {
    flex: 1;
  }

  h3 {
    margin-bottom: 8px;
    font-size: 18px;
    color: teal;
  }

  p {
    font-size: 16px;
    color: #666;
  }

  &:last-child {
    margin-right: 0; /* Remove margin for the last card */
  }

  @media (max-width: 480px) {
    padding: 10px;

    h3 {
      font-size: 0.8rem;
    }

    p {
      font-size: 0.6rem;
    }
    img {
      width: 20%;
      height: 20%; 
    }
  }
`;

