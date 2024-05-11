import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";
import { toast } from "react-toastify";

// Styled Components
const BlogPostContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const BlogImage = styled.img`
  width: 500px;
  height: auto;
  margin-bottom: 20px;
`;

const SectionHeader = styled.h2`
  font-size: 1.5rem;
  color: teal;
  margin-bottom: 15px;
`;

const EditButton = styled.a`
  position: reltive;
  width: 100px;
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
const DeleteButton = styled.button`
  position: reltive;
  color: white;
  background-color: red;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

// React Component
const JobSearchTipsPost = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const id = params.id;
  const [blog, setBlog] = useState(null);
  const { currentUser } = useSelector((state) => state.auth);
  useEffect(() => {
    setLoading(true);
    async function fetchSinglePost() {
      try {
        await axios.get(`http://localhost:8000/blog/${id}`).then((response) => {
          const blogdata = response.data;
          setBlog(blogdata);
          setLoading(false);
        });
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    }
    const delay = setTimeout(() => {
      fetchSinglePost();
      setLoading(false);
      clearTimeout(delay);
    }, 3000);
    return () => clearTimeout(delay);
  }, []);

  async function deleteBlog() {
    try {
      console.log(id);
      await axios
        .delete(`http://localhost:8000/blog/delete/${id}`, {
          withCredentials: true,
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then((response) => {
          if (response.data.status === true) {
            toast(response.data.message);
            navigate("/blogs");
          }
        });
    } catch (err) {}
  }

  return (
    <BlogPostContainer>
      {loading ? (
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : (
        blog && (
          <div>
            <SectionHeader>{blog.title}</SectionHeader>
            {currentUser && // Check if currentUser is not null
              currentUser._id === blog.author._id && ( // Check for authorship only if currentUser exists
                <>
                  <EditButton
                    href={`/blogs/edit/${blog._id}`}
                    className="edit-row"
                  >
                    Edit this post
                  </EditButton>
                  <DeleteButton className="edit-row" onClick={deleteBlog}>
                    Delete
                  </DeleteButton>
                </>
              )}
            <BlogImage
              src={`http://localhost:8000/${blog.cover}`}
              alt="Job Search Tips"
            />
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>
        )
      )}
    </BlogPostContainer>
  );
};

export default JobSearchTipsPost;
