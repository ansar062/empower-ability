import React from 'react';
import styled from 'styled-components';

const BlogSectionWrapper = styled.section`
  text-align: center;
  margin: 2px 0 80px; 

  h2 {
    color: teal;
    font-size: 2rem;
  }

  &:hover h2 {
    color: teal;
  }
`;

const GridList = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const BlogCard = styled.li`
  width: 250px;
  height: 350px;
  border: 2px solid teal;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardBanner = styled.figure`
  width: 100%;
  height: 50%;
  overflow: hidden;
  margin: 0;
  border-bottom: 2px solid teal;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const CardContent = styled.div`
  width: 100%;
  height: 50%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardSubtitle = styled.p`
  text-transform: uppercase;
  font-size: 14px;
  color: black;
  margin-bottom: 2px;
`;

const CardTitle = styled.h3`
  margin-top: 5px;
  margin-bottom: 30px;
  font-size: 18px;
  color: black;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: teal;
  }
`;

const CardMetaList = styled.ul`
  display: flex;
  gap: 5px;
  font-size: 14px;
`;

const CardMetaItem = styled.li`
  display: flex;
  align-items: center;
  color: #555;

  ion-icon {
    color: teal;
    font-size: 16px;
    margin-right: 5px;
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background-color: teal;
  color: white;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${BlogCard}:hover & {
    opacity: 1;
  }
`;


const BlogSection = () => {
  const blogData = [
    {
      id: 1,
      title: 'Breaking Down Barriers: Accessibility in the Digital Age',
      subtitle: 'Online',
      date: 'Oct 12, 2021',
      comments: 15,
      image: './Images/blog-1.jpg',
    },
    {
      id: 2,
      title: 'Empowering Differently-Abled Individuals Through Technology',
      subtitle: 'Online',
      date: 'Oct 15, 2021',
      comments: 20,
      image: './Images/blog-2.jpg',
    },
    {
      id: 3,
      title: 'Inclusive Education: A Pathway to a Better Future',
      subtitle: 'Online',
      date: 'Oct 18, 2021',
      comments: 12,
      image: './Images/blog-3.jpg',
    },
  ];

  return (
    <BlogSectionWrapper>
      <div className="container">
        <h2 className="h2 section-title">Get News With Eduweb</h2>
        <p className="section-subtitle">Latest Articles</p>

        <GridList>
          {blogData.map((blog) => (
            <BlogCard key={blog.id}>
              <CardBanner>
                <img src={blog.image} alt={`Card ${blog.id}`} />
              </CardBanner>

              <Arrow>&rarr;</Arrow>

              <CardContent>
                <CardSubtitle>{blog.subtitle}</CardSubtitle>

                <CardTitle>
                <a href="/singlepost" className="card-title" style={{ color: 'black', textDecoration: 'none' }}>
                    {blog.title} 
                  </a>
                </CardTitle>

                <CardMetaList>
                  <CardMetaItem>
                    <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>
                    <span className="span">{blog.date}</span>
                  </CardMetaItem>

                  <CardMetaItem>
                    <ion-icon name="chatbubbles-outline" aria-hidden="true"></ion-icon>
                    <span className="span">{blog.comments} Comments</span>
                  </CardMetaItem>
                </CardMetaList>
              </CardContent>
            </BlogCard>
          ))}
        </GridList>
      </div>



    </BlogSectionWrapper>
  );
};

export default BlogSection;
