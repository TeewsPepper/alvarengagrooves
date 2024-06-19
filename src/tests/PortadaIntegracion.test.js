import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Portada from '../views/Portada';
import Musica from '../views/Musica'; // Asegúrate de que este componente existe

// Mock del componente ScrollToTopButton
jest.mock('../components/ScrollToTopButton', () => () => <div>Mocked ScrollToTopButton</div>);

describe('Portada Navigation Integration Test', () => {
  beforeAll(() => {
    jest.useFakeTimers(); // Habilitar timers falsos
  });

  afterAll(() => {
    jest.useRealTimers(); // Restaurar timers reales después de las pruebas
  });

  test('renders Portada and navigates to Musica', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Portada />} />
          <Route path="/musica" element={<Musica />} /> {/* Asegúrate de que esta ruta está definida */}
        </Routes>
      </MemoryRouter>
    );

    // Verifica que el título se renderiza correctamente
    expect(screen.getByText(/AlvarengaGrooves/i)).toBeInTheDocument();

    // Encuentra el enlace con el texto "Comenzar >>"
    const button = screen.getByRole('link', { name: /Comenzar/i });

    // Simula el clic en el botón
    fireEvent.click(button);

    // Verifica que la navegación a /musica ocurre
    await waitFor(() => {
      expect(screen.getByText(/"El Ojo", mi primer disco solista./i)).toBeInTheDocument(); // Asegúrate de que 'Musica' está presente en la página Musica
    });

    // Verificar que el ScrollToTopButton se renderiza en la página de blog
    expect(screen.getByText('Mocked ScrollToTopButton')).toBeInTheDocument();
  });

  test('updates currentDate every minute', () => {
    const initialDate = new Date('2024-06-17T00:00:00');
    jest.setSystemTime(initialDate);

    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Portada />} />
        </Routes>
      </MemoryRouter>
    );

    // Verifica el mes inicial
    const initialDateElement = screen.getByTestId('date');
    expect(initialDateElement.textContent).toContain('Junio 2024');

    // Avanza el tiempo en 1 mes
    const newDate = new Date('2024-07-17T00:00:00');
    jest.setSystemTime(newDate);

    // Simula el efecto de actualización de tiempo
    act(() => {
      jest.advanceTimersByTime(60000);
    });

    // Verifica que la fecha se haya actualizado
    const updatedDateElement = screen.getByTestId('date');
    expect(updatedDateElement.textContent).toContain('Julio 2024');
  });
});
