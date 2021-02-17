import React from "react";

const CommentDetails = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          Malathi
        </a>
        <div className="metadata">
          <span className="date">Today at 5:00pm</span>
        </div>
        <div className="text">Nice post</div>
      </div>
    </div>
  );
};
export default CommentDetails;
