import Entrada from '../Entrada/Entrada';
import React, { useState } from "react";
import './Formulario.css';

function Formulario({agregarCita}) {
  const [cita, setCita] = useState({mascota: "", propietario: "", fecha: "", hora: "", sintomas: ""});

  const guardarCambio = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };

  const enviarForm = (e) => {
    e.preventDefault();

    const nuevaCita = {
      id: Date.now(),
      ...cita
    };

    console.log(nuevaCita);
    agregarCita(nuevaCita);
  };

  return (
    <div> {}
      <h2>Crear mi Cita</h2>
      <form onSubmit={enviarForm}> 
        <Entrada label="Nombre Mascota" type="text" name="mascota" placeholder="Nombre Mascota" value={cita.mascota} onChange={guardarCambio}/>
        <Entrada label="Nombre Dueño" type="text" name="propietario" placeholder="Nombre dueño" value={cita.propietario} onChange={guardarCambio}/>
        <Entrada label="Fecha" type="date" name="fecha" value={cita.fecha} onChange={guardarCambio}/>
        <Entrada label="Hora" type="time" name="hora" value={cita.hora} onChange={guardarCambio}/>

        <label>Sintomas</label>
        <textarea name="sintomas" className="u-full-width" value={cita.sintomas} onChange={guardarCambio}></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </div>
  );
}

export default Formulario;