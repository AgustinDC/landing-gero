import React from "react";
import { useState } from "react";

function Navbar() {
  const [mostrarMenu, setMostrarMenu] = useState(true);
  const handleClick = () => {
    setMostrarMenu(!mostrarMenu);
    console.log(mostrarMenu);
  };

  return (
    <div className="bg-blue-800 fixed top-0 left-0 right-0 p-5 flex flex-col justify-start md:flex-row md:justify-between md:items-center">
      
      <div className="text-white text-3xl font-bold mb-1 md:mb-0"> AS <span className="font-light"> Consulting </span> </div>
      
      <div onClick={handleClick} className="md:hidden absolute right-4 top-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          width="18"
          viewBox="0 0 448 512"
        >
          <path
            fill="#fcfcfc"
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
          />
        </svg>
      </div>
      {mostrarMenu && (
        <div className="text-white flex flex-col items-center mt-2 md:flex-row gap-3">
          <a className="hover:border border-solid hover:border-white rounded" href="">Acerca de</a>
          <a className="hover:border border-solid hover:border-white rounded" href="">Home</a>
          <a className="hover:border border-solid hover:border-white rounded" href="">Servicios</a>
          <a className="hover:border border-solid hover:border-white rounded" href="">Preguntas Frecuentes</a>
          <a className="hover:border border-solid hover:border-white rounded" href="">Contacto</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;












