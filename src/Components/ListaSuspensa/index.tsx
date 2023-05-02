import "./ListaSuspensa.css";

interface ListaSuspensaProps {
  label: string;
  value: string;
  itens: string[]
  required: boolean;
  setValue: (value: string) => void;
}

const ListaSuspensa = ({
  label,
  value,
  itens,
  setValue,
  required = false,
}: ListaSuspensaProps) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select
        onChange={(e) => setValue(e.target.value)}
        required={required}
        value={value}
      >
        <option value=""></option>
        {itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
