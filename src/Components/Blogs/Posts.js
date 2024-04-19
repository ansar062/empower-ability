import React from 'react';
import styled from 'styled-components';

const dummyPosts = [
  {
    id: 1,
    category: 'Personal Stories',
    publicationDate: 'Oct 17, 2023',
    title: 'Back-End & Web Development Trends For 2024',
    content:
      "The ever-shifting landscape of digital innovation can feel like a relentless race, a whirlwind of challenges and opportunities. Your pains as a developer are real — the pressure to deliver cutting-edge products, stay competitive, and keep up with evolving user expectations can be overwhelming.",
      image: '/Images/blo.jpg', 
  },
  {
  id: 1,
    category: 'Personal Stories',
    publicationDate: 'Oct 17, 2023',
    title: 'Back-End & Web Development Trends For 2024',
    content:
      "The ever-shifting landscape of digital innovation can feel like a relentless race, a whirlwind of challenges and opportunities. Your pains as a developer are real — the pressure to deliver cutting-edge products, stay competitive, and keep up with evolving user expectations can be overwhelming.",
      image: '/Images/blo.jpg', 
  },
  {
    id: 1,
    category: 'Personal Stories',
    publicationDate: 'Oct 17, 2023',
    title: 'Back-End & Web Development Trends For 2024',
    content: "The ever-shifting landscape of digital innovation can feel like a relentless race, a whirlwind of challenges and opportunities. Your pains as a developer are real — the pressure to deliver cutting-edge products, stay competitive, and keep up with evolving user expectations can be overwhelming.",
    image: '/Images/blo.jpg'
},
  {
  id: 1,
    category: 'Personal Stories',
    publicationDate: 'Oct 17, 2023',
    title: 'Back-End & Web Development Trends For 2024',
    content:
      "The ever-shifting landscape of digital innovation can feel like a relentless race, a whirlwind of challenges and opportunities. Your pains as a developer are real — the pressure to deliver cutting-edge products, stay competitive, and keep up with evolving user expectations can be overwhelming.",
      image: '/Images/blo.jpg', 
  },
];

const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
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

const Posts = () => {
  return (
    <PostsContainer>
      {dummyPosts.map((post) => (
        <PostCard key={post.id}>
          <PostImage src={post.image} alt="Blog Post" />
          <PostContent>
            <PostHeader>
              <PostCategory>{post.category}</PostCategory>
              <PostDate>{post.publicationDate}</PostDate>
            </PostHeader>
            <PostTitleLink href="/singlepost">{post.title}</PostTitleLink>
            <PostText>{post.content}</PostText>
          </PostContent>
        </PostCard>
      ))}
    </PostsContainer>
  );
};

export default Posts;
