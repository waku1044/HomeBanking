import { useState, useEffect } from "react";
import Logo from "../assets/imagenes/logo.png";
import useStore from "../store.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // Obtener la acción de verificar el PIN
  const validacion = useStore((state) => state.verificarPinYTarjeta);
  const verificar = useStore((state) => state.verificarCliente);

  // Estados locales para manejar los inputs
  const [numeroTarjeta, setNumeroTarjeta] = useState("");
  const [pin, setPin] = useState("");
  const [mensaje, setMensaje] = useState("");
  
  const navigate = useNavigate(); // Inicializar la función de navegación
  
  useEffect(() => {
    // Limpiar el mensaje después de 3 segundos
    if (mensaje) {
      const timer = setTimeout(() => setMensaje(""), 3000);
      return () => clearTimeout(timer); // Limpiar el timer cuando el componente se desmonte o el mensaje cambie
    }
  }, [mensaje]);

  const handleLogin = () => {
    if (numeroTarjeta === "" || pin === "") return setMensaje("Debe Completar los campos vacios");
   
    const esPinValido = validacion(numeroTarjeta, parseInt(pin));
   
   
   
      if (esPinValido) {
        setMensaje("Login exitoso");
        console.log(numeroTarjeta)
        let id = verificar(numeroTarjeta).Id;
        setTimeout(() => navigate(`/Home/${id}`)),400; // Navegar a /Home después de un login exitoso
      } else {
        setMensaje("Acceso denegado");
      }
    
  }

  return (
    <>
      <div className="flex justify-center align-center py-10 px-10 h-screen relative">
        <img src={Logo} className="img-fluid w-100" alt="Logo" />

        <div className="form-control flex flex-col w-[70%] md:w-[40%] absolute top-[40%] left-50 md:left-[35%]">
          <input
            type="text"
            placeholder="Numero de Tarjeta"
            value={numeroTarjeta}
            onChange={(e) => setNumeroTarjeta(e.target.value)}
            className="input w-full p-2 rounded mb-2 max-w-xs bg-gray-100"
            required
          />
          <input
            type="password"
            placeholder="Pin"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="input w-full p-2 rounded mb-2 max-w-xs bg-gray-100"
            required
          />
        </div>

        <button
          onClick={handleLogin}
          className="absolute mt-10 bg-blue-600 px-10 rounded top-[55%] left-[43%] text-white text-xl font-semibold"
        >
          Ingresar
        </button>

        {mensaje && (
          <div className="absolute top-[70%] left-[28%] bg-white text-red-500 text-3xl font-semibold">
            {mensaje}
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
