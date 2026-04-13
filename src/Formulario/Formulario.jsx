import Entrada from '../Entrada/Entrada';
import React, { useState } from "react";
import './Formulario.css';

function Formulario() {
  const [cita, setCita] = useState({mascota: "", propietario: "", fecha: "", hora: "", sintomas: ""});

  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    agregarCita({
      ...cita,
      id: Date.now()
    });

    setCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: ""
    });
  };

  return (
    <div> {}
      <h2>Crear mi Cita</h2>
      <form onSubmit={handleSubmit}>
        <Entrada label="Nombre Mascota" type="text" name="mascota" placeholder="Nombre Mascota" />
        <Entrada label="Nombre Dueño" type="text" name="propietario" placeholder="Nombre dueño" />
        <Entrada label="Fecha" type="date" name="fecha" />
        <Entrada label="Hora" type="time" name="hora" />

        <label>Sintomas</label>
        <textarea name="sintomas" className="u-full-width"></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </div>
  );
}

export default Formulario;