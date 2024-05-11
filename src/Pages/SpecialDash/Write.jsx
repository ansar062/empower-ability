import React, { useState } from "react";
import styled from "styled-components";
import Layout from "./Slayout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  postStart,
  postFail,
  postSuccess,
} from "../../store/slices/postBlogSlice";
import { toast } from "react-toastify";

// Wrapper for the entire component
const WriteWrapper = styled.div`
  padding-top: 50px;
`;

// Styled image
const WriteImg = styled.img`
  margin-left: 150px;
  width: 50vw;
  height: 250px;
  border-radius: 10px;
  object-fit: cover;
`;

// Styled form
const WriteForm = styled.form`
  position: relative;
`;

// Styled form group
const WriteFormGroup = styled.div`
  margin-left: 150px;
  display: flex;
  align-items: center;
`;

// Styled icon
const WriteIcon = styled.label`
  width: 25px;
  height: 25px;
  font-size: 20px;
  border: 1px solid;
  border-radius: 50%;
  color: teal;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

// Styled input
const WriteInput = styled.input`
  font-size: 30px;
  border: none;
  padding: 20px;
  width: 50vw;

  &::placeholder {
    color: rgb(189, 185, 185);
    font-weight: 400;
  }

  &:focus {
    outline-style: none;
  }
`;

// Styled text area
const WriteText = styled.textarea`
  width: 50vw;
  height: 50vh;
  font-family: inherit;
  font-size: 20px;
  margin-bottom: 20px;
`;

// Styled submit button
const WriteSubmit = styled.button`
  position: absolute;
  top: 20px;
  right: 100px;
  color: white;
  background-color: teal;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export default function Write() {
  
  const navigate = useNavigate();
  const [cover, setCover] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [coverImg, setCoverImg] = useState();
  const { error, loading } = useSelector((state) => state.postblog);
  const dispatch = useDispatch();
  function uploadImage(file) {
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
        toast("Image uploaded successfully")
      })
      .catch((err) => {
        console.log(err);
        toast("Image not uploaded, try again later")
      });
    return 0;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("cover", cover);
    data.append("title", title);
    data.append("content", content);
    try {
      dispatch(postStart());
      await axios
        .post("http://localhost:8000/createblog", {
          cover, title, content
        }, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          const data = response.data;
          if (data.status === true) {
            dispatch(postSuccess());
            navigate("/blogs");
          }
          dispatch(postFail());
        });
    } catch (err) {
      dispatch(postFail(err));
    }
  };
  return (
    <Layout>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <WriteWrapper>
          <WriteImg src="\Images\write.png" alt="" />
          <WriteForm onSubmit={handleSubmit} enctype={"multipart/form-data"}>
            <WriteFormGroup>
              <WriteIcon htmlFor="fileInput">
                <i className="fas fa-plus"></i>
              </WriteIcon>
              <input
                name="cover"
                onChange={({ target }) => {
                  if (target.files) {
                    const file = target.files[0];
                    uploadImage(file);
                    setCoverImg(URL.createObjectURL(file));
                    setCover(file);
                  }
                }}
                id="fileInput"
                type="file"
                style={{ display: "none" }}
              />
              {coverImg ? (
                <img src={coverImg} height={50} width={50} alt="" />
              ) : (
                <span>Select Image</span>
              )}
              <WriteInput
                className="writeInput"
                placeholder="Title"
                type="text"
                name="title"
                autoFocus={true}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </WriteFormGroup>
            <WriteFormGroup>
              <WriteText
                className="writeInput writeText"
                placeholder="Tell your story..."
                type="text"
                name="content"
                autoFocus={true}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </WriteFormGroup>
            <WriteSubmit type="submit">Publish</WriteSubmit>
          </WriteForm>
        </WriteWrapper>
      )}
    </Layout>
  );
}
