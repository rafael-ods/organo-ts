import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { IColaborador } from '../../shared/Interface/IColaborador'

interface FormularioProps {
    aoColaboradorCadastrado: (colaborador: IColaborador) => void
    times: string[]
}


const Formulario = ({times, aoColaboradorCadastrado} : FormularioProps) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    required
                    type='text'
                    label="Nome"
                    placeholder="Digite seu nome" 
                    value={nome}
                    setValue={valor => setNome(valor)}
                />
                <CampoTexto
                    required
                    type='text'
                    label="Cargo"
                    placeholder="Digite seu cargo" 
                    value={cargo}
                    setValue={valor => setCargo(valor)}
                />
                <CampoTexto
                    type='text'
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    value={imagem}
                    setValue={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    required
                    label="Time" 
                    itens={times}
                    value={time}
                    setValue={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario