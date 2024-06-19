import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Login from '../views/Login';
import Blog from '../views/Blog';
import { useAuth } from '../context/AuthContext';

// Mock del contexto de autenticación
jest.mock('../context/AuthContext', () => ({
  useAuth: jest.fn(),
}));

// Mock del componente ScrollToTopButton
jest.mock('../components/ScrollToTopButton', () => () => <div>Mocked ScrollToTopButton</div>);

describe('Login Integration Test', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('handles form submission and navigates to blog successfully', async () => {
    const mockLogin = jest.fn();
    useAuth.mockReturnValue({ login: mockLogin });

    render(
      <MemoryRouter initialEntries={['/login']}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/blog" element={<Blog />} />
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

    // Verificar que la navegación a /blog ocurre
    await waitFor(() => {
      expect(screen.getByTestId('blog')).toBeInTheDocument();
    });

    // Verificar que el ScrollToTopButton se renderiza en la página de blog
    expect(screen.getByText('Mocked ScrollToTopButton')).toBeInTheDocument();
  });

  test('handles form submission with invalid inputs', async () => {
    const mockLogin = jest.fn();
    useAuth.mockReturnValue({ login: mockLogin });

    render(
      <MemoryRouter initialEntries={['/login']}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </MemoryRouter>
    );

    const loginButton = screen.getByRole('button', { name: /Entrar/i });

    // Intentar enviar el formulario sin ingresar datos
    fireEvent.click(loginButton);

    // Esperar y verificar que los mensajes de error se muestren
    await waitFor(() => {
      expect(screen.getByText(/El nombre de usuario es requerido/i)).toBeInTheDocument();
      expect(screen.getByText(/Se requiere contraseña/i)).toBeInTheDocument();
    });
  });

  test('shows validation errors for short username and password', async () => {
    const mockLogin = jest.fn();
    useAuth.mockReturnValue({ login: mockLogin });

    render(
      <MemoryRouter initialEntries={['/login']}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </MemoryRouter>
    );

    const usernameInput = screen.getByLabelText(/Usuario/i);
    const passwordInput = screen.getByLabelText(/Clave/i);
    const loginButton = screen.getByRole('button', { name: /Entrar/i });

    // Ingresar nombre de usuario y contraseña cortos y enviar el formulario
    fireEvent.change(usernameInput, { target: { value: 'abc' } });
    fireEvent.change(passwordInput, { target: { value: '12345' } });

    fireEvent.click(loginButton);

    // Esperar y verificar que se muestran los mensajes de error correspondientes
    await waitFor(() => {
      expect(screen.getByText(/El nombre debe tener al menos 4 caracteres/i)).toBeInTheDocument();
      expect(screen.getByText(/La clave debe tener al menos 6 carácteres/i)).toBeInTheDocument();
    });
  });

  test('handles login failure and displays error message', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const mockLogin = jest.fn().mockRejectedValue(new Error('Invalid credentials'));
    useAuth.mockReturnValue({ login: mockLogin });

    render(
      <MemoryRouter initialEntries={['/login']}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/blog" element={<Blog />} />
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

    // Verificar que se muestra un mensaje de error en la consola
    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalledWith('Error al iniciar sesión:', expect.any(Error));
    });

    // Restaurar la implementación original de console.error
    consoleErrorSpy.mockRestore();
  });
});
