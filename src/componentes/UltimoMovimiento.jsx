import React, { useState } from "react";



const UltimoMovimiento = () => {
  const [movimientos, setMovimientos] = useState([]);
  return (
    <>
      <div className="container-full flex flex-col gap-12 bg-gray-200  rounded-3xl border-l-8 border-t-4 border-indigo-500 py-5">
        <h1 className="text-2xl font-bold text-center">Últimos Movimientos</h1>
        {movimientos.length > 0 ? (
            movimioentos.map((movimiento) => (
                movimiento
            ))):<h3 className="text-center text-2xl mb-5">No hay Movimientos</h3>
         
        }
      </div>
    </>
  );
};

export default UltimoMovimiento;
