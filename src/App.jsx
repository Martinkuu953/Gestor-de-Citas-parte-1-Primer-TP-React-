import { useState } from "react"; 
import Formulario from "./Formulario/Formulario";
import Lista from "./Lista/Lista";
import "./App.css";

function App() {
const [citas, setCitas] = useState([
  {
    id: 1,
    mascota: "Nina",
    propietario: "Martín",
    fecha: "2026-03-30",
    hora: "10:30",
    sintomas: "No come"
  },
  {
    id: 2,
    mascota: "Sifon",
    propietario: "Flecha",
    fecha: "2026-03-31",
    hora: "14:00",
    sintomas: "Dolor de pata"
  }
]);

  const agregarCita = (cita) => {
    setCitas([...citas, cita]);
  };

  const eliminarCita = (id) => {
    const confirmar = window.confirm("¿Deseas eliminar esta cita?");
    if (confirmar) {
      const nuevasCitas = citas.filter((cita) => cita.id !== id);
      setCitas(nuevasCitas);
    }
  };

  return (
    <div className="App">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            {}
            <Formulario agregarCita={agregarCita} />
          </div>
      
          <div className="one-half column">
            <Lista citas={citas} eliminarCita={eliminarCita} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;