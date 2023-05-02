import Colaborador from "../Colaborador";
import { IColaborador } from "../../shared/Interface/IColaborador";
import "./Time.css";

interface TimeProps {
  name: string;
  corPrimary: string;
  corSecundary: string;
  colaboradores: IColaborador[]; // temos sempre que colocar os [] no final para ele entender que estamos se tratando de um objetos e o I e uma sintaxe usada
}

const Time = ({ name, corPrimary, corSecundary, colaboradores }: TimeProps) => {
  const css = { backgroundColor: corSecundary };

  return colaboradores.length > 0 ? (
    <section className="time" style={css}>
      <h3 style={{ borderColor: corPrimary }}>{name}</h3>
      <div className="colaboradores">
        {colaboradores.map((colaborador) => (
          <Colaborador
            key={colaborador.nome}
            name={colaborador.nome}
            office={colaborador.cargo}
            srcImage={colaborador.imagem}
            backgroundColorCard={corPrimary}
          />
        ))}
      </div>
    </section>
  ) : (
   <></>
  );
};

export default Time;
