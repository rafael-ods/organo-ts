import { useState } from "react";
import Banner from "./Components/Banner";
import Formulario from "./Components/Formulario";
import Time from "./Components/Time";
import { IColaborador } from "./shared/Interface/IColaborador";

function App() {
  const timeList = [
    {
      id: 1,
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      id: 2,
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      id: 3,
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      id: 4,
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      id: 5,
      nome: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      id: 6,
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      id: 7,
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  const [colaboradores, setColaboradores] = useState<IColaborador[]>([]);
  
  const aoNovoColaboradorAdicionado = (colaborador: IColaborador) => {
    // debugger
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner
        srcImage="/imagens/banner.png"
        altImage="O banner principal da pagina Organo"
      />
      <Formulario
        times={timeList.map((list) => list.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />

      {timeList.map((list) => (
        <Time
          key={list.id}
          name={list.nome}
          corPrimary={list.corPrimaria}
          corSecundary={list.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === list.nome
          )}
        />
      ))}
    </div>
  );
}

export default App;
