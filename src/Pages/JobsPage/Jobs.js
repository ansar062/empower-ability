import React, { useEffect, useState } from "react";
import * as Styles from "./styles";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import { Oval } from "react-loader-spinner";
import { Avatar } from "@radix-ui/themes";

const PostTextContainer = styled.div`
  max-height: 85px; /* Set your desired height here */
  overflow: hidden;
`;

const JobsPage = () => {
  const [jobs, setJobs] = useState(null);
  const { currentUser } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [feedbacks, setfeedbacks] = useState(null);
  useEffect(() => {
    setLoading(true);
    async function fetchAllJobs() {
      try {
        await axios
          .get(
            "https://empowerabilitybackend56dcdfs4q43srd.vercel.app/all-jobs",
            { withCredentials: true }
          )
          .then((response) => {
            const res = response.data;
            setJobs(res.jobs);
            setLoading(false);
          });
      } catch (err) {
        setLoading(false);
      }
    }
    const delay = setTimeout(() => {
      fetchAllJobs();
      clearTimeout(delay);
    }, 3000);

    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    async function fetchFeedbacks() {
      try {
        await axios
          .get("https://empowerabilitybackend56dcdfs4q43srd.vercel.app/getallfeedbacks", {
            withCredentials: true,
          })
          .then((response) => {
            const res = response.data;
            setfeedbacks(res.data);
          });
      } catch (err) {
        console.log(err);
      }
    }
    fetchFeedbacks();
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedJobType, setSelectedJobType] = useState("");

  const filteredJobs = jobs?.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory ? job.industry === selectedCategory : true) &&
      (selectedLocation ? job.location === selectedLocation : true) &&
      (selectedJobType ? job.jobType === selectedJobType : true)
  );

  const uniqueLocations = [...new Set(jobs?.map((job) => job.location))];
  const uniqueJobTypes = [...new Set(jobs?.map((job) => job.jobType))];

  return (
    <Styles.JobsContainer>
      <Styles.HeadBar>
        <h1>Jobs Opportunities</h1>
        <Styles.Header>
          <Styles.SearchBar
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <Styles.FilteringOptions>
            <label>
              Location:
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="">All Locations</option>
                <option value="Remote">Remote</option>
                <option value="On-site">On-site</option>
              </select>
            </label>
            <label>
              Categories:
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                <option value="Hearing Impaired">Hearing Impaired</option>
                <option value="Motor Impaired">Motor Impaired</option>
                <option value="Speech Impaired">Speech Impaired</option>
              </select>
            </label>
          </Styles.FilteringOptions>
        </Styles.Header>
      </Styles.HeadBar>

      <Styles.JobListings>
        {loading ? (
          <Oval
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        ) : jobs && jobs.length > 0 ? (
          filteredJobs.map(
            (job) =>
              job.expired === false && (
                <Styles.JobCard key={job._id}>
                  <a href={`/jobs/job/${job._id}`}>{job.title}</a>
                  <p>
                    {job.company} - {job.location}
                  </p>
                  <PostTextContainer>
                    <p>{job.description}</p>
                  </PostTextContainer>

                  {currentUser && currentUser.role !== "employer" && (
                    <button>
                      <NavLink to={`/jobs/${job.title}/${job._id}/apply`}>
                        Apply Now
                      </NavLink>
                    </button>
                  )}
                </Styles.JobCard>
              )
          )
        ) : (
          <div>No Jobs found</div>
        )}
      </Styles.JobListings>

      <Styles.SuccessStoriesSection>
        <h2>Success Stories</h2>
        {feedbacks &&
          feedbacks.map((feedback, index) => (
            <Styles.StoryCard key={feedback._id}>
              <Avatar
                size={"5"}
                radius={"full"}
                src={feedback.user.image}
                fallback={`${feedback.user.firstname[0]}${feedback.user.lastname[0]}`}
              />
              <div>
                <h3>
                  {feedback.user.firstname} {feedback.user.lastname}
                </h3>
                <p>{`"${feedback.feedback}"`}</p>
              </div>
            </Styles.StoryCard>
          ))}
      </Styles.SuccessStoriesSection>
    </Styles.JobsContainer>
  );
};

export default JobsPage;
