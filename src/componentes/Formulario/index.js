import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import { useState } from "react";
import "./Formulario.css";


const Formulario = (props) => {

    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState(props.times[0]);

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoCadastrarColaborador({
            nome,
            cargo,
            imagem,
            time
        })
        setNome("");
        setCargo("");
        setImagem("");
        setTime(props.times[0]);
    };

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o seu nome"
                    valor={nome}
                    aoAlterar={setNome}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    valor={cargo}
                    aoAlterar={setCargo}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterar={setImagem}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={props.times}
                    valor={time}
                    aoAlterar={setTime}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    );
};

export default Formulario;