import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { Avatar } from "@radix-ui/themes";

const Container = styled.div`
  background-color: #f8f9fa;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.form`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 20px;
`;

const Title = styled.h1`
  color: #333;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
`;

const ColumnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-right: 10px; /* Added padding to the right side of left fields */
  padding-left: 10px; /* Added padding to the left side of right fields */
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  color: #555;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Option = styled.option``;

const Button = styled.button`
  background-color: teal;
  color: #ffffff;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #007a74;
  }
`;

const ProfileEdit = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: currentUser?.firstname,
    lastname: currentUser?.lastname,
    image: currentUser?.image || "",
    phoneNumber: "",
    address: "",
    skills: "",
    experience: "",
    education: "",
    portfolioLink: "",
    hourlyRate: "",
    availability: "Full-time",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    async function setProfile() {
      try {
        const response = await axios.put(
          `https://empowerabilitybackend56dcdfs4q43srd.vercel.app/freelancer/edit-profile`,
          formData,
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.status) {
          toast(response.data.message);
        }
      } catch (err) {}
    }
    setProfile();
  };

  console.log(formData);

  useEffect(() => {
    async function getProfile() {
      try {
        const response = await axios.get(
          `https://empowerabilitybackend56dcdfs4q43srd.vercel.app/freelancer/get-profile`,
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.status === true) {
          setFormData({
            ...response.data.freelancerProfile,
            firstname:
              response.data.freelancerProfile.firstname ||
              currentUser?.firstname,
            lastname:
              response.data.freelancerProfile.lastname || currentUser?.lastname,
              image: response.data.freelancerProfile.image || currentUser?.image || "",
          });
        } else {
          navigate("/freelancer");
          toast("Set up your profile first");
          return;
        }
      } catch (err) {}
    }
    getProfile();
  }, []);

  const [disabled, setdisabled] = useState(false);

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

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <Title>Your Profile</Title>
        <ColumnsContainer>
          <Column>
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
            <FormGroup>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                type="text"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Enter your last name"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="address">Address</Label>
              <Input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="skills">Skills</Label>
              <Input
                type="text"
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="Enter your skills (e.g., web development, graphic design)"
                required
              />
            </FormGroup>
          </Column>
          <Column>
            <FormGroup>
              <Label htmlFor="portfolioLink">Portfolio Link</Label>
              <Input
                type="text"
                id="portfolioLink"
                name="portfolioLink"
                value={formData.portfolioLink}
                onChange={handleChange}
                placeholder="Enter link to your portfolio (if any)"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="hourlyRate">Hourly Rate ($)</Label>
              <Input
                type="number"
                id="hourlyRate"
                name="hourlyRate"
                value={formData.hourlyRate}
                onChange={handleChange}
                placeholder="Enter your hourly rate"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="experience">Experience</Label>
              <TextArea
                id="experience"
                name="experience"
                rows="4"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Tell us about your relevant experience"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="education">Education</Label>
              <TextArea
                id="education"
                name="education"
                rows="4"
                value={formData.education}
                onChange={handleChange}
                placeholder="Enter your educational background"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="availability">Availability</Label>
              <Select
                id="availability"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                required
              >
                <Option value="Full-time">Full-time</Option>
                <Option value="Part-time">Part-time</Option>
                <Option value="Contract">Contract</Option>
              </Select>
            </FormGroup>
          </Column>
        </ColumnsContainer>

        <Button type="submit">Save Profile</Button>
      </FormContainer>
    </Container>
  );
};

export default ProfileEdit;
