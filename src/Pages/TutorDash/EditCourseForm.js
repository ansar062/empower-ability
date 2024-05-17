import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { toast } from "react-toastify";
import { Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import LecturesList from "./lectures";
import './slider.css';

const EditCourseForm = (props) => {
  const { id } = props;
  const [cover, setCover] = useState("");
  const [disabled, setdisabled] = useState(false);
  const [coverVideo, setCoverVideo] = useState();
  const [videoUploading, setvideoUploading] = useState(true);
  

  const [lectureData, setLectureData] = useState({
    title: "",
    video: "",
  });

  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    category: "",
    cover: "",
    price: 30,
    difficultyLevel: "",
    Lecture: [],
    isPublished: false,
  });


  useEffect(() => {
    async function fetchCourse() {
      const response = await axios.get(
        `https://empowerabilitybackend56dcdfs4q43srd.vercel.app/getcourse/${id}`,
        {
          withCredentials: true,
        }
      );
      const data = await response.data;
      console.log(data);
      setCourseData(data);
    }

    fetchCourse();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  function uploadImage(file) {
    setdisabled(true);
    toast("Image is uploading");
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
        courseData.cover = imageUrl;
        toast("Image uploaded successfully");
        setdisabled(false);
      })
      .catch((err) => {
        console.log(err);
        toast("Image not uploaded, try again later");
        setdisabled(false);
      });
    return 0;
  }

  const updateCourse = async () => {
    try {
      const response = await axios.put(
        `https://empowerabilitybackend56dcdfs4q43srd.vercel.app/update/course/${id}`,
        courseData,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.data;
      console.log(data);
      if (data.status) {
        toast("Course updated successfully");
      } else {
        toast(data.message);
      }
    } catch (err) {
      console.log(err);
      toast("Error updating course, try again later");
    }
  };

  function uploadVideo(file) {
    setvideoUploading(true);
    toast("Video is uploading");
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "j5uqdyec");
    data.append("cloud_name", "du1fnqemp");

    axios
      .post("https://api.cloudinary.com/v1_1/du1fnqemp/video/upload", data)
      .then((response) => {
        console.log(response);
        const videoUrl = response.data.url;
        setLectureData({ ...lectureData, video: videoUrl });
        toast("Video uploaded successfully");
        setvideoUploading(false);
      })
      .catch((err) => {
        console.log(err);
        toast("Video not uploaded, try again later");
        setvideoUploading(true);
      });
    return 0;
  }

  async function uploadLecture() {
    if(!lectureData.title){
      return 0;
    }
    try {
      const response = await axios.post(
        `https://empowerabilitybackend56dcdfs4q43srd.vercel.app/addlecture/${id}`,
        lectureData,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.data;
      console.log(data);
      if (data.status) {
        toast("Lecture added successfully");
      } else {
        toast(data.message);
      }
    } catch (err) {
      console.log(err);
      toast("Error adding lecture, try again later");
    }
  }

  
  const handlePublishToggle = () => {
    if(courseData.isPublished){
      setCourseData({...courseData, isPublished: false})
    }else{
      setCourseData({...courseData, isPublished: true})
    }
  };

  return (
    <Container>
      <UploadForm>
        <h2>Update The Course & Add Lectures</h2>
        <InputField>
          <label>Published</label>
          <label className="switch">
            <input
              type="checkbox"
              checked={courseData.isPublished}
              onChange={handlePublishToggle}
              disabled={courseData.Lecture.length <= 4}
            />
            <span className="slider round"></span>
          </label>
          {courseData.Lecture.length <= 4 && (<p style={{fontSize: "12px", color: "red"}}>To Published add minimun 4 lectures</p>)}
        </InputField>
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
        <img src={courseData.cover} height={80} width={80} />
        <ImageUpload>
          <label>Upload Course Cover</label>
          <input
            type="file"
            accept="image/*"
            onChange={({ target }) => {
              if (target.files) {
                const file = target.files[0];
                uploadImage(file);
              }
            }}
          />
        </ImageUpload>
        <br />

        <h1>Lectures</h1>
        {courseData.Lecture && courseData.Lecture.map((lecture) => (
          <LecturesList id={lecture}/>
        ))}

        <br />
        <Dialog.Root>
          <Dialog.Trigger>
            <Button size="sm">
              <PlusIcon className="" />
              Add Lecture
            </Button>
          </Dialog.Trigger>

          <Dialog.Content maxWidth="450px">
            <Dialog.Title>Add Lecture</Dialog.Title>
            <Dialog.Description size="2" mb="4">
              Make changes to your profile.
            </Dialog.Description>

            <Flex direction="column" gap="3">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Title
                </Text>
                <TextField.Root
                  placeholder="Enter Title of the Lecture"
                  onChange={({ target }) => {
                    setLectureData({ ...lectureData, title: target.value });
                  }}
                  value={lectureData.title}
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Video
                </Text>
                <input
                  type="file"
                  onChange={({ target }) => {
                    if (target.files) {
                      const file = target.files[0];
                      uploadVideo(file);
                      setCoverVideo(URL.createObjectURL(file));
                    }
                  }}
                />
                {coverVideo && (
                  <video height={50} width={50} alt="video" src={coverVideo} />
                )}
              </label>
            </Flex>

            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button variant="soft" color="gray">
                  Cancel
                </Button>
              </Dialog.Close>
              <Dialog.Close >
                <Button onClick={uploadLecture} disabled={videoUploading} >Save</Button>
              </Dialog.Close>
            </Flex>
          </Dialog.Content>
        </Dialog.Root>

        <Button onClick={updateCourse} disabled={disabled} >Update Course</Button>
      </UploadForm>
    </Container>
  );
};

export default EditCourseForm;

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

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
