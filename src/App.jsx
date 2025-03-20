import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './paginas/Home';
import Login from './paginas/Login';
import Transferir from './paginas/Transferir';
import Contactos from './paginas/Contactos';
import Pagar from './paginas/Pagar';
import Recargar from './paginas/Recargar';
import Depositar from './paginas/Depositar';




function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home/:id" element={<Home />} />
          <Route path="/Transferir/:id" element={<Transferir />} />
          <Route path="/Contactos/:id" element={<Contactos />} />
          <Route path="/Depositar/:id" element={<Depositar />} />
          <Route path="/Pagar/:id" element={<Pagar />} />
          <Route path="/Recargar/:id" element={<Recargar />} />
        </Routes>
      </BrowserRouter>

      
    </>
  )
}

export default App
