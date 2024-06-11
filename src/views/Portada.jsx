import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Portada = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Cada 1 minuto
    return () => clearInterval(interval);
  }, []);

  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();
  return (
    <div className="portada-container">
      <div className="titulo">
        <Link to="/">
        <h1 className="font-bold opacity-50">
          <span className="text-white">Al</span>
          <span className="text-white">
            va<span className="text-white">ren</span>
          </span>
          <span className="text-white">ga</span>
          <span className="text-white">Groo</span>
          <span className="text-white">Ve</span>
        </h1>
        </Link>
      </div>
  
      {/*   <img
          className="m-auto"
          src="src/assets/img/layout-image.jpg"
          alt="imagen"
        /> */}
      
      <div className="parrafo text-gray-100 font-bold ">
        <p className="texto-parrafo">WebTour-</p>

        <p>
          {month} {year}
        </p>
      </div>
      <button className="text-white boton animate-pulse"><Link className="boton" to="musica">Comenzar &gt;&gt;</Link></button>
    </div>
  );
};

export default Portada;
