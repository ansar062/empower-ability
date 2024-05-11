import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const Section = styled.section`
  background-color: #f4f4f4;
  text-align: center; /* Center align content in this section */
  padding: 40px 0;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;

`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin: 20px 0;
`;


const GridList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
`;

const CourseCard = styled.li`
  width: 30%;
  margin: 10px 0;

  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s;
  border: 2px solid teal;
  color: black;

  &:hover, &:focus-within {
    transform: scale(1.1);
  }
`;

const CardBanner = styled.figure`
  position: relative; /* Add relative positioning */
  width: 100%;
  height: 180px;
  overflow: hidden;
  margin: 0;
  display: flex;
  align-items: flex-start; /* Align items at the start of the flex container */
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  margin: 10px;
`;

const AbsBadge = styled.div`
  background-color: #ffd700;
  color: white;
  border-radius: 5px;
  padding: 6px 8px;
  line-height: 1;
`;

const Badge = styled.span`
  font-family: 'Arial', sans-serif;
  border-radius: 5px;
  background-color: teal;
  max-width: max-content;
  color: white;
  line-height: 20px;
  padding-inline: 8px;
`;

const CardContent = styled.div`
  padding: 15px;
  text-align: left;
`;

const CardTitle = styled.a`
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
  text-decoration: none;
  margin-block: 10px 0;
  display: block;
  transition: color 0.3s;

  &:hover, &:focus {
    color: teal;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const RatingWrapper = styled.div`
  display: flex;
  gap: 3px;
  color:orange;
`;

const RatingText = styled.p`
  color: gray;
  font-size: 0.9rem;
  font-weight: bold;
`;

const Price = styled.data`
  color: black;
  font-family: 'Arial', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  margin-block: 8px 0;
`;

const CardMetaList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 10px 0;
`;

const CardMetaItem = styled.li`
  position: relative;
  gap: 5px;
  color: gray;

  &:not(:last-child)::after {
    content: "|";
    display: inline-block;
    color: #c0c0c0;
    padding-inline: 8px;
  }
`;

const BrowseLink = styled.a`
  display: inline-block;
  border: 2px solid teal;
  background-color: white;
  color:teal;
  padding: 12px 24px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.2rem;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: teal;
    color:white;
  }
`;


const CoursesSection = () => {
  
  return (
    <Section id="courses" aria-label="course">
      <Container>
        <SectionSubtitle>Accessible Courses</SectionSubtitle>
        <SectionTitle>Pick A Course To Get Started</SectionTitle>
        <GridList>
          <CourseCard>
            <Link to="/coursedetail/1" style={{ textDecoration: 'none' }}>
              <CardBanner>
                <img
                  src="/Images/course-1.jpg"
                  width="100%"
                  height="180px"
                  loading="lazy"
                  alt="Build Responsive Real-World Websites with HTML and CSS"
                  className="img-cover"
                />
              </CardBanner>
              <CardContent>
                <Badge>Beginner</Badge>
                <CardTitle>
                  <span>Build Responsive Websites with HTML and CSS</span>
                </CardTitle>
                <Wrapper>
                  <RatingWrapper>
                    ★ ★ ★ ★ ★
                  </RatingWrapper>
                  <RatingText>(5.0/5 Rating)</RatingText>
                </Wrapper>
                <Price data-value="29">$29.00</Price>
                <CardMetaList>
                  <CardMetaItem>
                    <span>Adapted for Disabilities</span>
                  </CardMetaItem>
                  <CardMetaItem>
                    <span>20 Students</span>
                  </CardMetaItem>
                </CardMetaList>
              </CardContent>
            </Link>
          </CourseCard>

          <CourseCard>
            <Link to="/coursedetail/2" style={{ textDecoration: 'none' }}>
              <CardBanner>
                <img
                  src="/Images/course-2.jpg"
                  width="100%"
                  height="180px"
                  loading="lazy"
                  alt="Your Additional Course 2"
                  className="img-cover"
                />
              </CardBanner>
              <CardContent>
                <Badge>Intermediate</Badge>
                <CardTitle>
                  <span>Accessible Web Development Techniques</span>
                </CardTitle>
                <Wrapper>
                  <RatingWrapper>
                    ★ ★ ★ ★ ☆
                  </RatingWrapper>
                  <RatingText>(4.0/5 Rating)</RatingText>
                </Wrapper>
                <Price data-value="49">$49.00</Price>
                <CardMetaList>
                  <CardMetaItem>
                    <span>Adapted for Disabilities</span>
                  </CardMetaItem>
                  <CardMetaItem>
                    <span>15 Students</span>
                  </CardMetaItem>
                </CardMetaList>
              </CardContent>
            </Link>
          </CourseCard>

          <CourseCard>
            <Link to="/coursedetail/3" style={{ textDecoration: 'none' }}>
              <CardBanner>
                <img
                  src="/Images/course-3.jpg"
                  width="100%"
                  height="180px"
                  loading="lazy"
                  alt="Your Additional Course 3"
                  className="img-cover"
                />
              </CardBanner>
              <CardContent>
                <Badge>Advanced</Badge>
                <CardTitle>
                  <span>Inclusive Design Principles</span>
                </CardTitle>
                <Wrapper>
                  <RatingWrapper>
                    ★ ★ ★ ★ ★
                  </RatingWrapper>
                  <RatingText>(5.0/5 Rating)</RatingText>
                </Wrapper>
                <Price data-value="79">$79.00</Price>
                <CardMetaList>
                  <CardMetaItem>
                    <span>Adapted for Disabilities</span>
                  </CardMetaItem>
                  <CardMetaItem>
                    <span>25 Students</span>
                  </CardMetaItem>
                </CardMetaList>
              </CardContent>
            </Link>
          </CourseCard>
        </GridList>

        <Link to="/courses" style={{ textDecoration: 'none' }}>
          <BrowseLink>
            <span>Browse more accessible courses</span>
          </BrowseLink>
        </Link>
      </Container>
    </Section>
  );
};

export default CoursesSection;
