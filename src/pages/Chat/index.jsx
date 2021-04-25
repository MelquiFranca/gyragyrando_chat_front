import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import CaixaMensagens from '../../components/CaixaMensagens'
import Container from '../../components/Container'
import FormularioEnvio from '../../components/FormularioEnvio'
import HeaderTitulo from '../../components/HeaderTitulo'
import Usuario from '../../components/Usuario'
import { LISTA_USUARIOS_LOGADOS, LISTA_MENSAGENS } from '../../querys'
import './index.css'

const Chat = ({navigation}) => {
    const {data: dataUsuarios, loading: loadingUsuarios, error: errorUsuarios } = useQuery(LISTA_USUARIOS_LOGADOS, {
        // pollInterval: 500,
    })
    const {data: dataMensagens, loading: loadingMensagens, error: errorMensagens } = useQuery(LISTA_MENSAGENS)
    
    useEffect(()=> {
        const id = localStorage.getItem('id')
        const nome = localStorage.getItem('nome')

        if(!id || !nome)
            navigation.history('Login')

    }, [])

    if(errorUsuarios || errorMensagens) return <p>Erro ao carregar Informações</p>

    return (<>
        <HeaderTitulo />
        <Container>
            <div className="conteudo-chat">
                <div className="box-usuarios">
                    <label htmlFor="" className="label">Usuários</label>
                    <div className="lista-usuarios">                        
                        {
                            (!loadingUsuarios && dataUsuarios) 
                            && 
                            dataUsuarios.usuarios.map((usuario, index) => <Usuario usuario={usuario} key={index}/>)
                        }
                    </div>
                </div>
                <div className="box-chat">
                    <CaixaMensagens mensagens={(!loadingMensagens && dataMensagens) ? dataMensagens.mensagens : []}/>
                    <FormularioEnvio />
                </div>
            </div>
        </Container>
    </>)
}

export default Chat