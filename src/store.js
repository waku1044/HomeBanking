// store.js
import  { create } from "zustand";

const useStore = create((set, get) => ({
   usuarios : [
    {
      Id: 1,
      NumeroTarjeta: "4546-8574-1856-5565",
      PIN: 4345,
      NOMBRE: "WALTER",
      SALDO: 40555,
    },
    {
      Id: 2,
      NumeroTarjeta: "5595-3458-9989-7125",
      PIN: 1595,
      NOMBRE: "FEDRA",
      SALDO: 3566,
    },
    {
      Id: 3,
      NumeroTarjeta: "4858-6696-5887-1578",
      PIN: 1234,
      NOMBRE: "ZAMIRA",
      SALDO: 23,
    },
    {
      Id: 4,
      NumeroTarjeta: "5854-6656-2587-1547",
      PIN: 4345,
      NOMBRE: "GUSTAVO",
      SALDO: 300,
    },
    {
      Id: 5,
      NumeroTarjeta: "4546-9896-2357-1478",
      PIN: 1023,
      NOMBRE: "MARCELA",
      SALDO: 35621,
    }],
  getSaldo: (id) =>{
    // set(state => {
      // let usuario = state.usuarios.find(u => u.Id === id)
    // })
    let usuario = get().usuarios.find((u) => u.Id === id);

    return usuario ? usuario.SALDO : 0;
  },
  

  transferencia: (numeroTarjetaOrigen, numeroTarjetaDestino, monto) => {
    set((state) => {
      const usuarios = state.usuarios.map((u) => {
        if (u.NumeroTarjeta === numeroTarjetaOrigen && monto <= u.SALDO) {
          return { ...u, SALDO: u.SALDO - monto }; // Devolvemos una copia con el saldo actualizado
        }
        if (u.NumeroTarjeta === numeroTarjetaDestino) {
          return { ...u, SALDO: u.SALDO + monto }; // Devolvemos una copia con el saldo actualizado
        }
        return u; // No cambiamos nada si no es el usuario que necesitamos
      });
  
      return { usuarios }; // Actualizamos el estado con la nueva lista de usuarios
    });
  },

  clientePorId: (id) => {
    let cliente = get().usuarios.find((u) => u.Id === id);
    
    return cliente ? cliente : null;
  },
  verificarCliente: (numeroTarjeta) => {
    let usuario = get().usuarios.find((u) => u.NumeroTarjeta === numeroTarjeta);
    // console.log('En store',usuario)
    return usuario ? usuario : null;
  },

  verificarPinYTarjeta: (numeroTarjeta, pinIngresado) => {
   let usuario = get().usuarios.find((u) => u.NumeroTarjeta === numeroTarjeta && u.PIN === pinIngresado);
   return usuario ? true : false;
  }
}));

export default useStore;
  
  

