import React, { useState } from 'react';
import styled from 'styled-components';

const ManageJobsPage = () => {
  // State to manage job listings
  const [jobListings, setJobListings] = useState([]);
  
  // State for new job form
  const [newJob, setNewJob] = useState({
    name: '',
    description: '',
    category: '',
    salary: '',
    location: '',
    company: '',
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Job:', newJob);
    setJobListings(prevListings => [...prevListings, newJob]);
    clearForm();
  };

  // Function to handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewJob(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to clear form fields
  const clearForm = () => {
    setNewJob({
      name: '',
      description: '',
      category: '',
      salary: '',
      location: '',
      company: '',
    });
  };

  // Function to handle editing job listing
  const handleEdit = (index) => {
    // Add logic to edit job listing
    console.log('Editing job at index:', index);
  };

  // Function to handle deleting job listing
  const handleDelete = (index) => {
    // Add logic to delete job listing
    console.log('Deleting job at index:', index);
    setJobListings(prevListings => prevListings.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormHeader>Post New Jobs and help bring change</FormHeader>
        <FormField>
          <Label>Name:</Label>
          <Input type="text" name="name" value={newJob.name} onChange={handleChange} required />
        </FormField>
        <FormField>
          <Label>Description:</Label>
          <Textarea name="description" value={newJob.description} onChange={handleChange} required />
        </FormField>
        <FormField>
          <Label>Category:</Label>
          <Input type="text" name="category" value={newJob.category} onChange={handleChange} required />
        </FormField>
        <FormField>
          <Label>Salary:</Label>
          <Input type="number" name="salary" value={newJob.salary} onChange={handleChange} required />
        </FormField>
        <FormField>
          <Label>Location:</Label>
          <Input type="text" name="location" value={newJob.location} onChange={handleChange} required />
        </FormField>
        <FormField>
          <Label>Company:</Label>
          <Input type="text" name="company" value={newJob.company} onChange={handleChange} required />
        </FormField>
        <SubmitButton type="submit">Post Job</SubmitButton>
      </Form>
      
      {/* Display job listings table */}
      {jobListings.length > 0 && (
        <JobListingsTable>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Salary</th>
              <th>Location</th>
              <th>Company</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobListings.map((job, index) => (
              <tr key={index}>
                <td>{job.name}</td>
                <td>{job.description}</td>
                <td>{job.category}</td>
                <td>{job.salary}</td>
                <td>{job.location}</td>
                <td>{job.company}</td>
                <td>
                  <ActionButton onClick={() => handleEdit(index)}>Edit</ActionButton>
                  <ActionButton onClick={() => handleDelete(index)}>Delete</ActionButton>
                </td>
              </tr>
            ))}
          </tbody>
        </JobListingsTable>
      )}
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Form = styled.form`
  margin-bottom: 20px;
`;

const FormHeader = styled.h3`
  font-size: 20px;
  margin-bottom: 60px;
  text-align:center;
  color: #666;
`;

const FormField = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #666;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: teal;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const JobListingsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: teal;
    color: white;
  }
`;

const ActionButton = styled.button`
  margin-right: 5px;
  padding: 5px 10px;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: darkorange;
  }
`;

export default ManageJobsPage;
