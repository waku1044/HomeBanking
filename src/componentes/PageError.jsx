import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";   


const PageError = () => {

const {id} = useParams();

    return (

        <div className="flex flex-col items-center justify-center h-screen"> 
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">404</h1>
                <p className="text-2xl font-semibold mb-2">Página no encontrada</p>
                <p className="text-lg">Solo se puede hacer transferencias y vista de contactos en el boton +.</p>
            </div>
               <Link to={`/Home/${id}`} className="text-xl font-semibold px-4 py-2 border-2 border-blue-500 rounded-full text-white mt-10 hover:bg-white hover:text-blue-500 mt-4 bg-blue-500 ">Volver</Link>
        </div>
    )
}

export default PageError;