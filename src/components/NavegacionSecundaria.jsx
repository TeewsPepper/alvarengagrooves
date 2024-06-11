import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';



const NavegacionSecundaria = () => {
    return (
      <nav id="inicio"  className='bg-gray-600 text-2xl flex gap-2 justify-center lg:p-2'>
        
        <a href="https://www.facebook.com/alvaro.pacello" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://instagram.com/tucuenta" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
      </nav>
    )
  }
  
  export default NavegacionSecundaria;
  