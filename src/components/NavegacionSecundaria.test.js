import React from 'react';
import { render, screen } from '@testing-library/react';
import NavegacionSecundaria from './NavegacionSecundaria';

describe('NavegacionSecundaria component', () => {
  test('se renderiza sin errores', () => {
    render(<NavegacionSecundaria />);
    expect(screen.getByTestId('nav-navegacion')).toBeInTheDocument();
  });

  test('contiene los íconos de Facebook e Instagram', () => {
    render(<NavegacionSecundaria />);
    const iconoFacebook = screen.getByTestId('icon-facebook');
    const iconoInstagram = screen.getByTestId('icon-instagram');
    expect(iconoFacebook).toBeInTheDocument();
    expect(iconoInstagram).toBeInTheDocument();
  });

  test('los enlaces apuntan a las URLs correctas', () => {
    render(<NavegacionSecundaria />);
    // Verifica el enlace de Facebook
    const facebookLink = screen.getByTestId('icon-facebook');
    expect(facebookLink).toBeInTheDocument();
    expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com/alvaro.pacello');

    // Verifica el enlace de Instagram
    const instagramLink = screen.getByTestId('icon-instagram');
    expect(instagramLink).toBeInTheDocument();
    expect(instagramLink).toHaveAttribute('href', 'https://instagram.com/tucuenta');
  });

  test('los enlaces se abren en nueva pestaña', () => {
    render(<NavegacionSecundaria />);
    const enlaceFacebook = screen.getByTestId('icon-facebook');
    const enlaceInstagram = screen.getByTestId('icon-instagram');
    expect(enlaceFacebook).toHaveAttribute('target', '_blank');
    expect(enlaceFacebook).toHaveAttribute('rel', 'noopener noreferrer');
    expect(enlaceInstagram).toHaveAttribute('target', '_blank');
    expect(enlaceInstagram).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('verifica que las clases CSS se apliquen correctamente', () => {
    render(<NavegacionSecundaria />);
    const navElement = screen.getByRole('navigation');
    expect(navElement).toHaveClass('text-2xl');
    expect(navElement).toHaveClass('flex');
    expect(navElement).toHaveClass('gap-2');
    expect(navElement).toHaveClass('justify-center');
    expect(navElement).toHaveClass('lg:p-2');
  });
});
