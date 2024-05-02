import styled from 'styled-components';
export const JobsContainer = styled.div`
  background-color: #ffffff;
`;

export const HeadBar = styled.div`
  background-color: teal;
  color:white;
  padding: 15px;
  text-align: center;
  margin-bottom: 30px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  margin-top: 60px;

`;

export const SearchBar = styled.input`
  width: 500px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  margin-right: 5px;
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
`;

export const JobListings = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
`;

export const JobCard = styled.div`
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin: 10px auto;
  width: 30%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  h3 {
    margin-bottom: 10px;
    color: teal;
    cursor: pointer;
    transition: color 0.3s;
  }

  p {
    color: #666;
    margin-bottom: 15px;
  }

  button {
    background-color: teal;
    color: #fff;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  &:hover {
    h3 {
      color: teal;
      text-decoration:underline;
    }

    button {
      background-color: teal;
    }
  }
`;

export const SuccessStoriesSection = styled.div`
  background-color: #ffffff;
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;

  h2 {
    font-size: 28px;
    color: teal;
    margin-bottom: 20px;
    position: relative;
    text-align: center;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 40px;
      height: 40px;
      background-color: teal;
      border-radius: 50%;
      cursor: pointer;
    }

    &::before {
      left: -60px;
    }

    &::after {
      right: -60px;
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

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 20px;
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
`;

