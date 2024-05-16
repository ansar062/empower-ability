import React, { useEffect, useState } from "react";
import * as Styles from "./styles";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import { Oval } from "react-loader-spinner";

const successStoriesData = [
  {
    id: 1,
    name: "Alex Johnson",
    testimonial:
      "As a person with a disability, finding a job that accommodates my needs was challenging. Thanks to this platform, I secured an accessible job that values diversity and inclusion.",
    photo: "/Images/people.jpg",
  },
  {
    id: 2,
    name: "Emily Rodriguez",
    testimonial:
      "This platform not only connected me with disability-friendly employers but also provided resources for professional development. I'm now thriving in a workplace that embraces accessibility.",
    photo: "/Images/people.jpg",
  },
  {
    id: 3,
    name: "Chris Baker",
    testimonial:
      "Having a disability didn't hinder my career growth, thanks to the opportunities I found on this platform. I'm proud to be part of an inclusive workplace that values my unique skills.",
    photo: "/Images/people.jpg",
  },
  // Add more success stories as needed
];

const PostTextContainer = styled.div`
  max-height: 85px; /* Set your desired height here */
  overflow: hidden;
`;

const JobsPage = () => {
  const [jobs, setJobs] = useState(null);
  const { currentUser } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    async function fetchAllJobs() {
      try {
        await axios
          .get("https://empowerabilitybackend56dcdfs4q43srd.vercel.app/all-jobs", { withCredentials: true })
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
                {uniqueLocations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Job Type:
              <select
                value={selectedJobType}
                onChange={(e) => setSelectedJobType(e.target.value)}
              >
                <option value="">All Job Types</option>
                {uniqueJobTypes.map((jobType) => (
                  <option key={jobType} value={jobType}>
                    {jobType}
                  </option>
                ))}
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
                      <NavLink to={`/jobs/${job.title}/${job._id}/apply`}>Apply Now</NavLink>
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
        {successStoriesData.map((story, index) => (
          <Styles.StoryCard key={story.id}>
            <img src={story.photo} alt={story.name} />
            <div>
              <h3>{story.name}</h3>
              <p>{`"${story.testimonial}"`}</p>
            </div>
          </Styles.StoryCard>
        ))}
      </Styles.SuccessStoriesSection>
    </Styles.JobsContainer>
  );
};

export default JobsPage;
