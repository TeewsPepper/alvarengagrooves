
import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTopButton from "../components/ScrollToTopButton";
import blogPosts from "../data/blogData";

const Blog = () => {
  return (
    <>
      <h3 className='blog-title'>Blog</h3>
      <div className="blog-container" data-testid="blog">
        {blogPosts.map((post) => (
          <div key={post.id} className="blogpost" data-testid={`blog-post-${post.id}`}>
            <Link to={`/blog/${post.id}`} >
              <h2 data-testid={`blog-post-title-${post.id}`}>{post.title}</h2>
              <p data-testid={`blog-post-description-${post.id}`}>{post.description}</p>
              {post.image && <img src={post.image} loading='lazy' alt={post.title} data-testid={`blog-post-image-${post.id}`}/>}
              <p className='content' data-testid={`blog-post-content-${post.id}`}>{post.content}</p>
            </Link>
          </div>
        ))}
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default Blog;



