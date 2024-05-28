import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

const EditJobs = () => {
  const [fixedSalary, setFixedSalary] = useState(true);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();


  const handleSalaryTypeChange = (e) => {
    const isFixed = e.target.value === "fixed";
    setFixedSalary(isFixed);
  };

  // State for new job form
  const [newJob, setNewJob] = useState({
    title: "",
    description: "",
    category: "",
    country: "",
    city: "",
    location: "",
    company: "",
    fixedSalary: "",
    salaryFrom: "",
    salaryTo: "",
  });

  useEffect(() => {
    async function fetchSingleJob(){
      await axios.get(`https://empowerabilitybackend56dcdfs4q43srd.vercel.app/jobs/job/${id}`, {withCredentials: true})
      .then((response) => {
        const res = response.data;
        setNewJob(res.job);
        if(!res.job.fixedSalary){
          setFixedSalary(false)
        }
      })
    }
    fetchSingleJob();
  }, [])

  // Function to handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true)
    try{
      if(!newJob.fixedSalary && !newJob.salaryFrom && !newJob.salaryTo){
        toast("Please enter a salary");
        return;
      }
      if(!newJob.title && !newJob.description && !newJob.category && !newJob.country && !newJob.city && !newJob.location && !newJob.company){
        toast("Please fill in all fields");
        return;
      }
      await axios.put(`https://empowerabilitybackend56dcdfs4q43srd.vercel.app/job/edit/${id}`, newJob, {
        withCredentials: true,
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }).then((response) => {
        const data = response.data;
        if(data.status === false){
          toast(data.message);
          return;
        }
        toast(data.message);
        navigate("/edash")
        
      })

    }catch(err){
      toast(err);
    }
    
    clearForm();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewJob((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to clear form fields
  const clearForm = () => {
    setNewJob({
      title: "",
      description: "",
      category: "",
      country: "",
      city: "",
      location: "",
      company: "",
      fixedSalary: "",
      salaryFrom: "",
      salaryTo: "",
    });
  };

  // Function to handle editing job listing
  const handleEdit = (index) => {
    // Add logic to edit job listing
    console.log("Editing job at index:", index);
  };

  
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormHeader>Post New Jobs and help bring change</FormHeader>
        <FormField>
          <Label>Title:</Label>
          <Input
            type="text"
            name="title"
            value={newJob.title}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label>Description:</Label>
          <Textarea
            name="description"
            value={newJob.description}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label>Category:</Label>
          <select
            name="category"
            value={newJob.category}
            onChange={handleChange}
          >
            <option value="hearing impaired">Hearing Impaired</option>
            <option value="motor impaired">Motor Impaired</option>
            <option value="speech impaired">Speech Impaired</option>
          </select>
        </FormField>
        <FormField>
          <Label>Country:</Label>
          <Input
            type="text"
            name="country"
            value={newJob.country}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label>City:</Label>
          <Input
            type="text"
            name="city"
            value={newJob.city}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label>Location:</Label>
          <select
            name="location"
            value={newJob.location}
            onChange={handleChange}
          >
            <option value="remote">Remote</option>
            <option value="onsite">On Site</option>
          </select>
        </FormField>
        <input
          type="radio"
          id="fixed"
          name="salarytype"
          value="fixed"
          checked={fixedSalary}
          onChange={handleSalaryTypeChange}
        />
        <label htmlFor="fixed">Fixed Salary</label>

        <input
          type="radio"
          id="range"
          name="salarytype"
          value="range"
          checked={!fixedSalary}
          onChange={handleSalaryTypeChange}
        />
        <label htmlFor="range">Salary Range</label>
        {fixedSalary ? (
          <FormField>
            <Label>Fixed Salary:</Label>
            <Input
              type="number"
              name="fixedSalary"
              value={newJob.fixedSalary}
              onChange={handleChange}
              required
              min={1000}
            />
          </FormField>
        ) : (
          <div>
            <FormField>
              <Label>Salary From:</Label>
              <Input
                type="number"
                name="salaryFrom"
                value={newJob.salaryFrom}
                onChange={handleChange}
                required
                min={500}
              />
            </FormField>
            <FormField>
              <Label>Salary To:</Label>
              <Input
                type="number"
                name="salaryTo"
                value={newJob.salaryTo}
                onChange={handleChange}
                required
                min={1000}
              />
            </FormField>
          </div>
        )}

        <FormField>
          <Label>Company:</Label>
          <Input
            type="text"
            name="company"
            value={newJob.company}
            onChange={handleChange}
            required
          />
        </FormField>
        <SubmitButton type="submit">Edit Job</SubmitButton>
      </Form>

    </Container>
  );
};
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  @media screen and (max-width: 768px) {
    padding: 10px;
    width: 90%;
  }
`;

const Form = styled.form`
  margin-bottom: 20px;
`;

const FormHeader = styled.h3`
  font-size: 20px;
  margin-bottom: 60px;
  text-align: center;
  color: teal;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 40px;
  }
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

  @media screen and (max-width: 768px) {
    padding: 8px;
    width: 85%;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media screen and (max-width: 768px) {
    padding: 8px;
    width: 85%;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: teal;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    padding: 8px 16px;
  }
`;

const JobListingsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: teal;
    color: white;
  }

  @media screen and (max-width: 768px) {
    th,
    td {
      padding: 6px;
    }
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

  @media screen and (max-width: 768px) {
    padding: 4px 8px;
  }
`;

export default EditJobs;
