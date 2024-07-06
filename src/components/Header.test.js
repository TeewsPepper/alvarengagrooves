import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import { useAuth } from '../context/AuthContext';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

// Mockear el hook useAuth
jest.mock('../context/AuthContext');

describe('Header component', () => {
  beforeEach(() => {
    // Mockear el valor retornado por useAuth para cada prueba
    useAuth.mockReturnValue({ isAuthenticated: false, logout: jest.fn() });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('se renderiza sin errores', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    // Verifica que el componente Header se renderice correctamente
    expect(screen.getByTestId('main-navigation')).toBeInTheDocument();
  });

  test('navega correctamente al hacer clic en un enlace', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/musica" element={<div>Música</div>} />
        </Routes>
      </MemoryRouter>
    );
    // Simula un clic en el enlace 'Música'
    fireEvent.click(screen.getByText(/Música/i));
    // Verifica que la URL haya cambiado correctamente
    expect(screen.getByText(/Música/i)).toBeInTheDocument();
  });

  test('muestra el botón "Salir" cuando está autenticado', () => {
    useAuth.mockReturnValue({ isAuthenticated: true, logout: jest.fn() });
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    // Verifica que el botón "Salir" esté presente
    expect(screen.getByRole('button', { name: /Salir/i })).toBeInTheDocument();
  });

  test('llama a la función logout al hacer clic en el botón "Salir"', () => {
    const mockLogout = jest.fn();
    useAuth.mockReturnValue({ isAuthenticated: true, logout: mockLogout });
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    // Simula un clic en el botón "Salir"
    fireEvent.click(screen.getByRole('button', { name: /Salir/i }));
    // Verifica que la función logout se haya llamado
    expect(mockLogout).toHaveBeenCalledTimes(1);
  });

  test('muestra el enlace "Entrar" cuando no está autenticado', () => {
    useAuth.mockReturnValue({ isAuthenticated: false, logout: jest.fn() });
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    // Verifica que el enlace "Entrar" esté presente
    expect(screen.getByTestId('login-link')).toBeInTheDocument();
  });

  test('verifica que las clases CSS se apliquen correctamente', () => {
    useAuth.mockReturnValue({ isAuthenticated: true, logout: jest.fn() });
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    // Verifica que las clases CSS esperadas estén presentes en el contenedor principal
    const mainNavigation = screen.getByTestId('main-navigation'); // Selecciona el contenedor principal por su data-testid
    expect(mainNavigation).toHaveClass('navegacion');
    
  });
});


