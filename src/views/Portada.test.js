/* 
import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Portada from './Portada';

describe('Portada Component', () => {
  beforeEach(() => {
    jest.useFakeTimers(); // Usar jest.useFakeTimers() para controlar el tiempo
  });

  afterEach(() => {
    jest.useRealTimers(); // Restaurar el temporizador real después de cada prueba
  });

  test('renders the title correctly', () => {
    render(
      <Router>
        <Portada />
      </Router>
    );

    // Comprobar que el título se renderiza correctamente
    const titleElement = screen.getByRole('heading', { level: 1 }); // Buscar un elemento <h1> que sea un encabezado de nivel 1
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent('AlvarengaGrooves');

    // Comprobar que el título está dentro de un enlace con el atributo 'to="/"'
    const linkElement = screen.getByRole('link', { name: /AlvarengaGrooves/i });
    expect(linkElement).toHaveAttribute('href', '/');
  });

  test('renders the current month and year', () => {
    render(
      <Router>
        <Portada />
      </Router>
    );

    // Avanzar el tiempo en 1 minuto (60000 ms) para activar el efecto de useEffect
    act(() => {
      jest.advanceTimersByTime(60000); // Avanzar el temporizador en 1 minuto
    });

    const currentDate = new Date();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear().toString();

    // Comprobar que el mes y el año se renderizan correctamente
    expect(screen.getByText(`${month} ${year}`)).toBeInTheDocument();
  });

  test('renders the "Comenzar" button with correct link', () => {
    render(
      <Router>
        <Portada />
      </Router>
    );

    const button = screen.getByRole('link', { name: /Comenzar/i });

    // Comprobar que el botón se renderiza correctamente y tiene el enlace correcto
    expect(button).toBeInTheDocument();
    expect(button.closest('a')).toHaveAttribute('href', '/musica');
  });
}); */

import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Portada from './Portada';

describe('Portada Component', () => {
  beforeEach(() => {
    jest.useFakeTimers(); // Usar jest.useFakeTimers() para controlar el tiempo
  });

  afterEach(() => {
    jest.useRealTimers(); // Restaurar el temporizador real después de cada prueba
  });

  test('renders the title correctly', () => {
    render(
      <Router>
        <Portada />
      </Router>
    );

    // Comprobar que el título se renderiza correctamente
    const titleElement = screen.getByRole('heading', { level: 1 }); // Buscar un elemento <h1> que sea un encabezado de nivel 1
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent('AlvarengaGrooves');

    // Comprobar que el título está dentro de un enlace con el atributo 'to="/"'
    const linkElement = screen.getByRole('link', { name: /AlvarengaGrooves/i });
    expect(linkElement).toHaveAttribute('href', '/');
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

    // Comprobar que el mes se renderiza correctamente
    expect(screen.getByText(new RegExp(month, 'i'))).toBeInTheDocument();

    // Comprobar que el año se renderiza correctamente
    expect(screen.getByText(new RegExp(year, 'i'))).toBeInTheDocument();

    // Avanzar el tiempo en 1 minuto (60000 ms) para activar el efecto de useEffect
    act(() => {
      jest.advanceTimersByTime(60000); // Avanzar el temporizador en 1 minuto
    });

    const updatedDate = new Date();
    const updatedMonth = updatedDate.toLocaleString('default', { month: 'long' });
    const updatedYear = updatedDate.getFullYear().toString();

    // Comprobar que el mes se ha actualizado correctamente
    expect(screen.getByText(new RegExp(updatedMonth, 'i'))).toBeInTheDocument();

    // Comprobar que el año se ha actualizado correctamente
    expect(screen.getByText(new RegExp(updatedYear, 'i'))).toBeInTheDocument();
  });

  test('renders the "Comenzar" button with correct link', () => {
    render(
      <Router>
        <Portada />
      </Router>
    );

    const button = screen.getByRole('link', { name: /Comenzar/i });

    // Comprobar que el botón se renderiza correctamente y tiene el enlace correcto
    expect(button).toBeInTheDocument();
    expect(button.closest('a')).toHaveAttribute('href', '/musica');
  });
});



