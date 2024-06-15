import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Musica from './Musica';
import audioFiles from '../data/musicData';

// Mock the ScrollToTopButton component
jest.mock('../components/ScrollToTopButton', () => () => <div>ScrollToTopButton</div>);

describe('Musica Component', () => {
  test('renders the title correctly', () => {
    render(
      <Router>
        <Musica />
      </Router>
    );
    const titleElement = screen.getByText(/"El Ojo", mi primer disco solista./i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders all audio files', () => {
    render(
      <Router>
        <Musica />
      </Router>
    );
    // Verify that all audio files are rendered
    audioFiles.forEach(audio => {
      const audioTitle = screen.getByText(audio.title);
      const audioImage = screen.getByAltText(audio.title);
      expect(audioTitle).toBeInTheDocument();
      expect(audioImage).toBeInTheDocument();
    });
  });

  test('renders the link button', () => {
    render(
      <Router>
        <Musica />
      </Router>
    );
    const linkButton = screen.getByRole('link', { name: /Continuar/i });
    expect(linkButton).toBeInTheDocument();
    expect(linkButton).toHaveAttribute('href', '/luthier');
  });

  test('renders the ScrollToTopButton', () => {
    render(
      <Router>
        <Musica />
      </Router>
    );
    const scrollToTopButton = screen.getByText(/ScrollToTopButton/i);
    expect(scrollToTopButton).toBeInTheDocument();
  });
});
