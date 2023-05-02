import "./Colaborador.css";

interface ColaboradorProps {
  name: string;
  office: string;
  srcImage: string;
  backgroundColorCard: string;
}

const Colaborador = ({ name, srcImage, office, backgroundColorCard }: ColaboradorProps) => {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: backgroundColorCard }}>
        <img src={srcImage} alt={name} />
      </div>
      <div className="rodape">
        <h4>{name}</h4>
        <h5>{office}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
