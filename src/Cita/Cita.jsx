import { useState } from "react";
import '../Cita/Cita.css'

function Cita({cita}) {
    return (
        <>
            <div>
                <p><strong>Mascota:</strong> {cita.mascota}</p>
                <p><strong>Dueño:</strong> {cita.dueño}</p>
                <p><strong>Fecha:</strong> {cita.fecha}</p>
                <p><strong>Hora:</strong> {cita.hora}</p>
                <p><strong>Síntomas:</strong> {cita.sintomas}</p>
            </div>
        </>
    );
}

export default Cita;