import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Avatar } from '@radix-ui/themes';


const EditTutorProfileSettingsPage = () => {
  const [disabled, setdisabled] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    firstname: currentUser?.firstname,
    lastname: currentUser?.lastname,
    image: currentUser?.image || "",
    expertise: '',
    teachingExperience: '',
    bio: '',
    availability: '',
    languages: [],
    specialNeeds: ''
  });

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
        const image = response.data.url;
        console.log(image)
        setFormData(prevState => ({
          ...prevState,
          image,
        }));
        setdisabled(false);
        toast("Image uploaded successfully");
      })
      .catch((err) => {
        console.log(err);
        toast("Image not uploaded, try again later");
      });
    return 0;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleLanguagesChange = (e) => {
    const selectedLanguages = Array.from(e.target.selectedOptions, option => option.value);
    setFormData(prevState => ({
      ...prevState,
      languages: selectedLanguages
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    async function setProfile(){
      try{
        const response = await axios.put(`https://empowerabilitybackend56dcdfs4q43srd.vercel.app/tutors/edit-profile`, formData,
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
          }
        );
        if(response.data.status){
            toast(response.data.message)
          }
      }catch(err){
        console.log(err)
      }
    }
    setProfile()
  };

  useEffect(()=> {
    async function getProfile(){
      try{
        const response = await axios.get(`https://empowerabilitybackend56dcdfs4q43srd.vercel.app/tutors/getprofile`, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
        });
        if (response.data.status === true) {
          setFormData({
            ...response.data.tutorProfile,
            firstname:
              response.data.tutorProfile.firstname ||
              currentUser?.firstname,
            lastname:
              response.data.tutorProfile.lastname || currentUser?.lastname,
              image: response.data.tutorProfile.image || currentUser?.image || "",
          });
        } else {
          navigate("/set-tutor-profile");
          toast("Set up your profile first");
          return;
        }
      }catch(err){
        console.log(err)
      }
    }
    getProfile();
  }, [])

  return (
    <Container>
      <ContentWrapper>
        {formData.firstname && formData.lastname && (
              <Avatar
                src={formData.image}
                fallback={`${formData.firstname[0]}${formData.lastname[0]}`}
                size={"8"}
                radius="full"
              />
            )}
            <input
              name="image"
              onChange={({ target }) => {
                if (target.files) {
                  const file = target.files[0];
                  uploadImage(file);
                }
              }}
              id="fileInput"
              type="file"
              style={{  }}
            />
        <ProfileDetails>
          <FormTitle>Update Your Profile</FormTitle>
          <InputLabel>First Name</InputLabel>
          <Input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="Your First Name"
            required
          />
          <InputLabel>Last Name</InputLabel>
          <Input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Your Last Name"
            required
          />
          <InputLabel>Area of Expertise</InputLabel>
          <Input
            type="text"
            name="expertise"
            value={formData.expertise}
            onChange={handleChange}
            placeholder="Your Expertise"
            required
          />
          <InputLabel>Teaching Experience</InputLabel>
          <Textarea
            name="teachingExperience"
            value={formData.teachingExperience}
            onChange={handleChange}
            placeholder="Your Teaching Experience"
            required
          />
          <InputLabel>Bio</InputLabel>
          <Textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Your Bio"
            required
          />
          <InputLabel>Availability</InputLabel>
          <Input
            type="text"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            placeholder="Your Availability"
          />
          <InputLabel>Languages Spoken</InputLabel>
          <Select
            multiple
            name="languages"
            value={formData.languages}
            onChange={handleLanguagesChange}
          >
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
            <option value="other">Other</option>
          </Select>
          <InputLabel>Special Needs Experience</InputLabel>
          <Textarea
            name="specialNeeds"
            value={formData.specialNeeds}
            onChange={handleChange}
            placeholder="Your Special Needs Experience"
          />
          
          <Link to="/tdashboard">
  <SubmitButton type="submit" disabled={disabled} onClick={(e) => {handleSubmit(e)}} >Save Changes</SubmitButton>
</Link>

        </ProfileDetails>
      </ContentWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const ContentWrapper = styled.div`


  background-color: white;
  border-radius: 8px;

  display: flex;
  align-items: flex-start;
  padding: 20px;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 20px;
`;

const ProfileDetails = styled.div`
  flex: 1;
  padding: 20px;
`;

const FormTitle = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const InputLabel = styled.label`
  margin-bottom: 5px;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  width: 100%;
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  width: 100%;
  resize: vertical;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  width: 100%;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: teal;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #007a74;
  }
`;

export default EditTutorProfileSettingsPage;
