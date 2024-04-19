import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: teal;
  color: #fff;
  padding: 20px 0;
`;

const HeaderContent = styled.div`
  text-align: center;
`;

const HeaderTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 70px;
`;

const AboutSection = styled.div`
  padding: 100px 0;
  background-color: #f8f9fa;
`;

const AboutContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const AboutImageContainer = styled.div`
  width: 48%;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const AboutImage = styled.img`
  width: 100%;


`;

const AboutContent = styled.div`
  width: 48%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const AboutHeading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color:teal;
`;

const AboutParagraph = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const AboutChecklist = styled.ul`
  padding-left: 20px;
  list-style:none;
`;

const AboutCheckItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color:teal;

  &::before {
    content: '\2022';
    color: #007bff;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-right: 8px;
  }
`;

const ReadMoreButton = styled.a`
  background-color: #008080;
  border: 2px solid #008080;
  text-align:center;
  color: white;
  padding: 15px 30px;
  font-size: 18px;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.3s, color 0.3s;


  &:hover {
    background-color: white;
    color: #008080;
  }
`;

const ContactSection = styled.div`
  padding: 100px 0;
  background-color: white;
  color: black;
`;

const ContactContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ContactInfoContainer = styled.div`
  width: 48%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const ContactInfoItem = styled.div`
  background-color: #007bff;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }

  & > div {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    &::before {
      content: '\2022';
      color: white;
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-right: 8px;
    }
  }
`;

const ContactFormContainer = styled.div`
  width: 48%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ContactForm = styled.form`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ContactFormTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 15px;
`;

const ContactFormField = styled.div`
  margin-bottom: 20px;

  label {
    font-size: 18px;
    margin-bottom: 10px;
    color: teal;
  }

  input,
  textarea {
    width: 90%;
    padding: 12px;
    margin-top: 8px;
    border: 1px solid teal;
    border-radius: 5px;
    font-size: 16px;
    background-color: transparent;
    color: #333;
  }
`;

const ContactFormButton = styled.button`
  margin-top: 20px;
  padding: 15px;
  background-color: teal;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: white;
    color: teal;
  }
`;

const EmpowerAbility = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          
          <HeaderTitle>Contct US</HeaderTitle>
          Welcome to EmpowerAbility – Your Gateway to Independence!
        </HeaderContent>
      </HeaderContainer>

      <AboutSection>
        <AboutContainer>

          <AboutContent>
            <AboutHeading>About Us</AboutHeading>
            <AboutParagraph>
              At EmpowerAbility, we're passionate about helping individuals with disabilities find their unique talents, secure meaningful jobs, and gain the skills needed for independence.
            </AboutParagraph>
            <AboutChecklist>
              <AboutCheckItem><span>&#10003;</span> Unlock Your Potential: Discover and showcase your unique abilities with our support.</AboutCheckItem>
              <AboutCheckItem><span>&#10003;</span> Job Placement Assistance: From resumes to interviews, we guide you to the right job fit.</AboutCheckItem>
              <AboutCheckItem><span>&#10003;</span> Tailored Training: Our programs equip you with the skills demanded by today's job market.</AboutCheckItem>
              <AboutCheckItem><span>&#10003;</span> Promoting Independence: Build confidence and navigate life independently with our mentorship.</AboutCheckItem>
            </AboutChecklist>
            <ReadMoreButton href="#">Read More</ReadMoreButton>

          </AboutContent>
          <AboutImageContainer>
            <AboutImage src="/Images/Aboutpage.jpg" alt="About Us Image" />
          </AboutImageContainer>
        </AboutContainer>
      </AboutSection>

      <ContactSection>
        <ContactContainer>
             <AboutImageContainer>
            <AboutImage src="/Images/Cont.jpg" alt="About Us Image" />
          </AboutImageContainer>
          <ContactFormContainer>
            <ContactForm>
              <ContactFormTitle>Contact For Any Query</ContactFormTitle>
              <ContactFormField>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" />
              </ContactFormField>
              <ContactFormField>
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" />
              </ContactFormField>
              <ContactFormField>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" />
              </ContactFormField>
              <ContactFormField>
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4"></textarea>
              </ContactFormField>
              <ContactFormButton type="submit">Send Message</ContactFormButton>
            </ContactForm>
          </ContactFormContainer>
        </ContactContainer>
      </ContactSection>
    </>
  );
};

export default EmpowerAbility;
