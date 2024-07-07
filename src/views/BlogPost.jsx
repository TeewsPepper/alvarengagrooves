import React from "react";
import { useParams } from "react-router-dom";

import blogPosts from "../data/blogData";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Post no encontrado</div>;
  }

  return (
    <>
      <h1 className="blogpost-title">{post.title}</h1>
      <div className="blopost-container">
        <p className="blogpost-description">{post.description}</p>
        <div className="blogpost-container">
          <img loading="lazy" src={post.image} alt={post.title} />
          <div className="blogpost-content">{post.content}</div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
