import React from 'react';
import styled from 'styled-components';

const TeachWithUsWrapper = styled.div`
  background-color: #008080;
  color: #fff;
  padding: 20px;
  margin-bottom: 50px;
`;

const SectionHeading = styled.h2`
  margin-top: 30px;
  font-size: 24px;
  margin-bottom: 10px;
  text-align:center;
`;

const SectionContent = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
  text-align:center;
`;

const ApplyNowWrapper = styled.div`
  background-color: white;
  color: black;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto 50px;

  h2{
    text-align:center;
    color:teal;
  }
`;

const ApplyNowForm = styled.form`
  display: grid;
  gap: 20px;
  margin-left:30px;

`;

const FormLabel = styled.label`
  font-size: 16px;
  color: black;
  
  display: block;
`;

const FormInput = styled.input`

width: 90%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid teal;
  border-radius: 4px;
`;

const FormTextarea = styled.textarea`
  width: 90%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid teal;
  border-radius: 4px;
`;

const FileInputLabel = styled.label`
  font-size: 16px;
  color: black;
  display: block;
  margin-bottom: 5px;
`;

const FileInput = styled.input`
width: 90%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid teal;
  border-radius: 4px;
`;

const MandatoryAsterisk = styled.span`
  color: red;
`;

const ApplyButton = styled.button`
  background-color: teal;
  color: white;
  padding: 10px 2px;
  width: 20%;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005050;
  }
`;

const BecomeInstructor = () => {
  return (
    <div>
      {/* Section 1: Teach with Us */}
      <TeachWithUsWrapper>
        <SectionHeading>Teach with Us</SectionHeading>
        <SectionContent>
          Join our community of esteemed instructors and make a positive impact on Muslim competency globally.
        </SectionContent>
      </TeachWithUsWrapper>

      {/* Section 3: Apply Now Form */}
      <SectionHeading>Apply Now</SectionHeading>
      <SectionContent>
        Fill out the following application form to be considered for a teaching position at Source Code Academia.
      </SectionContent>
      <ApplyNowWrapper>
        <div><h2>Fill out this Form!</h2></div>
        <ApplyNowForm>

          <div>
            <FormLabel htmlFor="fullName">
              Full Name <MandatoryAsterisk>*</MandatoryAsterisk>
            </FormLabel>
            <FormInput type="text" id="fullName" required />
          </div>
          <div>
            <FormLabel htmlFor="email">
              Email <MandatoryAsterisk>*</MandatoryAsterisk>
            </FormLabel>
            <FormInput type="email" id="email" required />
          </div>
          <div>
            <FormLabel htmlFor="experience">
              Teaching Experience <MandatoryAsterisk>*</MandatoryAsterisk>
            </FormLabel>
            <FormInput type="text" id="experience" required />
          </div>
          <div>
            <FormLabel htmlFor="availability">
              Availability (How Many Hours/Week) <MandatoryAsterisk>*</MandatoryAsterisk>
            </FormLabel>
            <FormInput type="text" id="availability" required />
          </div>
          <div>
            <FormLabel htmlFor="positionApplyingFor">
              Position Applying For <MandatoryAsterisk>*</MandatoryAsterisk>
            </FormLabel>
            <FormInput type="text" id="positionApplyingFor" required />
          </div>
          <div>
            <FileInputLabel htmlFor="resume">
              Resume (PDF) <MandatoryAsterisk>*</MandatoryAsterisk>
            </FileInputLabel>
            <FileInput type="file" id="resume" accept=".pdf" required />
          </div>
          <div>
            <FormLabel htmlFor="whySuitable">
              Why do you think you are suitable for this job? <MandatoryAsterisk>*</MandatoryAsterisk>
            </FormLabel>
            <FormTextarea rows="4" id="whySuitable" required />
          </div>
          <ApplyButton type="submit">Apply Now</ApplyButton>
        </ApplyNowForm>
      </ApplyNowWrapper>
    </div>
  );
};

export default BecomeInstructor;
