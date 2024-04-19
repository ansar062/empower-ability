import React, { useState } from 'react';
import styled from 'styled-components';

const UploadCoursePage = () => {
  const [courseData, setCourseData] = useState({
    name: '',
    instructor: '',
    description: '',
    duration: '',
    image: '',
  });
  const [uploadError, setUploadError] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [courses, setCourses] = useState([]);
  const [metrics, setMetrics] = useState({
    studentsEnrolled: 0,
    courseProgress: 0,
    feedback: [],
    ratings: 0,
  });

  const handleCourseUpload = () => {
    // Validate course data
    if (!courseData.name || !courseData.instructor || !courseData.description || !courseData.duration || !courseData.image) {
      setUploadError('Please provide all necessary information.');
      return;
    }

    // Mock server-side validation and upload
    // Here, we simulate successful upload after a brief delay
    setTimeout(() => {
      setCourses([...courses, courseData]);
      setCourseData({
        name: '',
        instructor: '',
        description: '',
        duration: '',
        image: '',
      });
      setUploadSuccess(true);
      setUploadError('');
    }, 1500);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    // Mock image upload logic
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCourseData({ ...courseData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleEditCourse = (index) => {
    // Implement edit functionality here
    console.log('Edit course:', courses[index]);
  };

  const handleDeleteCourse = (index) => {
    // Implement delete functionality here
    const updatedCourses = [...courses];
    updatedCourses.splice(index, 1);
    setCourses(updatedCourses);
  };

  return (
    <CoursesContainer>
      <Container>
        <UploadForm>
          <h2>Upload New Course</h2>
          <InputField>
            <label>Course Name</label>
            <input type="text" name="name" placeholder="Enter Course Name" value={courseData.name} onChange={handleInputChange} />
          </InputField>
          <InputField>
            <label>Instructor Name</label>
            <input type="text" name="instructor" placeholder="Enter Instructor Name" value={courseData.instructor} onChange={handleInputChange} />
          </InputField>
          <InputField>
            <label>Course Description</label>
            <textarea name="description" placeholder="Enter Course Description" value={courseData.description} onChange={handleInputChange}></textarea>
          </InputField>
          <InputField>
            <label>Duration</label>
            <input type="text" name="duration" placeholder="Enter Duration" value={courseData.duration} onChange={handleInputChange} />
          </InputField>
          <ImageUpload>
            <label>Upload Image</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </ImageUpload>
          {courseData.image && <PreviewImage src={courseData.image} alt="Course Preview" />}
          <Button onClick={handleCourseUpload}>Upload Course</Button>
          {uploadError && <ErrorMessage>{uploadError}</ErrorMessage>}
          {uploadSuccess && <SuccessMessage>Course uploaded successfully!</SuccessMessage>}
        </UploadForm>
        <MetricsContainer>
          <h2>Course Metrics</h2>
          <MetricsList>
            <MetricItem>Number of Students Enrolled: {metrics.studentsEnrolled}</MetricItem>
            <MetricItem>Course Progress: {metrics.courseProgress}%</MetricItem>
            <MetricItem>Feedback: {metrics.feedback.length}</MetricItem>
            <MetricItem>Ratings: {metrics.ratings}</MetricItem>
          </MetricsList>
        </MetricsContainer>
        <UploadedCourses>
          <h2>Uploaded Courses</h2>
          {courses.map((course, index) => (
            <CourseCard key={index}>
              <CourseImage src={course.image} alt={course.name} />
              <CourseDetails>
                <CourseTitle>{course.name}</CourseTitle>
                <p>Instructor: {course.instructor}</p>
                <p>Description: {course.description}</p>
                <p>Duration: {course.duration}</p>
              </CourseDetails>
              <ButtonContainer>
                <Button onClick={() => handleEditCourse(index)}>Edit</Button>
                <Button onClick={() => handleDeleteCourse(index)}>Delete</Button>
              </ButtonContainer>
            </CourseCard>
          ))}
        </UploadedCourses>
      </Container>
    </CoursesContainer>
  );
};

// Styled Components

const CoursesContainer = styled.div`
  display: flex;
`;

const Container = styled.div`
  background-color: #ffffff;
  padding: 20px;
  margin: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const UploadForm = styled.div`
  max-width: 600px;
  margin-bottom: 40px;
`;

const InputField = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #cccccc;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: #00796b; /* Teal */
    }
  }

  textarea {
    height: 100px;
  }
`;

const ImageUpload = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input[type="file"] {
    margin-top: 5px;
  }
`;

const Button = styled.button`
  background-color: #00796b; /* Teal */
  border: none;
  color: #ffffff;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005b4f; /* Darker Teal */
  }
`;

const ErrorMessage = styled.div`
  color: #ff0000;
  margin-top
  : 10px;
  `;
  
  const SuccessMessage = styled.div`
    color: #00aa00;
    margin-top: 10px;
  `;
  
  const MetricsContainer = styled.div`
    margin-bottom: 40px;
  `;
  
  const MetricsList = styled.ul`
    list-style: none;
    padding: 0;
  `;
  
  const MetricItem = styled.li`
    margin-bottom: 10px;
  `;
  
  const UploadedCourses = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  `;
  
  const CourseCard = styled.div`
    border: 1px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
  `;
  
  const CourseImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
  `;
  
  const CourseDetails = styled.div`
    padding: 20px;
  `;
  
  const CourseTitle = styled.h3`
    margin-top: 10px;
  `;
  
  const PreviewImage = styled.img`
  width: 100%;
  max-height: 200px;
  margin-bottom: 20px;
  border-radius: 5px;
  object-fit: cover;
`;

  const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
  `;
  
  export default UploadCoursePage;
  