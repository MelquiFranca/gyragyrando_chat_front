import React, { useEffect, useState } from 'react'
import CaixaMensagens from '../../components/CaixaMensagens'
import Container from '../../components/Container'
import FormularioEnvio from '../../components/FormularioEnvio'
import HeaderTitulo from '../../components/HeaderTitulo'
import Usuario from '../../components/Usuario'
import './index.css'

const USUARIOS = [
    {nome:'Toca Gado', tipo: 0},
    {nome:'Fulano de Tal', tipo: 0},
    {nome:'Jaca Gol', tipo: 0},
]

const Chat = () => {
    const [usuarioLogado, setUsuarioLogado] = useState(null)

    useEffect(()=> {
        const nome = localStorage.getItem('nome')
        const tipo = localStorage.getItem('tipo')

        setUsuarioLogado({
            nome,
            tipo
        })
    }, [])
    return (<>
        <HeaderTitulo />
        <Container>
            <div className="conteudo-chat">
                <div className="box-usuarios">
                    <label htmlFor="" className="label">Usuários</label>
                    <div className="lista-usuarios">
                        {usuarioLogado && <Usuario usuario={usuarioLogado}/>}
                        {USUARIOS.map((usuario, index) => <Usuario usuario={usuario} key={index}/>)}
                    </div>
                </div>
                <div className="box-chat">
                    <CaixaMensagens mensagens={[]}/>
                    <FormularioEnvio />
                </div>
            </div>
        </Container>
    </>)
}

export default Chat