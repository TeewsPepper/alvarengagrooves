
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavegacionSecundaria from './NavegacionSecundaria';

describe('NavegacionSecundaria component', () => {
  test('se renderiza sin errores', () => {
    render(
      <MemoryRouter>
        <NavegacionSecundaria />
      </MemoryRouter>
    );
    expect(screen.getByTestId('nav-navegacion')).toBeInTheDocument();
  });

  test('contiene los íconos de Facebook, Instagram y SoundCloud', () => {
    render(
      <MemoryRouter>
        <NavegacionSecundaria />
      </MemoryRouter>
    );
    const iconoFacebook = screen.getByTestId('icon-facebook');
    const iconoInstagram = screen.getByTestId('icon-instagram');
    const iconoSoundCloud = screen.getByTestId('icon-soundcloud');
    expect(iconoFacebook).toBeInTheDocument();
    expect(iconoInstagram).toBeInTheDocument();
    expect(iconoSoundCloud).toBeInTheDocument();
  });

  test('los enlaces apuntan a las URLs correctas', () => {
    render(
      <MemoryRouter>
        <NavegacionSecundaria />
      </MemoryRouter>
    );
    // Verifica el enlace de Facebook
    const facebookLink = screen.getByTestId('icon-facebook');
    expect(facebookLink).toBeInTheDocument();
    expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com/alvaro.pacello');

    // Verifica el enlace de Instagram
    const instagramLink = screen.getByTestId('icon-instagram');
    expect(instagramLink).toBeInTheDocument();
    expect(instagramLink).toHaveAttribute('href', 'https://instagram.com/tucuenta');

    // Verifica el enlace de SoundCloud
    const soundcloudLink = screen.getByTestId('icon-soundcloud');
    expect(soundcloudLink).toBeInTheDocument();
    expect(soundcloudLink).toHaveAttribute('href', 'https://soundcloud.com/alvaro-pacello');
  });

  test('los enlaces se abren en nueva pestaña', () => {
    render(
      <MemoryRouter>
        <NavegacionSecundaria />
      </MemoryRouter>
    );
    const enlaceFacebook = screen.getByTestId('icon-facebook');
    const enlaceInstagram = screen.getByTestId('icon-instagram');
    const enlaceSoundCloud = screen.getByTestId('icon-soundcloud');
    expect(enlaceFacebook).toHaveAttribute('target', '_blank');
    expect(enlaceFacebook).toHaveAttribute('rel', 'noopener noreferrer');
    expect(enlaceInstagram).toHaveAttribute('target', '_blank');
    expect(enlaceInstagram).toHaveAttribute('rel', 'noopener noreferrer');
    expect(enlaceSoundCloud).toHaveAttribute('target', '_blank');
    expect(enlaceSoundCloud).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('verifica que las clases CSS se apliquen correctamente', () => {
    render(
      <MemoryRouter>
        <NavegacionSecundaria />
      </MemoryRouter>
    );
    const navElement = screen.getByRole('navigation');
    expect(navElement).toHaveClass('secondary-nav');
  });
});
