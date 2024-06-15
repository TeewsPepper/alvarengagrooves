import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const NavegacionSecundaria = () => {
  return (
    <nav className=' text-2xl flex gap-2 justify-center lg:p-2' id="inicio" data-testid="nav-navegacion">
      <a href="https://www.facebook.com/alvaro.pacello" target='_blank' rel="noopener noreferrer" data-testid="icon-facebook">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://instagram.com/tucuenta" target='_blank' rel="noopener noreferrer" data-testid="icon-instagram">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </nav>
  );
};

export default NavegacionSecundaria;

  