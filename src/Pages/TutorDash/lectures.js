import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function LecturesList(props) {
  const { id } = props;
  const [lectures, setLectures] = useState([]);
  useEffect(() => {
    async function fetchLecture() {
      const response = await axios.get(
        `https://empowerabilitybackend56dcdfs4q43srd.vercel.app/getlecture/${id}`,
        {
          withCredentials: true,
        }
      );
      const data = await response.data;
      console.log(data);
      setLectures(data);
    }
    fetchLecture();
  }, []);
  async function deleteLecture() {
    try {
      await axios.delete(`https://empowerabilitybackend56dcdfs4q43srd.vercel.app/deletelecture/${id}`, {
        withCredentials: true,
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <LectureWrapper>
      <Thumbnail alt="Lecture Thumbnail" src={lectures.video} />
      <LectureDetails>
        <Title>{lectures.title}</Title>
      </LectureDetails>
      <button type="button" onClick={deleteLecture}>Delete</button>
    </LectureWrapper>
  );
}


// Define styled components
const LectureWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; /* Adjust as needed */
`;

const Thumbnail = styled.video`
  border-radius: 0.375rem; /* Assuming 6px border-radius */
  height: 4rem; /* 64px */
  width: 4rem; /* 64px */
  aspect-ratio: 1/1; /* Maintain aspect ratio */
  object-fit: cover;
`;

const LectureDetails = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-size: 1rem; /* Adjust as needed */
  font-weight: 500;
  color: #333; /* Adjust as needed */
`;

const Duration = styled.p`
  font-size: 0.875rem; /* Adjust as needed */
  color: #666; /* Adjust as needed */
`;
