import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Portada from './Portada';

describe('Portada Component', () => {
  test('renders the title correctly', () => {
    render(
      <Router>
        <Portada />
      </Router>
    );
    
    // Comprueba que el título se renderiza correctamente
    expect(screen.getByText(/AlvarengaGrooVe/i)).toBeInTheDocument();
  });

  test('renders the current month and year', () => {
    render(
      <Router>
        <Portada />
      </Router>
    );
    
    const currentDate = new Date();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear().toString();
    
    // Comprueba que el mes y el año se renderizan correctamente
    expect(screen.getByText(`${month} ${year}`)).toBeInTheDocument();
  });

  test('renders the "Comenzar" button with correct link', () => {
    render(
      <Router>
        <Portada />
      </Router>
    );
    
    const button = screen.getByRole('link', { name: /Comenzar/i });
    
    // Comprueba que el botón se renderiza correctamente y tiene el enlace correcto
    expect(button).toBeInTheDocument();
    expect(button.closest('a')).toHaveAttribute('href', '/musica');
  });
});
