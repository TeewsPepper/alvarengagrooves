/* import React from 'react';
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
  blogPosts.forEach((post) => {
    const postElement = screen.getByTestId(`blog-post-${post.id}`);
    expect(postElement).toBeInTheDocument();

    // Verifica el título
    const titleElement = screen.getByTestId(`blog-post-title-${post.id}`);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(post.title);

    // Verifica la descripción
    const descriptionElement = screen.getByTestId(`blog-post-description-${post.id}`);
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveTextContent(post.description);

    // Verifica el contenido
    const contentElement = screen.getByTestId(`blog-post-content-${post.id}`);
    expect(contentElement).toBeInTheDocument();
    expect(contentElement).toHaveTextContent(post.content);

    // Verifica la imagen si existe
    if (post.image) {
      const imageElement = screen.getByTestId(`blog-post-image-${post.id}`);
      expect(imageElement).toBeInTheDocument();
      expect(imageElement).toHaveAttribute('src', post.image);
    }
  });
}); */

/* import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Blog from './Blog';
import blogPosts from '../data/blogData';

// Mock de los datos de blog para las pruebas
jest.mock('../data/blogData', () => [
  { id: 1, title: 'Post 1', description: 'Description 1', content: 'Content 1' },
  { id: 2, title: 'Post 2', description: 'Description 2', content: 'Content 2' },
]);

// Mockear window.scrollTo
beforeEach(() => {
  window.scrollTo = jest.fn();
});

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
  blogPosts.forEach((post) => {
    const postElement = screen.getByTestId(`blog-post-${post.id}`);
    expect(postElement).toBeInTheDocument();

    // Verifica el título
    const titleElement = screen.getByTestId(`blog-post-title-${post.id}`);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(post.title);

    // Verifica la descripción
    const descriptionElement = screen.getByTestId(`blog-post-description-${post.id}`);
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveTextContent(post.description);

    // Verifica el contenido
    const contentElement = screen.getByTestId(`blog-post-content-${post.id}`);
    expect(contentElement).toBeInTheDocument();
    expect(contentElement).toHaveTextContent(post.content);

    // Verifica la imagen si existe
    if (post.image) {
      const imageElement = screen.getByTestId(`blog-post-image-${post.id}`);
      expect(imageElement).toBeInTheDocument();
      expect(imageElement).toHaveAttribute('src', post.image);
    }
  });

  // Simula un clic en el botón de ScrollToTopButton
  const scrollToTopButton = screen.getByText(/Ir al inicio/i);
  fireEvent.click(scrollToTopButton);

  // Verifica que la función scrollTo se haya llamado una vez
  expect(window.scrollTo).toHaveBeenCalledTimes(1);
  expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
}); */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Blog from './Blog';
import blogPosts from '../data/blogData';

// Mock de los datos de blog para las pruebas
jest.mock('../data/blogData', () => [
  { id: 1, title: 'Post 1', description: 'Description 1', content: 'Content 1' },
  { id: 2, title: 'Post 2', description: 'Description 2', content: 'Content 2' },
]);

// Mockear window.scrollTo
beforeEach(() => {
  window.scrollTo = jest.fn();
});

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
  blogPosts.forEach((post) => {
    const postElement = screen.getByTestId(`blog-post-${post.id}`);
    expect(postElement).toBeInTheDocument();

    // Verifica el título
    const titleElement = screen.getByTestId(`blog-post-title-${post.id}`);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(post.title);

    // Verifica la descripción
    const descriptionElement = screen.getByTestId(`blog-post-description-${post.id}`);
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveTextContent(post.description);

    // Verifica el contenido
    const contentElement = screen.getByTestId(`blog-post-content-${post.id}`);
    expect(contentElement).toBeInTheDocument();
    expect(contentElement).toHaveTextContent(post.content);

    // Verifica la imagen si existe
    if (post.image) {
      const imageElement = screen.getByTestId(`blog-post-image-${post.id}`);
      expect(imageElement).toBeInTheDocument();
      expect(imageElement).toHaveAttribute('src', post.image);
    }
  });

  // Simula el evento de scroll para hacer visible el botón
  fireEvent.scroll(window, { target: { scrollY: 300 } });

  // Verifica que el botón de ScrollToTopButton está presente
  const scrollToTopButton = screen.getByRole('button', { name: /Ir al inicio/i });
  expect(scrollToTopButton).toBeInTheDocument();

  // Simula un clic en el botón de ScrollToTopButton
  fireEvent.click(scrollToTopButton);

  // Verifica que la función scrollTo se haya llamado una vez
  expect(window.scrollTo).toHaveBeenCalledTimes(1);
  expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
});
