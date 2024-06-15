import React from 'react';
import { render, screen } from '@testing-library/react';
import FirstApp from './FirstApp';

describe('FirstApp component', () => {
  test('renders without crashing', () => {
    render(<FirstApp />);
    const titleElement = screen.getByText(/First App/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders Portada view by default', () => {
    render(<FirstApp />);
    const portadaElement = screen.getByText(/Portada/i);
    expect(portadaElement).toBeInTheDocument();
  });

  test('renders Musica view when navigating to /musica path', () => {
    render(<FirstApp />, { route: '/musica' });
    const musicaElement = screen.getByText(/Musica/i);
    expect(musicaElement).toBeInTheDocument();
  });

  test('renders Luthier view when navigating to /luthier path', () => {
    render(<FirstApp />, { route: '/luthier' });
    const luthierElement = screen.getByText(/Luthier/i);
    expect(luthierElement).toBeInTheDocument();
  });

  test('redirects to Login view when accessing protected route without authentication', () => {
    render(<FirstApp />, { route: '/blog' });
    const loginElement = screen.getByText(/Login/i);
    expect(loginElement).toBeInTheDocument();
  });

  test('renders Blog view when accessing /blog path after authentication', () => {
    render(<FirstApp isAuthenticated={true} />, { route: '/blog' });
    const blogElement = screen.getByText(/Blog/i);
    expect(blogElement).toBeInTheDocument();
  });
});
