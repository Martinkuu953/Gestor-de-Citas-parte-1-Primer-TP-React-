import Cita from '../Cita/Cita';
import '../Lista/Lista.css';

function Lista() {
  return (
    <div className="Lista">
      <h1>Lista:</h1>

      <Cita cita={{
        mascota: "Nina",
        dueño: "Martín",
        fecha: "2026-03-30",
        hora: "10:30",
        sintomas: "No come"
      }} />

      <Cita cita={{
        mascota: "Sifon",
        dueño: "Flecha",
        fecha: "2026-03-31",
        hora: "14:00",
        sintomas: "Dolor de pata"
      }} />

      <Cita cita={{
        mascota: "Firulais",
        dueño: "Juan",
        fecha: "2026-04-01",
        hora: "09:15",
        sintomas: "Fiebre"
      }} />

    </div>
  );
}

export default Lista;