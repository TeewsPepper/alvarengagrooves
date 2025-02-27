/* import ScrollToTopButton from "../components/ScrollToTopButton";
import blogPosts from "../data/blogData"

const Blog = () => {
 


  return (
    <>
    <h1 className='text-white font-bold text-4xl text-center mt-3 mb-5'>Blog</h1>
    <div className="blog-container">
        
      {blogPosts.map((post) => (
        <div key={post.id} className="blog-post mb-8 p-4 rounded shadow-lg text-white">
          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
          <p className=" mb-4">{post.description}</p>
          {post.image && <img src={post.image} alt={post.title} className="mb-4 rounded" />}
          <p >{post.content}</p>
        </div>
      ))}
    </div>
    <ScrollToTopButton />
    </>
  );
};

export default Blog; */

// src/views/Blog.jsx
import { Link } from 'react-router-dom';
import ScrollToTopButton from "../components/ScrollToTopButton";
import blogPosts from "../data/blogData";


const Blog = () => {
  return (
    <>
      <h1 className='text-white font-bold text-4xl text-center mt-3 mb-5'>Blog</h1>
      <div className="blog-container">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post mb-8 p-4 rounded shadow-lg text-white">
            <Link to={`/blog/${post.id}`} className="no-underline text-white">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
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

