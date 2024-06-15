/* import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Register from './Register';
import { AuthProvider } from '../context/AuthContext';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: MemoryRouter });
};

test('renders Register component', () => {
  renderWithRouter(
    <AuthProvider>
      <Register />
    </AuthProvider>
  );
  expect(screen.getByText(/Registro/i)).toBeInTheDocument();
}); */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Register from './Register';
import { AuthProvider, useAuth } from '../context/AuthContext';

const mockRegister = jest.fn();

jest.mock('../context/AuthContext', () => ({
  ...jest.requireActual('../context/AuthContext'),
  useAuth: () => ({
    register: mockRegister,
  }),
}));

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(
    <MemoryRouter initialEntries={[route]}>
      {ui}
    </MemoryRouter>
  );
};

test('renders Register component', () => {
  renderWithRouter(
    <AuthProvider>
      <Register />
    </AuthProvider>
  );

  expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Nombre/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Clave/i)).toBeInTheDocument();
  expect(screen.getByText(/Enviar/i)).toBeInTheDocument();
});

test('shows validation messages on invalid input', async () => {
  renderWithRouter(
    <AuthProvider>
      <Register />
    </AuthProvider>
  );

  fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'invalid-email' } });
  fireEvent.change(screen.getByLabelText(/Nombre/i), { target: { value: 'ab' } });
  fireEvent.change(screen.getByLabelText(/Clave/i), { target: { value: '123' } });
  fireEvent.blur(screen.getByLabelText(/Email/i));
  fireEvent.blur(screen.getByLabelText(/Nombre/i));
  fireEvent.blur(screen.getByLabelText(/Clave/i));

  expect(await screen.findByText(/Email no es válido/i)).toBeInTheDocument();
  expect(await screen.findByText(/El nombre de usuario debe tener al menos 3 caracteres/i)).toBeInTheDocument();
  expect(await screen.findByText(/La contraseña debe tener al menos 6 caracteres/i)).toBeInTheDocument();
});

test('calls register function on form submission', async () => {
  renderWithRouter(
    <AuthProvider>
      <Register />
    </AuthProvider>
  );

  fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByLabelText(/Nombre/i), { target: { value: 'username' } });
  fireEvent.change(screen.getByLabelText(/Clave/i), { target: { value: 'password123' } });
  fireEvent.click(screen.getByText(/Enviar/i));

  await waitFor(() => {
    expect(mockRegister).toHaveBeenCalledWith({
      email: 'test@example.com',
      username: 'username',
      password: 'password123',
    });
  });
});

test('redirects to login page after successful registration', async () => {
  renderWithRouter(
    <AuthProvider>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<div>Login Page</div>} />
      </Routes>
    </AuthProvider>,
    { route: '/register' }
  );

  fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByLabelText(/Nombre/i), { target: { value: 'username' } });
  fireEvent.change(screen.getByLabelText(/Clave/i), { target: { value: 'password123' } });
  fireEvent.click(screen.getByText(/Enviar/i));

  await waitFor(() => {
    expect(screen.getByText(/Login Page/i)).toBeInTheDocument();
  });
});

