// src/tests/LuthierIntegracion.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Luthier from '../views/Luthier';
import instruments from '../data/luthierData';

// Mock del componente ScrollToTopButton
jest.mock('../components/ScrollToTopButton', () => () => <div>Mocked ScrollToTopButton</div>);

describe('Luthier Integration Test', () => {
  test('renders Luthier and opens/closes modal', async () => {
    render(
      <MemoryRouter initialEntries={['/luthier']}>
        <Routes>
          <Route path="/luthier" element={<Luthier />} />
        </Routes>
      </MemoryRouter>
    );

    // Verifica que el título se renderiza correctamente
    expect(screen.getByText(/El Taller/i)).toBeInTheDocument();

    // Verifica que los instrumentos se renderizan correctamente
    instruments.forEach(instrument => {
      expect(screen.getByText(instrument.title)).toBeInTheDocument();
      expect(screen.getByAltText(instrument.title)).toBeInTheDocument();
    });

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

    // Verificar que el ScrollToTopButton se renderiza en la página de luthier
    expect(screen.getByText('Mocked ScrollToTopButton')).toBeInTheDocument();
  });
});

