// src/tests/BlogPostIntegracion.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import BlogPost from '../views/BlogPost';
import blogPosts from '../data/blogData';

describe('BlogPost Integration Test', () => {
  test('renders BlogPost correctly for a valid post id', async () => {
    const validPost = blogPosts[0]; // Usa el primer post del blog como ejemplo
    render(
      <MemoryRouter initialEntries={[`/blog/${validPost.id}`]}>
        <Routes>
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </MemoryRouter>
    );

    // Verifica que el título se renderiza correctamente
    await waitFor(() => {
      expect(screen.getByText(validPost.title)).toBeInTheDocument();
    });

    // Verifica que la descripción se renderiza correctamente
    expect(screen.getByText(validPost.description)).toBeInTheDocument();

    // Verifica que la imagen se renderiza correctamente
    expect(screen.getByAltText(validPost.title)).toBeInTheDocument();

    // Verifica que el contenido se renderiza correctamente
    expect(screen.getByText(validPost.content)).toBeInTheDocument();
  });

  test('renders "Post no encontrado" for an invalid post id', async () => {
    render(
      <MemoryRouter initialEntries={['/blog/999']}>
        <Routes>
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </MemoryRouter>
    );

    // Verifica que el mensaje de "Post no encontrado" se renderiza correctamente
    await waitFor(() => {
      expect(screen.getByText(/Post no encontrado/i)).toBeInTheDocument();
    });
  });
});
