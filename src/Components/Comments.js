import React, { useState } from 'react';
import styled from 'styled-components';

const CommentContainer = styled.div`
  margin-bottom: 20px;
`;

const CommentInput = styled.input`
  padding: 8px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box; /* Ensure padding doesn't increase the width */

  @media (max-width: 768px) {
    padding: 6px;
    font-size: 14px;
  }
`;

const CommentButton = styled.button`
  padding: 8px 16px;
  margin-top: 8px;
  background-color: teal;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 14px;
  }
`;

const Comment = ({ user }) => {
  const [comment, setComment] = useState('');

  const handleSubmitComment = () => {
    if (comment.trim() !== '') {
      // Here, you can send the comment to your backend or perform any other necessary action
      console.log(`User ${user.id} commented: ${comment}`);
      setComment('');
    } else {
      console.log('Comment cannot be empty');
    }
  };

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <CommentContainer>
      <CommentInput
        type="text"
        placeholder="Write a comment..."
        value={comment}
        onChange={handleChange}
      />
      <CommentButton onClick={handleSubmitComment}>Post Comment</CommentButton>
    </CommentContainer>
  );
};

export default Comment;
