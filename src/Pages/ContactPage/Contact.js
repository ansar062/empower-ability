import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: teal;
  color: #fff;
  padding: 20px 0;
  border-radius: 10px;
  margin: 0 20px;

  @media (max-width: 768px) {
    margin: 0 15px;
  }

  @media (max-width: 480px) {
    margin: 0 10px;
  }
`;

const HeaderContent = styled.div`
  text-align: center;
`;

const HeaderTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 70px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 50px;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;

const AboutSection = styled.div`
  padding: 100px 0;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    padding: 70px 0;
  }

  @media (max-width: 480px) {
    padding: 50px 20px;
  }
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

  @media (max-width: 480px) {
    display: none;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const AboutContent = styled.div`
  width: 48%;

  @media (max-width: 768px) {
    width: 100%;
    text-align:left;
  }
`;

const AboutHeading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: teal;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const AboutParagraph = styled.p`
  font-size: 18px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const AboutChecklist = styled.ul`
  padding-left: 20px;
  list-style: none;
  text-align: left;

  @media (max-width: 480px) {
    padding-left: 0;
    text-align: left;
  }
`;

const AboutCheckItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: teal;

  &::before {
    content: '\2022';
    color: #007bff;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-right: 8px;

    @media (max-width: 480px) {
      margin-right: 4px;
    }
  }
`;

const ReadMoreButton = styled.a`
  background-color: #008080;
  border: 2px solid #008080;
  text-align: center;
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

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 16px;
  }
`;

const ContactSection = styled.div`
  padding: 100px 0;
  background-color: white;
  color: black;

  @media (max-width: 768px) {
    padding: 70px 0;
  }

  @media (max-width: 480px) {
    padding: 50px 20px;
  }
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

const ContactImageContainer = styled.div`
  width: 48%;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    display: none;
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

  @media (max-width: 480px) {
    padding: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const ContactFormTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const ContactFormField = styled.div`
  margin-bottom: 20px;

  label {
    font-size: 18px;
    margin-bottom: 10px;
    color: teal;
    display: block;

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  input,
  textarea {
    width: 100%;
    padding: 12px;
    margin-top: 8px;
    border: 1px solid teal;
    border-radius: 5px;
    font-size: 16px;
    background-color: transparent;
    color: #333;

    @media (max-width: 480px) {
      padding: 10px;
      font-size: 14px;
    }
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

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 16px;
  }
`;

const EmpowerAbility = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <HeaderTitle>Contact Us</HeaderTitle>
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
              <AboutCheckItem>Unlock Your Potential: Discover and showcase your unique abilities with our support.</AboutCheckItem>
              <AboutCheckItem>Job Placement Assistance: From resumes to interviews, we guide you to the right job fit.</AboutCheckItem>
              <AboutCheckItem>Tailored Training: Our programs equip you with the skills demanded by today's job market.</AboutCheckItem>
              <AboutCheckItem>Promoting Independence: Build confidence and navigate life independently with our mentorship.</AboutCheckItem>
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
          <ContactImageContainer>
            <AboutImage src="/Images/Cont.jpg" alt="Contact Us Image" />
          </ContactImageContainer>
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
