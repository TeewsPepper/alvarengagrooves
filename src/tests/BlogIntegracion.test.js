import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Blog from '../views/Blog';
import blogPosts from '../data/blogData';

// Ajusta la ruta del mock
jest.mock('../components/ScrollToTopButton', () => () => <div>Mocked ScrollToTopButton</div>);

test('debería renderizar el componente Blog con los datos del blog y el botón ScrollToTop', () => {
  // Renderiza el componente Blog envuelto en Router
  render(
    <Router>
      <Blog />
    </Router>
  );

  // Verifica que el título del blog esté presente
  expect(screen.getByText('Blog')).toBeInTheDocument();

  // Verifica que cada post del blog se renderice correctamente
  blogPosts.forEach((post) => {
    expect(screen.getByText(post.title)).toBeInTheDocument();
    expect(screen.getByText(post.description)).toBeInTheDocument();
    if (post.image) {
      const image = screen.getByAltText(post.title);
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', post.image);
    }
    expect(screen.getByText(post.content)).toBeInTheDocument();
  });

  // Verifica que el botón ScrollToTopButton esté presente
  expect(screen.getByText('Mocked ScrollToTopButton')).toBeInTheDocument();
});


