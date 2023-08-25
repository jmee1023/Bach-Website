// BlogPost.js

import React from 'react';
import './Blog.css'; // Import the CSS file

const BlogPost = ({ title, author, content }) => {
  return (
    <div className="blog-post">
      <h2 className="blog-title">{title}</h2>
      <p className="blog-author">By {author}</p>
      <div className="blog-content">{content}</div>
    </div>
  );
};

export default BlogPost;
