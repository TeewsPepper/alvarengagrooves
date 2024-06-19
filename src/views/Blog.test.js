

// src/views/Blog.test.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Blog from './Blog';
import blogPosts from '../data/blogData';

test('renders Blog component with blog posts', () => {
  render(
    <Router>
      <Blog />
    </Router>
  );

  // Verifica que el título del blog está presente
  expect(screen.getByText('Blog')).toBeInTheDocument();

  // Verifica que el contenedor del blog está presente
  expect(screen.getByTestId('blog')).toBeInTheDocument();

  // Verifica que los posts están renderizados
  const blogPostElements = screen.getAllByTestId('blog-post');
  expect(blogPostElements).toHaveLength(blogPosts.length);

  // Verifica el contenido de cada post
  blogPosts.forEach((post, index) => {
    const postElement = blogPostElements[index];
    expect(postElement).toBeInTheDocument();
    expect(postElement).toHaveTextContent(post.title);
    expect(postElement).toHaveTextContent(post.description);
    expect(postElement).toHaveTextContent(post.content);

    if (post.image) {
      const imageElement = screen.getByAltText(post.title);
      expect(imageElement).toBeInTheDocument();
      expect(imageElement).toHaveAttribute('src', post.image);
    }
  });
});

