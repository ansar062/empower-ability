// CoursePage.js
import React, { useState, useEffect } from "react";
import * as Styles from "./styles";
import axios from "axios";

const MyBuyedCoursePage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      const response = await axios.get(
        "https://empowerabilitybackend56dcdfs4q43srd.vercel.app/getmybuyedcourses",
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.data;
      setCourses(data.courses);
    }
    fetchCourses();
  }, []);

  return (
    <Styles.CoursePageWrapper>
      <Styles.CoursesHeader>
        <Styles.Header>
          <h1>My Courses</h1>
        </Styles.Header>

        
      </Styles.CoursesHeader>

      <Styles.CoursesSection>
        {courses && courses.map((course) => (
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
            <Styles.EnrollmentButton
              to={`/course/view/${course._id}`}
              state={{ course }}
              style={{ color: "white", textDecoration: "none" }}
            >
              View Course
            </Styles.EnrollmentButton>
          </div>
        ))}
        {courses.length === 0 && <p>No results found.</p>}
      </Styles.CoursesSection>

    </Styles.CoursePageWrapper>
  );
};

export default MyBuyedCoursePage;
