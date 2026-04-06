import Entrada from '../Entrada/Entrada';
import './Formulario.css';

function Formulario() {
  return (
    <div> {}
      <h2>Crear mi Cita</h2>
      <form>
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