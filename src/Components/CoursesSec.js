import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Styled Components
const Section = styled.section`
  background-color: #f4f4f4;
  text-align: center; /* Center align content in this section */
  padding: 40px 0;
`;



const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 70%;
  }
`;

const GridList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: block;
    
  }
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

  @media (max-width: 768px) {
    width: calc(100% - 20px); /* Adjust for the margin */
    max-width:90%;
    margin: 20px auto; /* Center the card horizontally and add margin */
    height: 280px;
    box-sizing: border-box; /* Include padding and border in the width */
  }
`;


const CardBanner = styled.figure`
  position: relative;
  width: 100%;
  height: 40%;
  overflow: hidden;
  margin: 0;
  display: flex;
  align-items: flex-start;
  
`;

const CardContent = styled.div`
  padding: 15px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
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

  @media (max-width: 768px) {
    font-size: 0.8rem;
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

  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

const Price = styled.data`
  color: black;
  font-family: 'Arial', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  margin-block: 8px 0;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const CardMetaList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 10px 0;
`;

const CardMetaItem = styled.li`
  position: relative;
  gap: 2px;
  color: gray;

  &:not(:last-child)::after {
    content: "|";
    display: inline-block;
    color: #c0c0c0;
    padding-inline: 2px;
  }

    @media (max-width: 768px) {
    font-size: 0.6rem;
    padding: 2px 4px;
  }
`;

const Badge = styled.span`
  font-family: 'Arial', sans-serif;
  border-radius: 5px;
  background-color: teal;
  max-width: max-content;
  color: white;
  line-height: 20px;
  padding-inline: 2px;
`;


const BrowseLink = styled.a`
  display: inline-block;
  border: 2px solid teal;
  background-color: white;
  color: teal;
  padding: 12px 24px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.2rem;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: teal;
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 6px 10px;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin: 20px 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const MobileSlider = styled(Slider)`
  @media (min-width: 769px) {
    display: none !important;
  }
`;

const DesktopGrid = styled.div`
  display: none;

  @media (min-width: 769px) {
    display: flex;
    justify-content: space-between;
  }
`;

const CoursesSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <div style={{ position: 'absolute', top: '50%', left: '0', zIndex: '1', width: '40px', height: '40px', backgroundColor: 'teal', borderRadius: '50%', cursor: 'pointer', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&lt;</div>,
    nextArrow: <div style={{ position: 'absolute', top: '50%', right: '0', zIndex: '1', width: '40px', height: '40px', background: 'teal', borderRadius: '50%', cursor: 'pointer', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&gt;</div>,
    appendDots: dots => <ul style={{ bottom: '10px', display: 'flex', justifyContent: 'center', padding: '0', listStyle: 'none' }}>{dots}</ul> // Apply inline style for increased bottom margin
  };


  return (
    <Section id="courses" aria-label="course">
      <Container data-aos="fade-right"
    data-aos-duration="1000">
        <SectionSubtitle>Accessible Courses</SectionSubtitle>
        <SectionTitle>Pick A Course To Get Started</SectionTitle>

        {/* Mobile Slider */}
        <MobileSlider {...settings}>
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
        </MobileSlider>

        {/* Desktop Grid */}
        <DesktopGrid>
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
        </DesktopGrid>

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
