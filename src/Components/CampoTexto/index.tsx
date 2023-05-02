import "./CampoTexto.css";

interface CampoTextoProps {
  type: string;
  label: string;
  value: string;
  required?: boolean;
  placeholder: string;
  setValue: (value: string) => void; // void na linguagem back-end é uma função que ñ nos retorna nada! e aqui estamos passando que setValue: esta recebendo um valor de uma String como parametro
}

const CampoTexto = ({
  type,
  label,
  value,
  setValue,
  placeholder,
  required = false,
}: CampoTextoProps) => {
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default CampoTexto;
