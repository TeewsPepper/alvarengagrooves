


import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';

import { useAuth } from '../context/AuthContext';

// Mock del contexto de autenticación
jest.mock('../context/AuthContext', () => ({
  useAuth: jest.fn(),
}));

describe('Login Component - Unit Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders the login form', () => {
    useAuth.mockReturnValue({ login: jest.fn() });

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const usernameInput = screen.getByLabelText(/Usuario/i);
    const passwordInput = screen.getByLabelText(/Clave/i);
    const loginButton = screen.getByRole('button', { name: /Entrar/i });

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });




  /* test('validates username and password fields', async () => {
    useAuth.mockReturnValue({ login: jest.fn() });

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const usernameInput = screen.getByLabelText(/Usuario/i);
    const passwordInput = screen.getByLabelText(/Clave/i);
    const loginButton = screen.getByRole('button', { name: /Entrar/i });

    // Intentar enviar el formulario vacío
    fireEvent.click(loginButton);

    // Verificar que se muestran los mensajes de error adecuados
    const usernameError = await screen.findByText(/El nombre de usuario es requerido/i);
    const passwordError = await screen.findByText(/Se requiere contraseña/i);

    expect(usernameError).toBeInTheDocument();
    expect(passwordError).toBeInTheDocument();

    // Ingresar datos válidos
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    // Verificar que los campos ya no tienen errores
    expect(screen.queryByText(/El nombre de usuario es requerido/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Se requiere contraseña/i)).not.toBeInTheDocument();
  }); */




  test('handles form submission', async () => {
    const mockLogin = jest.fn();
    useAuth.mockReturnValue({ login: mockLogin });

    render(
      <MemoryRouter initialEntries={['/login']}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/blog" element={<div data-testid="blog">Blog</div>} />
        </Routes>
      </MemoryRouter>
    );

    const usernameInput = screen.getByLabelText(/Usuario/i);
    const passwordInput = screen.getByLabelText(/Clave/i);
    const loginButton = screen.getByRole('button', { name: /Entrar/i });

    // Ingresar datos válidos y enviar el formulario
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    // Envolver los cambios de estado dentro de act(...)
    
      fireEvent.click(loginButton);

      // Verificar que la función login se llama con los valores correctos
      await waitFor(() => {
        expect(mockLogin).toHaveBeenCalledWith('testuser', 'testpassword');
      });
    });
  });


