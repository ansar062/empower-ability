import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

const ApplyToJobs = () => {
    const params = useParams();
    const { title} = params;
    const id = params.jobId;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()


  // State for new applytojob form
  const [newApplication, setnewApplication] = useState({
    resumeUrl: "",
    experience: "",
    contactNo: "",
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true)
    try{
      await axios.post(`https://empowerabilitybackend56dcdfs4q43srd.vercel.app/api/jobs/${id}/applications`, newApplication, {
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
        navigate('/')
      })

    }catch(err){
      toast(err);
    }
    
    clearForm();
  };

  // Function to handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setnewApplication((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to clear form fields
  const clearForm = () => {
    setnewApplication({
        resumeUrl: "",
        experience: "",
        contactNo: "",
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormHeader>Apply to the Job</FormHeader>
        <FormHeader>{title}</FormHeader>
        <FormField>
          <Label>resumeUrl:</Label>
          <Input
            type="text"
            name="resumeUrl"
            value={newApplication.resumeUrl}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label>Experience:</Label>
          <Textarea
            name="experience"
            value={newApplication.experience}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label>Contact No:</Label>
          <Input
            type="text"
            name="contactNo"
            value={newApplication.contactNo}
            onChange={handleChange}
            required
          />
        </FormField>
        
        <SubmitButton type="submit">Apply</SubmitButton>
      </Form>

      
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
  text-align: center;
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

export default ApplyToJobs;
