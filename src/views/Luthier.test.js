/* import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Luthier from './Luthier';
import instruments from '../data/luthierData';

// Mock the ScrollToTopButton component
jest.mock('../components/ScrollToTopButton', () => () => <div>ScrollToTopButton</div>);

// Mock react-modal
jest.mock('react-modal', () => {
  const ReactModal = ({ isOpen, onRequestClose, contentLabel, children }) => {
    return isOpen ? (
      <div aria-label={contentLabel}>
        {children}
        <button onClick={onRequestClose}>X</button>
      </div>
    ) : null;
  };
  ReactModal.setAppElement = () => {};
  return ReactModal;
});

describe('Luthier Component', () => {
  test('renders the title correctly', () => {
    render(<Luthier />);
    const titleElement = screen.getByText(/El Taller/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders all instruments', () => {
    render(<Luthier />);
    instruments.forEach(instrument => {
      const instrumentTitle = screen.getByText(instrument.title);
      const instrumentImage = screen.getByAltText(instrument.title);
      expect(instrumentTitle).toBeInTheDocument();
      expect(instrumentImage).toBeInTheDocument();
    });
  });

  test('opens and closes the modal', () => {
    render(<Luthier />);
    const firstInstrumentImage = screen.getByAltText(instruments[0].title);

    // Open modal
    fireEvent.click(firstInstrumentImage);
    const modalImage = screen.getByAltText('Selected');
    expect(modalImage).toBeInTheDocument();

    // Close modal
    const closeButton = screen.getByText('X');
    fireEvent.click(closeButton);
    expect(modalImage).not.toBeInTheDocument();
  });

  test('renders the ScrollToTopButton', () => {
    render(<Luthier />);
    const scrollToTopButton = screen.getByText(/ScrollToTopButton/i);
    expect(scrollToTopButton).toBeInTheDocument();
  });
}); */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Luthier from './Luthier';
import instruments from '../data/luthierData';

// Mock the ScrollToTopButton component
jest.mock('../components/ScrollToTopButton', () => () => <div>ScrollToTopButton</div>);

// Mock react-modal
jest.mock('react-modal', () => {
  const ReactModal = ({ isOpen, onRequestClose, contentLabel, children }) => {
    return isOpen ? (
      <div aria-label={contentLabel}>
        {children}
        <button aria-label="Close modal" onClick={onRequestClose}>X</button>
      </div>
    ) : null;
  };
  ReactModal.setAppElement = () => {};
  return ReactModal;
});

describe('Luthier Component', () => {
  test('renders the title correctly', () => {
    render(<Luthier />);
    const titleElement = screen.getByText(/El Taller/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders all instruments', () => {
    render(<Luthier />);
    instruments.forEach(instrument => {
      const instrumentTitle = screen.getByText(instrument.title);
      const instrumentImage = screen.getByAltText(instrument.title);
      expect(instrumentTitle).toBeInTheDocument();
      expect(instrumentImage).toBeInTheDocument();
    });
  });

  test('opens and closes the modal', () => {
    render(<Luthier />);
    const firstInstrumentImage = screen.getByAltText(instruments[0].title);

    // Open modal
    fireEvent.click(firstInstrumentImage);
    const modalImage = screen.getByAltText('Selected');
    expect(modalImage).toBeInTheDocument();

    // Close modal
    const closeButton = screen.getByLabelText('Close modal');
    fireEvent.click(closeButton);
    expect(modalImage).not.toBeInTheDocument();
  });

  test('renders the ScrollToTopButton', () => {
    render(<Luthier />);
    const scrollToTopButton = screen.getByText(/ScrollToTopButton/i);
    expect(scrollToTopButton).toBeInTheDocument();
  });
});

