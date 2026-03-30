import './Entrada.css';

const Entrada = ({ label, type, name, placeholder }) => {
  return (
    <div className="campo">
      <label>{label}</label>
      <input 
        type={type} 
        name={name} 
        className="u-full-width" 
        placeholder={placeholder} 
      />
    </div>
  );
};

export default Entrada;