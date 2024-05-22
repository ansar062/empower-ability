import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import styled from "styled-components";

// Styled components for enhanced styling
const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 40px;
  background-color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    padding: 20px;
    margin: 10px;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  color: #333333;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

const SubTitle = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
  color: #666666;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #333333;
`;

const ApplyText = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333333;
`;

const ApplyButton = styled.button`
  background-color: teal;
  color: #ffffff;
  border: none;
  padding: 12px 24px;
  font-size: 18px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: teal;
  }
`;

const SalaryCategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Salary = styled.span`
  font-size: 18px;
  color: #666666;
`;

const Category = styled.span`
  font-size: 18px;
  color: #666666;
`;

const JobDetailPage = () => {
  const { id } = useParams(); // Extract the job ID from the URL params
  const [job, setJob] = useState({}); // Initialize the job state with an empty object

  useEffect(() => {
    async function fetchJob() {
      try {
        await axios
          .get(
            `https://empowerabilitybackend56dcdfs4q43srd.vercel.app/jobs/job/${id}`
          )
          .then((response) => {
            const res = response.data;
            setJob(res.job);
          });
      } catch (err) {
        console.log(err);
      }
    }
    fetchJob();
  }, []);
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <Container>
      {job && (
        <>
          <Title>{job.title}</Title>
          <SubTitle>Company: {job.company}</SubTitle>
          <SubTitle>Location: {job.location}</SubTitle>
          <hr />
          <Description>
            <h3>Description</h3>
            {job.description}
          </Description>
          <hr />
          <SalaryCategoryWrapper>
            {job.fixedSalary && <Salary>Salary: {job.fixedSalary}</Salary>}
            {job.salaryFrom && (
              <Salary>
                Salary: {job.salaryFrom} - {job.salaryTo}
              </Salary>
            )}
            <Category>Category: {job.category}</Category>
          </SalaryCategoryWrapper>
          <ApplyText>{job.howToApply}</ApplyText>
          {currentUser && currentUser.role !== "employer" && (
            <ApplyButton>
              <NavLink to={`/jobs/${job.title}/${job._id}/apply`}>
                Apply Now
              </NavLink>
            </ApplyButton>
          )}
        </>
      )}
    </Container>
  );
};

export default JobDetailPage;
