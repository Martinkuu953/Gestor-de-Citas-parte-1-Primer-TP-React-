
import './Cita.css';
import Datos from './Datos';

function Cita({cita, eliminarCita}) {
    return (
        <div className="cita">
            <Datos cita={cita}/>
            {}
            <button 
                className="button eliminar u-full-width" 
                onClick={eliminarCita}
            >
                Eliminar ×
            </button>
        </div>
    );
}

export default Cita;