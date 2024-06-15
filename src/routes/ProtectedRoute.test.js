import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from '../context/AuthContext';
import ProtectedRoute from './ProtectedRoute';

const mockUseAuth = jest.fn();

jest.mock('../context/AuthContext', () => ({
  ...jest.requireActual('../context/AuthContext'),
  useAuth: () => mockUseAuth(),
}));

const MockComponent = () => <div>Protected Content</div>;

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(
    <MemoryRouter initialEntries={[route]}>
      {ui}
    </MemoryRouter>
  );
};

describe('ProtectedRoute', () => {
  test('renders children if authenticated', () => {
    mockUseAuth.mockReturnValue({ isAuthenticated: true });

    renderWithRouter(
      <AuthProvider>
        <Routes>
          <Route path="/" element={<ProtectedRoute><MockComponent /></ProtectedRoute>} />
        </Routes>
      </AuthProvider>
    );

    expect(screen.getByText(/Protected Content/i)).toBeInTheDocument();
  });

  test('redirects to login if not authenticated', () => {
    mockUseAuth.mockReturnValue({ isAuthenticated: false });

    renderWithRouter(
      <AuthProvider>
        <Routes>
          <Route path="/" element={<ProtectedRoute><MockComponent /></ProtectedRoute>} />
          <Route path="/login" element={<div>Login Page</div>} />
        </Routes>
      </AuthProvider>
    );

    expect(screen.getByText(/Login Page/i)).toBeInTheDocument();
  });
});
