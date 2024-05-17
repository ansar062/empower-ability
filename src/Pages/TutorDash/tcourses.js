import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import EditCourseForm from "./EditCourseForm";

const UploadCoursePage = () => {
  const [editingCourseIndex, setEditingCourseIndex] = useState(null);
  const [editingCourseId, setEditingCourseId] = useState("");
  const [disabled, setdisabled] = useState(true);
  const [cover, setCover] = useState(null);
  function uploadImage(file) {
    setdisabled(true)
    toast("Image is uploading")
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "j5uqdyec");
    data.append("cloud_name", "du1fnqemp");

    axios
      .post("https://api.cloudinary.com/v1_1/du1fnqemp/image/upload", data)
      .then((response) => {
        console.log(response);
        const imageUrl = response.data.url;
        console.log(imageUrl);
        // Now you can store imageUrl in your state variable or wherever you need it
        setCover(imageUrl);
        setdisabled(false);
        toast("Image uploaded successfully")
      })
      .catch((err) => {
        console.log(err);
        toast("Image not uploaded, try again later")
        setdisabled(true);
      });
    return 0;
  }
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    category: "",
    cover: "",
    price: 30,
    difficultyLevel: "",
  });
  const [uploadError, setUploadError] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [metrics, setMetrics] = useState({
    studentsEnrolled: 0,
    courseProgress: 0,
    feedback: [],
    ratings: 0,
  });

  const handleCourseUpload = async() => {
    try{
      const response = await axios.post("https://empowerabilitybackend56dcdfs4q43srd.vercel.app/postacourse", {
        title: courseData.title,
        description: courseData.description,
        category: courseData.category,
        cover: cover,
        price: courseData.price,
        difficultyLevel: courseData.difficultyLevel,
      }, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = response.data;
      if (data.status === true) {
        setUploadSuccess(true);
        toast(data.message);
        setUploadError("");
      } else {
        setUploadError(data.message);
        setUploadSuccess(false);
      }
    }catch(err){
      console.log(err);
    }
  };

  const [courses, setCourses] = useState([]); // Replace the dummy data with an empty array

  const totalCourses = courses?.length;
 useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://empowerabilitybackend56dcdfs4q43srd.vercel.app/getmycourses", {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setCourses(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
 }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };




  // 
  const handleDeleteCourse = async (index) => { 
    console.log(index)
    try {
      const response = await axios.delete(`https://empowerabilitybackend56dcdfs4q43srd.vercel.app/delete/course/${index}`, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },});
      const data = response.data;
      if (data.status === true) {
        toast(data.message);
        setCourses(courses.filter((course, i) => i !== index));
      } else {
        toast(data.message);
      }
    } catch (error) { console.log(error); }
  };
  const handleEditCourse = (index) => { 
    console.log(index)
    setEditingCourseId(index);
    setEditingCourseIndex(index);
  };
  return (
    <CoursesContainer>
      <Container>
        <UploadForm>
          <h2>Upload New Course</h2>
          <InputField>
            <label>Course Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter Course Title"
              value={courseData.title}
              onChange={handleInputChange}
            />
          </InputField>
          <InputField>
            <label>Course Category</label>
            <input
              type="text"
              name="category"
              placeholder="Enter Course Category"
              value={courseData.category}
              onChange={handleInputChange}
            />
          </InputField>
          <InputField>
            <label>Course Description</label>
            <textarea
              name="description"
              placeholder="Enter Course Description"
              value={courseData.description}
              onChange={handleInputChange}
            ></textarea>
          </InputField>
          
          <InputField>
            <label>Price (in Dollars)</label>
            <input
              type="number"
              min={"30"}
              name="price"
              placeholder="Enter Course Price"
              value={courseData.price}
              onChange={handleInputChange}
            />
          </InputField>
          <InputField>
            <label>Course Difficulty Level</label>
            <input
              type="text"
              name="difficultyLevel"
              placeholder="Beginner/Intermediate/Advanced/Expert"
              value={courseData.difficultyLevel}
              onChange={handleInputChange}
            />
          </InputField>
          
          
          <ImageUpload>
            <label>Upload Course Cover</label>
            <input type="file" accept="image/*" onChange={({target}) => {
              if(target.files){
                const file = target.files[0];
                uploadImage(file);
              }
            }} />
          </ImageUpload>
          
          <Button onClick={handleCourseUpload} disabled={disabled} >Upload Course</Button>
          {uploadError && <ErrorMessage>{uploadError}</ErrorMessage>}
          {uploadSuccess && (
            <SuccessMessage>Course uploaded successfully!</SuccessMessage>
          )}
        </UploadForm>
        <MetricsContainer>
          <h2>Course Metrics</h2>
          <MetricsList>
            <MetricItem>
              Number of Students Enrolled: {metrics.studentsEnrolled}
            </MetricItem>
            <MetricItem>Course Progress: {metrics.courseProgress}%</MetricItem>
            <MetricItem>Feedback: {metrics.feedback.length}</MetricItem>
            <MetricItem>Ratings: {metrics.ratings}</MetricItem>
          </MetricsList>
        </MetricsContainer>
        <UploadedCourses>
          <h2>Uploaded Courses</h2>
          {
            courses &&
          courses?.map((course, index) => (
            <CourseCard key={course._id}>
              <CourseImage src={course.cover} alt={course.name} />
              <CourseDetails>
                <CourseTitle>{course.title}</CourseTitle>
                <p>Instructor: {course.publisher.username}</p>
                <p>Description: {course.description}</p>
                <p>Duration: {course.duration}</p>
              </CourseDetails>
              <ButtonContainer>
                <Button onClick={() => handleEditCourse(course._id)}>Edit</Button>
                <Button onClick={() => handleDeleteCourse(course._id)}>
                  Delete
                </Button>
              </ButtonContainer>
            </CourseCard>
          ))}
        </UploadedCourses>
        
      </Container>
      {
        editingCourseIndex !== null && (
          <EditCourseForm
          id = {`${editingCourseId}`}
          />
        )
      }
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
  margin-top: 10px;
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
