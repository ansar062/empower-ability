import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
// Wrapper for the entire component
const WriteWrapper = styled.div`
  padding-top: 50px;
`;

// Styled image
const WriteImg = styled.img`
  margin-left: 150px;
  width: 70vw;
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
  width: 70vw;

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
  width: 70vw;
  height: 100vh;
  font-family: inherit;
  font-size: 20px;
`;

// Styled submit button
const WriteSubmit = styled.button`
  position: absolute;
  top: 20px;
  right: 50px;
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

export default function EditPost() {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const { currentUser } = useSelector((state) => state.auth);
  const [cover, setCover] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [coverImg, setCoverImg] = useState();
  const [blogAuthor, setBlogAuthor] = useState("");
  console.log(currentUser._id, blogAuthor);
  useEffect(() => {
    async function fetchPost() {
      try {
        await axios.get(`http://localhost:8000/blog/${id}`).then((response) => {
          const data = response.data;
          setTitle(data.title);
          setContent(data.content);
          setBlogAuthor(data.author._id);
          setCoverImg(data.cover);
        });
      } catch (err) {}
    }
    fetchPost();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", cover);
    data.append("title", title);
    data.append("content", content);
    data.append("id", id);
    try {
      await axios
        .put(`http://localhost:8000/blog/edit`, data, {
          withCredentials: true,
        })
        .then((response) => {
          const data = response.data;
          if (data.status === false) {
            toast(data.message);
            return;
          }
          navigate("/");
          toast(data.message);
        });
    } catch (err) {
      toast(err);
    }
  };
  return (
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
                setCoverImg(URL.createObjectURL(file));
                setCover(file);
              }
            }}
            id="fileInput"
            type="file"
            style={{ display: "none" }}
          />
          {coverImg ? (
            <img
              src={`http://localhost:8000/${coverImg}`}
              height={50}
              width={50}
              alt=""
            />
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
        <WriteSubmit type="submit">Update</WriteSubmit>
      </WriteForm>
    </WriteWrapper>
  );
}
