import React from "react";
import useStore from "../store"; // Importa tu store
import { useParams } from "react-router-dom";

const Contactos = () => {
  // Usamos el hook de Zustand para obtener los usuarios
  const usuarios = useStore((state) => state.usuarios);

  const { id } = useParams();

  return (
    <div className="flex flex-wrap justify-around p-5  bg-gray-200  rounded-3xl border-l-8 border-t-4 border-indigo-500 items-center ">
      <h2 className="text-2xl font-bold mb-4 text-center w-full">
        Lista de Usuarios
      </h2>
      <ul className="w-3/4">
        {usuarios.map((usuario) => (
          <div className="flex  w-full bg-gray-200  rounded-3xl border-l-8 border-t-4 border-green-500 border-r-8 border-b-4  p-5 mb-5">
            <li key={usuario.Id} className="gap-5">
              <h3 className="font-bold">{usuario.NOMBRE}</h3>
              <p>Número de tarjeta: <span className="font-bold">{usuario.NumeroTarjeta}</span></p>
              <p>Saldo: {usuario.SALDO} *</p>
              <p>Pin: {usuario.PIN} *</p>
            </li>
          </div>
        ))}
      </ul>
      <p>Todos los datos que tengan * no deberian compartise , solo se muestra para comprobar que la transferencia se realizo y no cambiar de usuario permanentemente, aunque tambien lo puede hacer con el numero de tarjeta y el pin.</p>
    </div>
  );
};

export default Contactos;
