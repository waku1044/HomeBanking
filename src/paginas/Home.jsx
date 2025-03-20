import React from "react";
import NumeroYMonto from "../componentes/NumeroYMonto";
import Acciones from "../componentes/Acciones";
import UltimoMovimiento from "../componentes/UltimoMovimiento";
import useStore from "../store";


const Home = () => {
  return (
    <>
      <div className="container-full m-3 flex flex-col gap-12 bg-">
        <NumeroYMonto />
        <Acciones />
        <UltimoMovimiento />
        
      </div>
    </>
  );
};

export default Home;
