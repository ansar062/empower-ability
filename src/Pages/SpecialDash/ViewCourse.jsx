import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Card, Heading, Text, Avatar } from "@radix-ui/themes";
import axios from "axios";
import ReactPlayer from 'react-player';

const Container = styled.div`
  display: grid;
  min-height: 100vh;
  width: 100%;
  grid-template-columns: 280px 1fr;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.div`
  display: none;
  border-right: 1px solid #ddd;
  background-color: #f8f8f8;
  @media (min-width: 1024px) {
    display: block;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 0 16px;
`;

const SidebarLink = styled.button`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: #f0f0f0;
  text-decoration: none;
  color: #333;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #333;
    background-color: #e0e0e0;
  }
`;

const SidebarNav = styled.nav`
  display: grid;
  align-items: start;
  padding: 16px;
  gap: 8px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  height: 60px;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 0 16px;
  background-color: #f8f8f8;
  @media (max-width: 1024px) {
    height: 48px;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px;
  @media (min-width: 768px) {
    gap: 32px;
    padding: 24px;
  }
`;

const LectureContent = styled.div`
  display: grid;
  gap: 24px;
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 400px;
    gap: 32px;
  }
`;

const VideoContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`;

const VideoPlaceholder = styled.video`
  width: 100%;
  aspect-ratio: 16/9;
  background-color: #f0f0f0;
`;

const LectureInfo = styled.div`
  padding: 16px;
`;

const LectureTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`;

const LectureDescription = styled.p`
  color: #666;
  margin: 8px 0 0;
`;

const DetailsCard = styled(Card)`
  padding: 16px;
  gap: 16px;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DetailLabel = styled.span`
  color: #666;
`;

const DetailValue = styled.span`
  font-weight: 600;
`;

const InstructorCard = styled(Card)`
  padding: 16px;
  gap: 16px;
`;

const InstructorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const InstructorImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
`;

const InstructorName = styled.h3`
  font-weight: 600;
  margin: 0;
`;

const InstructorTitle = styled.p`
  color: #666;
  margin: 0;
`;

const InstructorDescription = styled.p`
  color: #666;
  margin: 8px 0 0;
`;

const BookIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: none;
  stroke: #333;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;

  path {
    d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20";
  }
`;

const PlayIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: none;
  stroke: #333;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;

  polygon {
    points: "6 3 20 12 6 21 6 3";
  }
`;

function ViewCourse() {
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();
  const [selectedLecture, setSelectedLecture] = useState(null);
  const [courseData, setCourseData] = useState({
    title: "",
    category: "",
    cover: "",
    description: "",
    difficultyLevel: "",
    price: "",
    publisher: {
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      image: "",
    },
    Lecture: [],
  });

  useEffect(() => {
    async function getcourse() {
      try {
        await axios
          .get(`https://empowerabilitybackend56dcdfs4q43srd.vercel.app/view/course/getsinglebuyedcourse/${id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            withCredentials: true,
          })
          .then((res) => {
            if (res.data.status) {
              setCourseData(res.data.course);
            } else {
              navigate("/courses");
            }
          });
      } catch (err) {
        console.log(err);
      }
    }
    getcourse();
  }, []);
  return (
    <Container>
      <Sidebar>
        <SidebarHeader>
            <span>{courseData.title}</span>
        </SidebarHeader>
        <SidebarNav>
          {courseData.Lecture &&
            courseData.Lecture.map((lecture, index) => (
              <SidebarLink onClick={() => setSelectedLecture(lecture)} >
                <PlayIcon />
                <span>{lecture.title}</span>
              </SidebarLink>
            ))}
        </SidebarNav>
      </Sidebar>
      <Content>
        <Header>
          <div>
            <HeaderTitle>{selectedLecture ? selectedLecture.title : 'Select a lecture'}</HeaderTitle>
          </div>
        </Header>
        <Main>
          <LectureContent>
            <VideoContainer>
            <ReactPlayer url={selectedLecture ? selectedLecture.video : ''} width="100%" height="400px" controls />
            </VideoContainer>
            <LectureInfo>
              <LectureTitle>{selectedLecture ? selectedLecture.title : 'Select a lecture'}</LectureTitle>
              <LectureDescription>
                In this lecture, we'll cover the fundamental concepts of the
                course, including data types, control flow, and functions.
              </LectureDescription>
            </LectureInfo>
          </LectureContent>
          <div className="grid gap-4">
            <DetailsCard>
              <Heading>
                <Text>Course Details</Text>
              </Heading>
              <Card>
                <DetailItem>
                  <DetailLabel>Course Name</DetailLabel>
                  <DetailValue>{courseData.title}</DetailValue>
                </DetailItem>
                <DetailItem>
                  <DetailLabel>Instructor</DetailLabel>
                  <DetailValue>
                    {courseData.publisher.firstname}{" "}
                    {courseData.publisher.lastname}
                  </DetailValue>
                </DetailItem>

                <DetailItem>
                  <DetailLabel>Lectures</DetailLabel>
                  <DetailValue>{courseData.Lecture.length}</DetailValue>
                </DetailItem>
              </Card>
            </DetailsCard>
            <InstructorCard>
              <Heading>
                <Text>About the Instructor</Text>
              </Heading>
              <Card>
                <InstructorInfo>
                  <Avatar
                    fallback={
                      courseData.publisher.firstname[0] +
                      courseData.publisher.lastname[0]
                    }
                    src={courseData.publisher.image}
                  />
                  <div>
                    <InstructorName>
                      {courseData.publisher.firstname}{" "}
                      {courseData.publisher.lastname}
                    </InstructorName>
                    <InstructorTitle>
                      {courseData.publisher.email}
                    </InstructorTitle>
                  </div>
                </InstructorInfo>
              </Card>
            </InstructorCard>
          </div>
        </Main>
      </Content>
    </Container>
  );
}

export default ViewCourse;
