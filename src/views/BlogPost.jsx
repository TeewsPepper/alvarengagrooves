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
      <h1 className="text-4xl text-center text-white mt-8  ml-8 font-bold mb-4">
        {post.title}
      </h1>
      <p className="text-lg text-center text-white  ml-8 font-bold mb-12">
        {post.description}
      </p>
      <div className="blogpost-container text-white">
        <img src={post.image} alt={post.title} className="mb-4" />
        <div className="blog-content mt-4">{post.content}</div>
      </div>
    </>
  );
};

export default BlogPost;
