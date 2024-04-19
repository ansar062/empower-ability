import React, { useState } from 'react';
import * as Styles from './styles';
import { Link } from 'react-router-dom';

// Dummy data for job listings
const jobsData = [
  {
    id: 1,
    title: 'Accessible Software Engineer',
    company: 'Inclusive Tech Solutions',
    location: 'City A',
    industry: 'Technology',
    jobType: 'Full-time',
    description: 'We are seeking an Accessible Software Engineer who is passionate about creating inclusive digital experiences for all users, including those with disabilities. Join us in building a more accessible digital future.',
  },
  {
    id: 2,
    title: 'Inclusive Healthcare Assistant',
    company: 'Accessible Health Services',
    location: 'City B',
    industry: 'Healthcare',
    jobType: 'Part-time',
    description: 'Join our team as an Inclusive Healthcare Assistant and contribute to providing healthcare services that prioritize accessibility and inclusivity. Part-time opportunity available.',
  },
  {
    id: 3,
    title: 'Senior Accessibility Frontend Developer',
    company: 'Tech Innovators',
    location: 'City C',
    industry: 'Technology',
    jobType: 'Full-time',
    description: 'We are looking for an experienced Senior Accessibility Frontend Developer to join our dynamic team. Help us create web applications that are accessible to everyone, regardless of their abilities.',
  },
  {
    id: 4,
    title: 'Inclusive Nurse Practitioner',
    company: 'HealthCare Solutions',
    location: 'City D',
    industry: 'Healthcare',
    jobType: 'Full-time',
    description: 'Exciting opportunity for an Inclusive Nurse Practitioner to provide compassionate and accessible care to our patients. Join us in promoting inclusivity in healthcare.',
  },
];

const successStoriesData = [
  {
    id: 1,
    name: 'Alex Johnson',
    testimonial: 'As a person with a disability, finding a job that accommodates my needs was challenging. Thanks to this platform, I secured an accessible job that values diversity and inclusion.',
    photo: '/Images/people.jpg',
  },
  {
    id: 2,
    name: 'Emily Rodriguez',
    testimonial: 'This platform not only connected me with disability-friendly employers but also provided resources for professional development. I\'m now thriving in a workplace that embraces accessibility.',
    photo: '/Images/people.jpg',
  },
  {
    id: 3,
    name: 'Chris Baker',
    testimonial: 'Having a disability didn\'t hinder my career growth, thanks to the opportunities I found on this platform. I\'m proud to be part of an inclusive workplace that values my unique skills.',
    photo: '/Images/people.jpg',
  },
  // Add more success stories as needed
];


const instructorData = {
  heading: 'Upload Jobs',
  subHeading: 'Share exciting job opportunities with our community! Help connect talented individuals with the right companies.',
  buttonText: 'Upload Jobs',
  imageSrc: '/Images/upload.png',
};

const JobsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedJobType, setSelectedJobType] = useState('');

  const filteredJobs = jobsData.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory ? job.industry === selectedCategory : true) &&
    (selectedLocation ? job.location === selectedLocation : true) &&
    (selectedJobType ? job.jobType === selectedJobType : true)
  );

  const uniqueLocations = [...new Set(jobsData.map(job => job.location))];
  const uniqueJobTypes = [...new Set(jobsData.map(job => job.jobType))];

  // Define the becomeInstructor function
  const becomeInstructor = () => {
    // Implementation logic for becoming an instructor
    console.log('Become an Instructor clicked!');
  };

  const uploadJobs = () => {
    // Implementation logic for uploading jobs
    console.log('Upload Jobs clicked!');
    // You can add navigation logic here if needed
  };

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
                {uniqueLocations.map(location => (
                  <option key={location} value={location}>{location}</option>
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
                {uniqueJobTypes.map(jobType => (
                  <option key={jobType} value={jobType}>{jobType}</option>
                ))}
              </select>
            </label>
          </Styles.FilteringOptions>
        </Styles.Header>
      </Styles.HeadBar>

      <Styles.JobListings>
        {filteredJobs.map(job => (
          <Styles.JobCard key={job.id}>
            <h3 onClick={() => console.log(`Clicked on job: ${job.title}`)}>{job.title}</h3>
            <p>{job.company} - {job.location}</p>
            <p>{job.description}</p>
            <button onClick={() => console.log(`Apply Now for: ${job.title}`)}>Apply Now</button>
          </Styles.JobCard>
        ))}
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

      {/* Upload Jobs Section */}
      <Styles.BecomeInstructorWrapper>
        <Styles.InstructorContent>
          <Styles.InstructorHeading>{instructorData.heading}</Styles.InstructorHeading>
          <Styles.InstructorSubHeading>{instructorData.subHeading}</Styles.InstructorSubHeading>
          <Link to="/uploadjobs">
            <Styles.InstructorCTAButton onClick={uploadJobs}>
              {instructorData.buttonText}
            </Styles.InstructorCTAButton>
          </Link>
        </Styles.InstructorContent>
        <Styles.InstructorImage src={instructorData.imageSrc} alt={instructorData.heading} />
      </Styles.BecomeInstructorWrapper>
    </Styles.JobsContainer>
  );
};

export default JobsPage;
