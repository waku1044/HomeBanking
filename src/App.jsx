import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './paginas/Home';
import Login from './paginas/Login';
import Transferir from './paginas/Transferir';
import Contactos from './paginas/Contactos';




function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home/:id" element={<Home />} />
          <Route path="/Transferir/:id" element={<Transferir />} />
          <Route path="/Contactos/:id" element={<Contactos />} />
        </Routes>
      </BrowserRouter>

      
    </>
  )
}

export default App
