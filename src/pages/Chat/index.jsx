import React from 'react'
import CaixaMensagens from '../../components/CaixaMensagens'
import Container from '../../components/Container'
import FormularioEnvio from '../../components/FormularioEnvio'
import HeaderTitulo from '../../components/HeaderTitulo'
import Usuario from '../../components/Usuario'
import './index.css'

const USUARIOS = [
    {nome:'melquisedeque', tipo: 1},
    {nome:'melquisedeque', tipo: 1},
    {nome:'catia frança', tipo: 0},
    {nome:'melquisedeque', tipo: 1},
    {nome:'melquisedeque', tipo: 1},
    {nome:'daniella lima', tipo: 0},
    {nome:'melquisedeque', tipo: 1},
    {nome:'melquisedeque', tipo: 1},
    {nome:'gabriela barbosa', tipo: 0},
    {nome:'melquisedeque', tipo: 1},
    {nome:'melquisedeque', tipo: 1},
    {nome:'catia frança', tipo: 0},
    {nome:'melquisedeque', tipo: 1},
    {nome:'melquisedeque', tipo: 1},
    {nome:'daniella lima', tipo: 0},
    {nome:'melquisedeque', tipo: 1},
    {nome:'melquisedeque', tipo: 1},
    {nome:'gabriela barbosa', tipo: 0},
]

const Chat = () => {
    return (<>
        <HeaderTitulo />
        <Container>
            <div className="conteudo-chat">
                <div className="box-usuarios">
                    <label htmlFor="" className="label">Usuários</label>
                    {USUARIOS.map(usuario => <Usuario usuario={usuario}/>)}
                </div>
                <div className="box-chat">
                    <CaixaMensagens />
                    <FormularioEnvio />
                </div>
            </div>
        </Container>
    </>)
}

export default Chat