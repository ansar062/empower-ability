// CoursePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import {
  CoursePageWrapper,
  CoursesHeader,
  Header,
  SearchSection,
  CoursesSection,
  EnrollmentButton,
  Pagination,
  TestimonialsSection,
  TestimonialCard,
  NavigationArrow,
} from './styles';
import axios from 'axios';

const CoursePage = () => {
  const [courses, setCourses] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const coursesPerPage = 6;
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };
  const enrollCourse = (courseId) => {
    console.log(`Enrolling in course with ID: ${courseId}`);
  };

  const becomeInstructor = () => {
    console.log("Become an instructor button clicked");
  };

useEffect(() => {
    async function fetchCourses() {
      const response = await axios.get('http://localhost:8000/getallcourses', {
        withCredentials: true
      });
      const data = await response.data;
      console.log(data);
      setCourses(data);
    }
    fetchCourses();
}, []); 

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.level.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <CoursePageWrapper>
      <CoursesHeader>
        <Header>
          <h1>Our Courses</h1>
          <div>
            <span>Home / Courses</span>
          </div>
        </Header>

        <SearchSection>
          <input
            type="text"
            placeholder="Search for courses"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div>
            <label>Category:</label>
            <select>
              <option value="physically disabled">physically disabled</option>
              <option value="deaf">deaf</option>
            </select>
            <label>Level:</label>
            <select>
              <option value="beginner">Beginner</option>
              <option value="expert">Expert</option>
            </select>
          </div>
        </SearchSection>
      </CoursesHeader>


      <CoursesSection>
      {currentCourses.map((course) => (
    <div key={course.id}>
      <img src={course.cover} alt={course.title} />
      <h3>
      <Link
        to={`/coursedetail/${course._id}`} 
        style={{ color: 'teal', textDecoration: 'none' }}
        state={{ course }}
      >
        {course.title}
      </Link>
      </h3>
            <p>Category: {course.category}</p>
            <p>Level: {course.difficultyLevel}</p>
            <EnrollmentButton>
            <Link
        to={`/coursedetail/${course._id}`}  
        state={{ course }} style={{color:'white', textDecoration: 'none'}}
      >
        Enroll Now
      </Link>
      </EnrollmentButton>

          </div>
        ))}
        {currentCourses.length === 0 && <p>No results found.</p>}
      </CoursesSection>

      <Pagination>
        {/* Pagination */}
        {Array.from({ length: Math.ceil(filteredCourses.length / coursesPerPage) }).map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </Pagination>

      <TestimonialsSection>
  {/* Testimonials section */}
  <h2>What Our Students Say</h2>
  {testimonials.length > 0 && testimonials[currentTestimonialIndex] && (
    <TestimonialCard>
      <img
        src={process.env.PUBLIC_URL + testimonials[currentTestimonialIndex].image}
        alt={testimonials[currentTestimonialIndex].name}
      />
      <p>{testimonials[currentTestimonialIndex].content}</p>
      <p style={{color:'teal'}}>- {testimonials[currentTestimonialIndex].name}</p>
    </TestimonialCard>
  )}
  <div>
    <NavigationArrow onClick={prevTestimonial}>&#9664;</NavigationArrow>
    <NavigationArrow onClick={nextTestimonial}>&#9654;</NavigationArrow>
  </div>
</TestimonialsSection>

    </CoursePageWrapper>
  );
};

export default CoursePage;