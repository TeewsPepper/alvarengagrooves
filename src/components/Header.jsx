import React from 'react';
import NavegacionSecundaria from "../components/NavegacionSecundaria"
import { Link } from "react-router-dom"
import { useAuth } from '../context/AuthContext';



const Header = () => {

  const { isAuthenticated, logout } = useAuth();
  return (
    <>
    <NavegacionSecundaria />
    <div>
        <nav className="navegacion" data-testid="main-navigation">
            <Link to="/" aria-label="Esta es la página inicial">Inicio</Link>
            <Link to="musica" aria-label="Aquí puedes escuchar los discos de Alvaro">Música</Link>
            <Link to="luthier" aria-label="Esta es la sección de construcción de instrumentos">Luthier</Link>
            
            <Link to="blog" aria-label="El Blog de Alvaro">Blog</Link>
          {isAuthenticated ? (
            <button onClick={logout} className='enlace' >Salir</button>
          ) : (
            <Link to="login" data-testid="login-link" aria-label="En este enlace puedes iniciar tu sesión">Entrar</Link>
          )}
        </nav>
    </div>
    </>
  )
}

export default Header