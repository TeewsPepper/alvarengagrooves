

import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';

// Mock components
jest.mock('../Header', () => () => <header data-testid="header">Header Component</header>);
jest.mock('../Footer', () => () => <footer data-testid="footer">Footer Component</footer>);
jest.mock('react-router-dom', () => ({
  Outlet: () => <div data-testid="outlet">Outlet Component</div>,
}));

describe('Layout Component', () => {
  test('renders Header, Outlet and Footer', () => {
    render(<Layout />);

    // Verificar que el Header se renderiza correctamente
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
    expect(headerElement.textContent).toBe('Header Component');

    // Verificar que el Outlet se renderiza correctamente
    const outletElement = screen.getByTestId('outlet');
    expect(outletElement).toBeInTheDocument();
    expect(outletElement.textContent).toBe('Outlet Component');

    // Verificar que el Footer se renderiza correctamente
    const footerElement = screen.getByTestId('footer');
    expect(footerElement).toBeInTheDocument();
    expect(footerElement.textContent).toBe('Footer Component');
  });

 
});




  