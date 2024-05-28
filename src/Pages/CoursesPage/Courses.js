// CoursePage.js
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import * as Styles from "./styles";
import axios from "axios";
import { toast } from 'react-toastify';

const CoursePage = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all categories");
  const [selectedLevel, setSelectedLevel] = useState("all levels");
  const [testimonials, setTestimonials] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const coursesPerPage = 6;
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const { currentUser } = useSelector((state) => state.auth);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex(
      (prevIndex) => (prevIndex + 1) % testimonials.length
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };
  const enrollCourse = (courseId) => {
    console.log(`Enrolling in course with ID: ${courseId}`);
  };

  useEffect(() => {
    async function fetchCourses() {
      const response = await axios.get(
        "https://empowerabilitybackend56dcdfs4q43srd.vercel.app/getallcourses",
        {
          withCredentials: true,
        }
      );
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
      (selectedCategory === "all categories" ||
        course.category.toLowerCase() === selectedCategory.toLowerCase()) &&
      (selectedLevel === "all levels" ||
        (course.level &&
          course.level.toLowerCase() === selectedLevel.toLowerCase())) &&
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  async function buyCourse(courseId) {
    try {
      const response = await axios.post(
        `https://empowerabilitybackend56dcdfs4q43srd.vercel.app/buy/course/${courseId}`,
        {},
        {
          withCredentials: true,
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if(response.data.status) {
        toast(response.data.message)
      }else{
        toast(response.data.message)
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Styles.CoursePageWrapper>
      <Styles.CoursesHeader>
        <Styles.Header>
          <h1>Our Courses</h1>
          <div>
            <span>Home / Courses</span>
          </div>
        </Styles.Header>

        <Styles.SearchSection>
          <input
            type="text"
            placeholder="Search for courses"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div>
            <label>Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all categories">All categories</option>
              <option value="mute">Mute</option>
              <option value="physically disabled">Physically disabled</option>
              <option value="deaf">Deaf</option>
            </select>
            <label>Level:</label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              <option value="all levels">All levels</option>
              <option value="beginner">Beginner</option>
              <option value="expert">Expert</option>
            </select>
          </div>
        </Styles.SearchSection>
      </Styles.CoursesHeader>

      <Styles.CoursesSection>
        {currentCourses.map((course) => (
          <div key={course.id}>
            <img src={course.cover} alt={course.title} />
            <h3>
              <Styles.CourseLink
                to={`/coursedetail/${course._id}`}
                state={{ course }}
              >
                {course.title}
              </Styles.CourseLink>
            </h3>
            <p>Category: {course.category}</p>
            <p>Level: {course.difficultyLevel}</p>

            {currentUser && course.enrolledStudents.includes(currentUser._id) ? (
              <Styles.NavigationLink
              to={`/course/view/${course._id}`}
                state={{ course }}
                style={{ color: "white", textDecoration: "none" }}
              >
                View Course
              </Styles.NavigationLink>
            ) : (
              <Styles.EnrollmentButton
                onClick={() => {
                  buyCourse(course._id);
                }}
                state={{ course }}
                style={{ color: "white", textDecoration: "none" }}
              >
                Enroll Now
              </Styles.EnrollmentButton>
            )}
          </div>
        ))}
        {currentCourses.length === 0 && <p>No results found.</p>}
      </Styles.CoursesSection>

      {filteredCourses.length > coursesPerPage && (
        <Styles.Pagination>
          {/* Pagination */}
          {Array.from({
            length: Math.ceil(filteredCourses.length / coursesPerPage),
          }).map((_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          ))}
        </Styles.Pagination>
      )}

      
    </Styles.CoursePageWrapper>
  );
};

export default CoursePage;
