import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ApplicationsPage = () => {
  // Sample application data
  const [applications, setApplications] = useState(null);

  // State for filtering and sorting
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("id");

  // Function to handle filtering applications
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Function to handle sorting applications
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Filter applications based on the filter keyword
  const filteredApplications = applications?.filter(
    (application) =>
      application.jobId.title?.toLowerCase().includes(filter.toLowerCase()) ||
      application.applicantName.toLowerCase().includes(filter.toLowerCase()) ||
      application.status.toLowerCase().includes(filter.toLowerCase())
  );

  // Sort applications based on the selected sorting option
  const sortedApplications = filteredApplications?.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return -1;
    if (a[sortBy] > b[sortBy]) return 1;
    return 0;
  });

  const {currentUser} = useSelector((state) => state.auth);
  const hirerId = currentUser._id;
  useEffect(() => {
    try{
      async function getAllApplication(){
        await axios.get(`https://empowerabilitybackend56dcdfs4q43srd.vercel.app/all-applications-request/${hirerId}`, {
          withCredentials: true,
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }).then((response) => {
          const applicationData = response.data.applications;
          setApplications(applicationData);
        })
      }
      getAllApplication();
    }catch(err){}
    
  }, [])

  return (
    <Container>
      <Filters>
        <FilterInput
          type="text"
          placeholder="Search..."
          value={filter}
          onChange={handleFilterChange}
        />
        <SortSelect value={sortBy} onChange={handleSortChange}>
          <option value="id">Sort by ID</option>
          <option value="jobTitle">Sort by Job Title</option>
          <option value="applicantName">Sort by Applicant Name</option>
          <option value="status">Sort by Status</option>
        </SortSelect>
      </Filters>
      <ApplicationsTable>
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Applicant Name</th>
            <th>Contact No.</th>
            <th>Email</th>
            <th>Resume Url</th>
            <th>Experience</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            sortedApplications &&
          sortedApplications.map((application) => (
            <tr key={application._id}>
              <td>{application.jobId.title}</td>
              <td>{application.applicantId.firstname}{application.applicantId.lastname}</td>
              <td>{application.contactNo}</td>
              <td>{application.applicantId.email}</td>
              <td>{application.resumeUrl}</td>
              <td>{application.experience}</td>
              <td>{application.status}</td>
            </tr>
          ))}
        </tbody>
      </ApplicationsTable>
    </Container>
  );
};

const Container = styled.div`
  width: 77.5%;
  margin: 0 auto;
  padding: 2%;

  @media (max-width: 768px) {
    width: 95%;
    padding: 1%;
  }
`;

const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2%;

  @media (max-width: 768px) {
    gap: 30%;
    align-items: stretch;
  }
`;

const FilterInput = styled.input`
  padding: 0.5%;
  width: 17%;

  @media (max-width: 768px) {
    width: 50%;
    margin-bottom: 1%;
  }
`;

const SortSelect = styled.select`
  padding: 0.5%;

  @media (max-width: 768px) {
    width: 50%;
  }
`;

const ApplicationsTable = styled.table`
  width: 90%;
  border-collapse: collapse;
  margin: 0 auto;

  th,
  td {
    border: 1px solid teal;
    padding: 0.5%;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  @media (max-width: 1024px) {
    width: 90%;
    th, td {
      padding: 0.75%;
      font-size: 14px;
    }

    th {
      font-size: 15px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    th, td {
      padding: 1%;
      font-size: 13px;
    }

    th {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    width: 90%;
    th, td {
      padding: 0.25%;
      font-size: 0.3rem;
    }

    th {
      font-size: 0.5rem;
    }
  }
`;

export default ApplicationsPage;
