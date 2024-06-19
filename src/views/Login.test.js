// src/components/Login.test.js
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

    fireEvent.click(loginButton);

    // Verificar que la función login se llama con los valores correctos
    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith('testuser', 'testpassword');
    });
  });

  test('shows error message on login failure', async () => {
    const mockLogin = jest.fn().mockRejectedValue(new Error('Invalid credentials'));
    useAuth.mockReturnValue({ login: mockLogin });

    console.error = jest.fn(); // Mockear console.error para verificar que se llama

    render(
      <MemoryRouter initialEntries={['/login']}>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </MemoryRouter>
    );

    const usernameInput = screen.getByLabelText(/Usuario/i);
    const passwordInput = screen.getByLabelText(/Clave/i);
    const loginButton = screen.getByRole('button', { name: /Entrar/i });

    // Ingresar datos válidos y enviar el formulario
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    fireEvent.click(loginButton);

    // Verificar que se maneja el error y se llama a console.error
    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith('Error al iniciar sesión:', expect.any(Error));
    });
  });

  test('shows validation errors for empty fields', async () => {
    useAuth.mockReturnValue({ login: jest.fn() });

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const loginButton = screen.getByRole('button', { name: /Entrar/i });

    fireEvent.click(loginButton);

    // Verificar que se muestran los mensajes de error de validación
    expect(await screen.findByText('El nombre de usuario es requerido')).toBeInTheDocument();
    expect(await screen.findByText('Se requiere contraseña')).toBeInTheDocument();
  });

  test('shows validation error for short username', async () => {
    useAuth.mockReturnValue({ login: jest.fn() });

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const usernameInput = screen.getByLabelText(/Usuario/i);
    const loginButton = screen.getByRole('button', { name: /Entrar/i });

    fireEvent.change(usernameInput, { target: { value: 'abc' } });
    fireEvent.click(loginButton);

    // Verificar que se muestra el mensaje de error de validación para el nombre de usuario corto
    expect(await screen.findByText('El nombre debe tener al menos 4 caracteres')).toBeInTheDocument();
  });

  test('shows validation error for short password', async () => {
    useAuth.mockReturnValue({ login: jest.fn() });

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const passwordInput = screen.getByLabelText(/Clave/i);
    const loginButton = screen.getByRole('button', { name: /Entrar/i });

    fireEvent.change(passwordInput, { target: { value: '12345' } });
    fireEvent.click(loginButton);

    // Verificar que se muestra el mensaje de error de validación para la clave corta
    expect(await screen.findByText('La clave debe tener al menos 6 carácteres')).toBeInTheDocument();
  });
});
