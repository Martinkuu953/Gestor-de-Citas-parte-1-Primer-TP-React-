import Formulario from "./Formulario/Formulario";
import Lista from "./Lista/Lista";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      
      {}
      <div className="container">
        <div className="row">
            
          <div className="one-half column">
            <Formulario />
          </div>
          
          <div className="one-half column">
            <Lista />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;