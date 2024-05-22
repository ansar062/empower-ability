import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Oval } from "react-loader-spinner";

const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 40px 20px;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const PostCard = styled.div`
  width: 100%;
  max-width: 900px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 90%;
  }
`;

const PostImage = styled.img`
  width: 120px;
  height: 120px;
  margin-top: 50px;
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 50px;
  border-radius: 8px;

  @media (max-width: 768px) {
    margin: 1px 0;
    object-fit: cover;
    width: 100%; 
    height: auto; 
  }
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 0 8px 8px 0;
  flex: 1;
  padding: 20px;

  @media (max-width: 768px) {
    border-radius: 8px;
  }
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  @media (max-width: 768px) {
  margin-top: -20px;
   }
`;

const PostCategory = styled.p`
  font-size: 0.8rem;
  margin-right: 10px;
  @media (max-width: 768px) {
    font-size:0.6rem;
   }
`;

const PostDate = styled.p`
  font-size: 0.8rem;
  @media (max-width: 768px) {
    font-size:0.6rem;
   }
`;

const PostTitleLink = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
  margin-top: 1px;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease, text-decoration 0.3s ease;

  &:hover {
    color: teal;
    text-decoration: underline;
  }
  @media (max-width: 768px) {
   font-size:1rem;
   margin-top: -20px;
   margin-bottom:5px;
  }
`;

const PostText = styled.div`
  font-size: 1rem;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    font-size:0.7rem;
    margin-bottom:5px;
   }
`;

const PostTextContainer = styled.div`
  max-height: 100px;
  overflow: hidden;
`;

const Posts = () => {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("https://empowerabilitybackend56dcdfs4q43srd.vercel.app/blogs", { withCredentials: true });
        setBlogs(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    const delay = setTimeout(() => {
      fetchBlogs();
      clearTimeout(delay);
    }, 3000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <PostsContainer>
      {loading ? (
        <Oval visible={true} height="80" width="80" color="#4fa94d" ariaLabel="oval-loading" wrapperStyle={{}} wrapperClass="" />
      ) : blogs && blogs.length > 0 ? (
        blogs.map((post) => (
          <PostCard key={post._id}>
            {post.cover ? (
              <PostImage src={`${post.cover}`} alt="Blog Post" />
            ) : (
              <PostImage src="/Images/blo.jpg" alt="blog post" />
            )}
            <PostContent>
              <PostHeader>
                <PostCategory>{post.author.username}</PostCategory>
                <PostDate>{formatDate(post.createdAt)}</PostDate>
              </PostHeader>
              <PostTitleLink href={`/blogs/blog/${post._id}`}>{post.title}</PostTitleLink>
              <PostTextContainer>
                <PostText dangerouslySetInnerHTML={{ __html: post.content }} />
              </PostTextContainer>
            </PostContent>
          </PostCard>
        ))
      ) : (
        <div>No blogs found</div>
      )}
    </PostsContainer>
  );
};

export default Posts;

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}
