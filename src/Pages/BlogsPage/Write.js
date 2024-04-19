import React from 'react';
import styled from 'styled-components';

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

export default function Write() {
  return (
    <WriteWrapper>
      <WriteImg
        src="\Images\write.png"
        alt=""
      />
      <WriteForm>
        <WriteFormGroup>
          <WriteIcon htmlFor="fileInput">
            <i className="fas fa-plus"></i>
          </WriteIcon>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <WriteInput
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </WriteFormGroup>
        <WriteFormGroup>
          <WriteText
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </WriteFormGroup>
        <WriteSubmit type="submit">
          Publish
        </WriteSubmit>
      </WriteForm>
    </WriteWrapper>
  );
}
