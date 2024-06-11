import NavegacionSecundaria from "../components/NavegacionSecundaria"
import { Link } from "react-router-dom"
import { useAuth } from '../context/AuthContext';



const Header = () => {

  const { isAuthenticated, logout } = useAuth();
  return (
    <>
    <NavegacionSecundaria />
    <div className="navegacion bg-gray-800 text-white">
        {/* <h1 className="text-4xl uppercase">AG</h1> */}
        <nav className="flex gap-3 text-xl items-center justify-center">
            <Link to="/" className="text-white  font-bold">Inicio</Link>
            <Link to="musica" className="text-white  font-bold">Música</Link>
            <Link to="luthier" className="text-white  font-bold">Luthier</Link>
            
            <Link to="blog" className="text-white  font-bold">Blog</Link>
          {isAuthenticated ? (
            <button onClick={logout} className="text-white font-bold">Salir</button>
          ) : (
            <Link to="login" className="text-white  font-bold">Entrar</Link>
          )}
        </nav>
    </div>
    </>
  )
}

export default Header