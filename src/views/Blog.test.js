// src/views/Blog.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Blog from './Blog';
import blogPosts from '../data/blogData';

// Mock del archivo de datos del blog
jest.mock('../data/blogData');

describe('Blog Component', () => {
  test('renders the blog title', () => {
    render(
      <MemoryRouter>
        <Blog />
      </MemoryRouter>
    );

    const titleElement = screen.getByText(/Blog/i);
    expect(titleElement).toBeInTheDocument();
  });

  /* test('renders the correct number of blog posts', () => {
    render(
      <MemoryRouter>
        <Blog />
      </MemoryRouter>
    );

    const blogPostsElements = screen.getAllByTestId('blog-post');
    expect(blogPostsElements.length).toBe(blogPosts.length);
  }); */

  test('renders blog post details correctly', () => {
    render(
      <MemoryRouter>
        <Blog />
      </MemoryRouter>
    );

    blogPosts.forEach(post => {
      const titleElement = screen.getByText(post.title);
      const descriptionElement = screen.getByText(post.description);
      const contentElement = screen.getByText(post.content);

      expect(titleElement).toBeInTheDocument();
      expect(descriptionElement).toBeInTheDocument();
      expect(contentElement).toBeInTheDocument();

      if (post.image) {
        const imageElement = screen.getByAltText(post.title);
        expect(imageElement).toBeInTheDocument();
      }
    });
  });

 /*  test('renders ScrollToTopButton component', () => {
    render(
      <MemoryRouter>
        <Blog />
      </MemoryRouter>
    );

    const scrollToTopButton = screen.getByRole('button', { name: /scroll to top/i });
    expect(scrollToTopButton).toBeInTheDocument();
  }); */
});
