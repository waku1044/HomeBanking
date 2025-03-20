import React, { useEffect, useState } from "react";
import useStore from "../store";
import { useParams } from "react-router-dom";

const NumeroYMonto = () => {
  const [nombre, setNombre] = useState('');
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [monto, setMonto] = useState();
  
  const { id } = useParams();
  
  const cliente = useStore((state) => state.clientePorId);
  const saldo = useStore((state) => state.getSaldo(parseInt(id)));
  
  
  useEffect(() => {
    if (cliente(parseInt(id))) {
      setNombre(cliente(parseInt(id)).NOMBRE);
      setNumeroTarjeta(cliente(parseInt(id)).NumeroTarjeta);
      setMonto(saldo); // Actualizar el saldo cuando el cliente cambie
    }
  }, [cliente, id, saldo]);  // Solo se actualizará cuando 'cliente' cambie

  return (
    <div className="flex justify-between flex-wrap px-10 py-5 sm:h-28 bg-gray-200 rounded-3xl border-l-8 border-t-4 border-indigo-500 gap-5">
      <div className="flex">
        <p className="font-semibold ps-3 sm:text-xl">{numeroTarjeta}</p>
      </div>
      <div className="flex">
        <p className="invisible sm:visible font-semibold text-xl">Bienvenid@ {nombre}</p>
      </div>
      <div>
        <p className="font-semibold sm:text-xl">$ {monto}</p>
      </div>
    </div>
  );
};

export default NumeroYMonto;