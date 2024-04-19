// styles.js
import styled from 'styled-components';

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
    }
  }
`;

export const CoursesSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center; /* Center align the cards horizontally */

  div {
    background-color: #fff;
    border: 1px solid teal;
    padding: 15px; /* Reduced padding */
    width: calc(30% - 20px); /* Adjusted width */
    box-sizing: border-box;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;

    margin-top: 30px; /* Adjusted margin top for spacing */

    &:hover {
      transform: translateY(-5px);
    }
  }

  img {
    width: 100%;
    height: 150px; /* Adjusted height */
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 10px; /* Reduced margin */
  }

  h3 {
    margin: 10px 0;
    font-size: 1.5rem;
    color: teal;
  }

  p {
    margin: 5px 0;
    color: #777;
  }
`;



export const EnrollmentButton = styled.button`
  background-color: teal;
  color: white;
  padding: 15px 30px;
  border: 2px solid teal;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
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
export const BecomeInstructorWrapper = styled.section`
display: flex;
height:auto;
max-width: 800px; /* Decreased max-width */
margin: 0 auto;
padding: 40px 20px; /* Decreased padding */
`;

export const InstructorImage = styled.img`
width: 100%; /* Adjusted width to take full width */
max-width: 300px; /* Set max-width for responsiveness */
border-radius: 10px;
margin-right: 20px; /* Added margin for separation */
`;

export const InstructorContent = styled.div`
flex: 1;
background-color: #fff;
border-radius: 10px;
padding: 20px;
display: flex;
flex-direction: column;
align-items: flex-start; /* Adjusted alignment to start */
justify-content: center;
`;

export const InstructorHeading = styled.h2`
font-size: 2rem; /* Decreased font-size */
font-weight: bold;
color: #333;
margin-bottom: 15px; /* Decreased margin */
`;

export const InstructorSubHeading = styled.p`
font-size: 1.1rem; /* Decreased font-size */
color: #555;
margin-bottom: 15px; /* Decreased margin */
`;

export const InstructorCTAButton = styled.button`
background-color: #fff;
color: teal;
padding: 10px 20px; /* Decreased padding */
border: 2px solid teal;
border-radius: 5px;
cursor: pointer;
font-size: 1.1rem; /* Decreased font-size */
transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;

&:hover {
  background-color: teal;
  color: #fff;
  border-color: teal;
}
`;
