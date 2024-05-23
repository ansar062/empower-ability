import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const CoursePageWrapper = styled.div`
  font-family: 'Arial', sans-serif;
  padding: 20px;
`;

export const CoursesHeader = styled.div`
  text-align: center;
  background-color: teal;
  color: white;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;

  h1 {
    font-size: 28px;
    margin-bottom: 10px;
  }

  div {
    font-size: 14px;
  }
`;

export const Header = styled.header`
  h1 {
    margin: 0;
  }

  span {
    font-size: 14px;
  }
`;

export const NavigationLink = styled(NavLink)`
  background-color: teal;
  color: white;
  padding: 10px 20px;
  border: 2px solid teal;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.8rem;
`;

export const SearchSection = styled.div`
  margin-bottom: 20px;
  margin-top: 80px;
  display: flex;
  justify-content: space-between;  /* Place items on the same row with space in between */

  input {
    padding: 10px;
    margin-right: 10px;
    flex-grow: 1;  /* Allow the input to grow and take available space */
  }

  div {
    display: flex;
    align-items: center;

    label {
      margin-right: 10px;
    }

    select {
      padding: 8px;
      border-radius: 5px;
      margin-right: 10px;
      height: 30px; /* Adjust the height of select elements */
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column; 
    align-items: center; 

    select {
      height: 26px;
      width: 30%;
      font-size: 0.8rem; 
    }
    
    input {
      margin-bottom: 10px; 
      padding: 9px;
      width:90%;
    }

    div {
      margin-top: 10px; 
    }
  }
`;
export const CoursesSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center; 

  div {
    background-color: #fff;
    border: 2px solid teal;
    padding: 10px; 
    width: 20%; /* Adjusted width */
    height: auto;
    box-sizing: border-box;
    border-radius: 7px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    margin-top: 30px; 
    margin-bottom: 30px;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
    }
  }

  img {
    width: 100%;
    height: 150px; /* Adjusted height */
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 15px; /* Increased margin */
  }

  h3 {
    margin-top: -10px;
    font-size: 1.5rem;
    color: teal;
  }

  p {
    margin: 5px 0;
    color: #777;
    line-height: 1.3; 
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: nowrap; /* Prevent wrapping to keep all cards in a single row */
    gap: 55px; /* No gap between cards */
    overflow-x: auto; /* Enable horizontal scrolling */
    padding-bottom: 20px; /* Add some bottom padding to ensure space for scrolling */

    div {
      width: 75%; /* Adjust width to fit screen */
      flex: 0 0 auto; /* Ensure cards don't shrink */
    }
  }
`;

export const CourseLink = styled(Link)`
  color: black;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: teal;
  }
`;

export const EnrollmentButton = styled.button`
  background-color: teal;
  color: white;
  padding: 10px 20px;
  border: 2px solid teal;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.8rem;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;

  button {
    background-color: teal;
    color: white;
    border: none;
    padding: 12px 18px;
    margin: 0 5px;
    cursor: pointer;
    border-radius: 8px;
    font-size: 1rem;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      background-color: #008080;
    }
  }
`;

export const TestimonialsSection = styled.section`
  background-color: #f8f8f8;
  padding: 40px 0;
  text-align: center;

  h2 {
    font-size: 28px;
    color: teal;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    color: #666;
  }
`;

export const TestimonialCard = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid teal; 
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
  }

  p:last-child {
    font-weight: bold;
  }
`;

export const NavigationArrow = styled.span`
  font-size: 32px;
  color: teal;
  cursor: pointer;
  margin: 0 10px;

  &:hover {
    color: teal;
  }
`;
