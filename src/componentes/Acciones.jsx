import { Link, useParams } from "react-router-dom";


const Acciones = () => {

  const { id } = useParams();
  console.log(id)
  return (
    <>
      <div className="flex flex-wrap justify-around p-5 md:h-28 bg-gray-200  rounded-3xl border-l-8 border-t-4 border-indigo-500 items-center ">
        <div className="flex justify-between flex-wrap gap-5 w-3/4 ">
          <div>
            <Link to={`/Transferir/${id}`}>Transferir</Link>
          </div>
          <div>
            <Link to={`/Recargar/${id}`}>Recargar</Link>
          </div>
          <div>
            <Link to={`/Pagar/${id}`}>Pagar</Link>
          </div>
          <div>
            <Link to={`/Depositar/${id}`}>Depositar</Link>
          </div>
          <div>
            <Link to={`/Contactos/${id}`}
             className="text-3xl">+</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Acciones;
