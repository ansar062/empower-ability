import React from "react";
import { useEffect, useState } from "react";
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
`;

const PostCard = styled.div`
  width: 100%;
  max-width: 900px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
  display: flex;
`;

const PostImage = styled.img`
  width: 120px;
  height: 120px;
  margin-top: 50px;
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 50px;
  border-radius: 8px;
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 0 8px 8px 0;
  flex: 1;
  padding: 20px;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const PostCategory = styled.p`
  font-size: 0.8rem;
  margin-right: 10px;
`;

const PostDate = styled.p`
  font-size: 0.8rem;
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
`;

const PostText = styled.div`
  font-size: 1rem;
  margin-bottom: 15px;
`;

const PostTextContainer = styled.div`
  max-height: 100px; /* Set your desired height here */
  overflow: hidden;
`;


const Posts = () => {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    setLoading(true);
    const fetchBlogs = async () => {
      try {
        await axios
          .get("https://empowerabilitybackend56dcdfs4q43srd.vercel.app/blogs", { withCredentials: true })
          .then((response) => {
            const res = response.data;
            setBlogs(res);
            setLoading(false);
          });
      } catch (err) {
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
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : 
      blogs && 
      blogs.length > 0 ? (
        blogs.map((post) => (
          <PostCard key={post._id}>
            {post.cover ? (
              <PostImage
                src={`${post.cover}`}
                alt="Blog Post"
              />
            ) : (
              <PostImage src="/Images/blo.jpg" alt="blog post" />
            )}
            <PostContent>
              <PostHeader>
                <PostCategory>{post.author.username}</PostCategory>
                <PostDate>{formatDate(post.createdAt)}</PostDate>
              </PostHeader>
              <PostTitleLink href={`/blogs/blog/${post._id}`}>
                {post.title}
              </PostTitleLink>
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
