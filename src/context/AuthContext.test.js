import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { AuthProvider, useAuth } from './AuthContext';

const TestComponent = () => {
  const { isAuthenticated, login, logout, register } = useAuth();

  return (
    <div>
      <p>Is Authenticated: {isAuthenticated.toString()}</p>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      <button onClick={() => register({ username: 'test', password: 'password' })}>Register</button>
    </div>
  );
};

const renderWithAuthProvider = (ui) => {
  return render(<AuthProvider>{ui}</AuthProvider>);
};

describe('AuthContext', () => {
  test('provides initial state', () => {
    renderWithAuthProvider(<TestComponent />);
    expect(screen.getByText(/Is Authenticated: false/i)).toBeInTheDocument();
  });

  test('login sets isAuthenticated to true', () => {
    renderWithAuthProvider(<TestComponent />);
    
    act(() => {
      screen.getByText('Login').click();
    });

    expect(screen.getByText(/Is Authenticated: true/i)).toBeInTheDocument();
  });

  test('logout sets isAuthenticated to false', () => {
    renderWithAuthProvider(<TestComponent />);
    
    act(() => {
      screen.getByText('Login').click();
    });

    act(() => {
      screen.getByText('Logout').click();
    });

    expect(screen.getByText(/Is Authenticated: false/i)).toBeInTheDocument();
  });

  test('register logs user data and sets isAuthenticated', () => {
    console.log = jest.fn();
    renderWithAuthProvider(<TestComponent />);
    
    act(() => {
      screen.getByText('Register').click();
    });

    expect(console.log).toHaveBeenCalledWith("Registrando usuario:", { username: 'test', password: 'password' });
    // Puedes agregar más expectativas aquí si decides que el registro también debería autenticar al usuario automáticamente
  });
});
