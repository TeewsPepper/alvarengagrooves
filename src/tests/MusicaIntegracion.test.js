// src/tests/MusicaIntegracion.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Musica from '../views/Musica';
import Luthier from '../views/Luthier';
import audioFiles from '../data/musicData';

// Mock del componente ScrollToTopButton
jest.mock('../components/ScrollToTopButton', () => () => <div>Mocked ScrollToTopButton</div>);

describe('Musica Integration Test', () => {
  test('renders Musica and navigates to Luthier', async () => {
    render(
      <MemoryRouter initialEntries={['/musica']}>
        <Routes>
          <Route path="/musica" element={<Musica />} />
          <Route path="/luthier" element={<Luthier />} />
        </Routes>
      </MemoryRouter>
    );

    // Verifica que el título se renderiza correctamente
    expect(screen.getByText(/"El Ojo", mi primer disco solista./i)).toBeInTheDocument();

    // Verifica que los archivos de audio se renderizan correctamente
    audioFiles.forEach(audio => {
      expect(screen.getByText(audio.title)).toBeInTheDocument();
      expect(screen.getByAltText(audio.title)).toBeInTheDocument();
    });

    // Encuentra el enlace con el texto "Continuar >>"
    const button = screen.getByRole('link', { name: /Continuar/i });

    // Simula el clic en el botón
    fireEvent.click(button);

    // Verifica que la navegación a /luthier ocurre
    await waitFor(() => {
      expect(screen.getByText(/El Taller/i)).toBeInTheDocument();
    });

    // Verificar que el ScrollToTopButton se renderiza en la página de música
    expect(screen.getByText('Mocked ScrollToTopButton')).toBeInTheDocument();
  });

  test('opens and closes modal in Luthier', async () => {
    render(
      <MemoryRouter initialEntries={['/luthier']}>
        <Routes>
          <Route path="/luthier" element={<Luthier />} />
        </Routes>
      </MemoryRouter>
    );

    // Verifica que el título de Luthier se renderiza correctamente
    expect(screen.getByText(/El Taller/i)).toBeInTheDocument();

    // Encuentra una imagen para abrir el modal
    const firstInstrumentImage = screen.getAllByRole('img')[0];
    fireEvent.click(firstInstrumentImage);

    // Verifica que el modal se abre
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    // Encuentra y hace clic en el botón de cierre
    const closeButton = screen.getByRole('button', { name: /X/i });
    fireEvent.click(closeButton);

    // Verifica que el modal se cierra
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });
});


