import Cita from '../Cita/Cita';
import '../Lista/Lista.css';

function Lista({ citas, eliminarCita }) {
  const titulo ="Administra tus citas";

  return (
    <div className="Lista">
      <h1>{titulo}</h1>

      {}
      {citas.map((cita) => (
        <Cita 
          key={cita.id} 
          cita={cita} 
          eliminarCita={eliminarCita} 
        />
      ))}
      
    </div>
  );
}

export default Lista;