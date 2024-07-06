import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Portada = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Cada 1 minuto
    return () => clearInterval(interval);
  }, []);

  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();
  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');
  const seconds = currentDate.getSeconds().toString().padStart(2, '0');
  return (
    <div className="portada-container">
      <div>
        
        <h1>
          AlvarengaGrooves
        </h1>
        
      </div>
      
      <div className="parrafo">
        <p>WebTour-</p>

        <p data-testid="date">
          {month} {year} - {hours}:{minutes}:{seconds}
        </p>
      </div>
      <button className="boton animate-pulse"><Link className='boton'  to="/musica">Comenzar&gt;&gt;</Link></button>
    </div>
  );
};

export default Portada;
