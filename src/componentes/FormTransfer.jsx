import React from "react";
import { useParams } from "react-router-dom";
import NumeroYMonto from "./NumeroYMonto";
import useStore from "../store";
import { useState } from "react";



const FormTransfer = () => {

  const [monto, setMonto] = useState();
  const [numerodetarjeta, setNumerodetarjeta] = useState('');
  const transferir = useStore((state) => state.transferencia);
  const verificarCliente = useStore((state) => state.verificarCliente);
  const clientePorId = useStore((state) => state.clientePorId);
  const { id } = useParams();
    
  const usuariosActualizados = useStore.getState().usuarios;
  var aTransferir = {
    numerodetarjeta,
    monto
  }
  

const handleSubmit = (e) => {
  e.preventDefault();
  if (numerodetarjeta != "" && monto != "") {
    let numeroDeTarjetaOrigen = clientePorId(parseInt(id)).NumeroTarjeta;
    console.log('numerotarjeOrigen', numeroDeTarjetaOrigen, 'tarjetaDestino', numerodetarjeta, 'monto', monto);

    transferir(numeroDeTarjetaOrigen, numerodetarjeta, parseInt(monto));

    // Verifica el estado de usuarios después de la transferencia
    // const usuariosActualizados = useStore.getState().usuarios;
    console.log("Usuarios después de la transferencia:", usuariosActualizados);
    setNumerodetarjeta('');
    setMonto('');

    alert("Transferencia Exitosa");
  } else {
    alert("Debe Completar los campos vacios");
  }
};


  return (
    <div className="container-full m-3 md:w-3/4 md:mx-auto mt-10 flex flex-col gap-12">
        <NumeroYMonto />
      <form onSubmit={handleSubmit}>
        <div className="container-full flex flex-col gap-5 bg-gray-200  rounded-3xl border-l-8 border-t-4 border-indigo-500 py-5">
          <h1 className="text-2xl font-bold text-center">Transferir a</h1>
          <div className="flex flex-col gap-2  items-center">
            <label htmlFor="numerodetarjeta">Numero de Tarjeta:</label>
            <input 
            type="text" 
            className="px-4 py-2 border border-gray-300 rounded" name="numerodetarjeta" 
            placeholder="xxxx-xxxx-xxxx-xxxx"
            value={numerodetarjeta}
            onChange={(e) => setNumerodetarjeta(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2  items-center">
            <label htmlFor="monto">Monto:</label>
            <input 
            type="number" 
            className="px-4 py-2 border border-gray-300 rounded" 
            name="monto" 
            placeholder="1000" 
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2 items-center mx-auto"> Transferir</button>
            
        </div>
      </form>
    </div>
  );
};

export default FormTransfer;
