import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const NavegacionSecundaria = () => {
  return (
    <nav className='secondary-nav' id="inicio" data-testid="nav-navegacion">
      <Link to="https://www.facebook.com/alvaro.pacello" target='_blank' rel="noopener noreferrer" data-testid="icon-facebook" aria-label="Aquí puedes ver el perfil público de Alvaro en Facebook">
        <FontAwesomeIcon icon={faFacebook} />
      </Link>
      <Link to="https://instagram.com/tucuenta" target='_blank' rel="noopener noreferrer" data-testid="icon-instagram" aria-label="Aquí puedes seguir el perfil público de Alvaro en instagram">
        <FontAwesomeIcon icon={faInstagram} />
      </Link>
      <Link to="https://soundcloud.com/alvaro-pacello" target='_blank' rel="noopener noreferrer" data-testid="icon-soundcloud" aria-label="Aquí puedes seguir el perfil público de Alvaro en instagram">
        <FontAwesomeIcon icon={faSoundcloud} />
      </Link>
    </nav>
  );
};

export default NavegacionSecundaria;

