import { useState } from "react";
import '../Cita/Cita.css'
import Datos from '../Cita/Datos';

function Cita({cita, eliminarCita}) {
    return (
        <>
            <div>
                <Datos cita={cita}/>
                <button onClick={eliminarCita}>Eliminar</button>
            </div>
        </>
    );
}

export default Cita;