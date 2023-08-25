// Blog.js

import React from 'react';
import BlogPost from './BlogPost'; // Import the BlogPost component
import './Blog.css'; // Import the CSS file

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Introduction to React Components',
      author: 'John Doe',
      content: 'In this post, we will explore the basics of creating React components...',
    },
    {
      id: 2,
      title: 'State Management with Redux',
      author: 'Jane Smith',
      content: 'Learn how to manage your application state using Redux...',
    },
    // Add more blog posts here...
  ];

  return (
    <div className="blog">
      <h1>Welcome to My Blog</h1>
      {blogPosts.map((post) => (
        <BlogPost
          key={post.id}
          title={post.title}
          author={post.author}
          content={post.content}
        />
      ))}
    </div>
  );
};

export default Blog;
