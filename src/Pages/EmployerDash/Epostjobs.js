import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { useFormik } from "formik";
import { postajobSchema } from "../../schemas";

const initialValues = {
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
};
const ManageJobsPage = () => {
  // State to manage job listings
  const [jobListings, setJobListings] = useState([]);
  const [fixedSalary, setFixedSalary] = useState(true);

  const handleSalaryTypeChange = (e) => {
    const isFixed = e.target.value === "fixed";
    setFixedSalary(isFixed);
  };

  useEffect(() => {
    async function fetchMyJobs() {
      await axios
        .get(
          "https://empowerabilitybackend56dcdfs4q43srd.vercel.app/all-my-jobs",
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => {
          const res = response.data;
          setJobListings(res.myJobs);
        });
    }
    fetchMyJobs();
  }, 3000);

  // Function to handle form submission

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: postajobSchema,
    onSubmit: async (values, action) => {
      try {
        await axios
          .post(
            "https://empowerabilitybackend56dcdfs4q43srd.vercel.app/post-a-job",
            values,
            {
              withCredentials: true,
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          )
          .then((response) => {
            const data = response.data;
            if (data.status === false) {
              toast(data.message);
              return;
            }
            toast(data.message);
          });
      } catch (err) {
        toast(err);
      }
      action.resetForm();
    },
  });

  // Function to handle deleting job listing
  const handleDelete = (index) => {
    console.log(index);
    async function deleteJob() {
      await axios
        .delete(
          `https://empowerabilitybackend56dcdfs4q43srd.vercel.app/jobs/delete/${index}`,
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => {
          const res = response.data;
          if (res.success === true) {
            toast(res.message);
          }
        });
    }
    deleteJob();
    setJobListings((prevListings) =>
      prevListings.filter((_, i) => i !== index)
    );
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
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormField>
        {errors.title && touched.title ? (
            <p
              style={{ color: "#FF5363", fontSize: "12px", marginTop: "-14px" }}
            >
              {errors.title}*
            </p>
          ) : null}
        <FormField>
          <Label>Description:</Label>
          <Textarea
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormField>
        {errors.description && touched.description ? (
            <p
              style={{ color: "#FF5363", fontSize: "12px", marginTop: "-14px" }}
            >
              {errors.description}*
            </p>
          ) : null}
        <FormField>
          <Label>Category:</Label>
          <select
            name="category"
            value={values.category}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="hearingimpaired">Hearing Impaired</option>
            <option value="motorimpaired">Motor Impaired</option>
            <option value="speechimpaired">Speech Impaired</option>
          </select>
        </FormField>
        {errors.category && touched.category ? (
            <p
              style={{ color: "#FF5363", fontSize: "12px", marginTop: "-14px" }}
            >
              {errors.category}*
            </p>
          ) : null}
        <FormField>
          <Label>Country:</Label>
          <Input
            type="text"
            name="country"
            value={values.country}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormField>
        {errors.country && touched.country ? (
            <p
              style={{ color: "#FF5363", fontSize: "12px", marginTop: "-14px" }}
            >
              {errors.country}*
            </p>
          ) : null}
        <FormField>
          <Label>City:</Label>
          <Input
            type="text"
            name="city"
            value={values.city}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormField>
        {errors.city && touched.city ? (
            <p
              style={{ color: "#FF5363", fontSize: "12px", marginTop: "-14px" }}
            >
              {errors.city}*
            </p>
          ) : null}
        <FormField>
          <Label>Location:</Label>
          <select
            name="location"
            value={values.location}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="remote">Remote</option>
            <option value="onsite">On Site</option>
          </select>
        </FormField>
        {errors.location && touched.location ? (
            <p
              style={{ color: "#FF5363", fontSize: "12px", marginTop: "-14px" }}
            >
              {errors.location}*
            </p>
          ) : null}
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
              value={values.fixedSalary}
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
                value={values.salaryFrom}
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
                value={values.salaryTo}
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
            value={values.company}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormField>
        {errors.company && touched.company ? (
            <p
              style={{ color: "#FF5363", fontSize: "12px", marginTop: "-14px" }}
            >
              {errors.company}*
            </p>
          ) : null}
        <SubmitButton type="submit">Post Job</SubmitButton>
      </Form>

      {/* Display job listings table */}
      {jobListings && jobListings.length > 0 && (
        <JobListingsTable>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Category</th>
              <th>Salary From</th>
              <th>Salary To</th>
              <th>Fixed Salary</th>
              <th>Location</th>
              <th>Company</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobListings.map((job) => (
              <tr key={job._id}>
                <td>{job.title}</td>
                <td>{job.description}</td>
                <td>{job.category}</td>
                <td>{job.salaryFrom}</td>
                <td>{job.salaryTo}</td>
                <td>{job.fixedSalary}</td>
                <td>{job.location}</td>
                <td>{job.company}</td>
                <td>
                  <Link to={`/eeditjobs/${job._id}`}>Edit</Link>
                  <ActionButton onClick={() => handleDelete(job._id)}>
                    Delete
                  </ActionButton>
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

  @media screen and (max-width: 768px) {
    padding: 10px;
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
    color: teal;
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
    width: 90%;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media screen and (max-width: 768px) {
    padding: 8px;
    width: 90%
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
    font-size: 14px; /* Adjust font size for better readability */
  }

  th {
    background-color: teal;
    color: white;
  }

  @media screen and (max-width: 768px) {
    th,
    td {
      padding: 2px;
      font-size: 0.3rem;
    }
  }
`;

const ActionButton = styled.button`
  margin-right: 5px;
  padding: 8px 12px; /* Increase padding for better touch targets */
  background-color: orange;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px; /* Adjust font size for better readability */

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: darkorange;
  }

  @media screen and (max-width: 768px) {
    padding: 2px 5px; /* Adjust padding for smaller screens */
    font-size: 0.2rem;
  }
`;

export default ManageJobsPage;
