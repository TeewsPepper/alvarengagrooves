import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTopButton from "../components/ScrollToTopButton";
import blogPosts from "../data/blogData";

const Blog = () => {
  return (
    <>
      <h1 className='blog-title text-white font-bold  text-center '>Blog</h1>
      <div className="blog-container" data-testid="blog">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post mb-4 p-1 rounded shadow-lg text-white" data-testid="blog-post">
            <Link to={`/blog/${post.id}`} className="no-underline text-white">
              <h2 className=" font-bold mb-2">{post.title}</h2>
              <p className=" mb-4">{post.description}</p>
              {post.image && <img src={post.image} alt={post.title} className="mb-4 rounded" />}
              <p >{post.content}</p>
            </Link>
          </div>
        ))}
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default Blog;


