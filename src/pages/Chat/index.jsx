import React, { useEffect, useState } from 'react'
import { useQuery, useSubscription } from '@apollo/client'
import CaixaMensagens from '../../components/CaixaMensagens'
import Container from '../../components/Container'
import FormularioEnvio from '../../components/FormularioEnvio'
import HeaderTitulo from '../../components/HeaderTitulo'
import Usuario from '../../components/Usuario'
import { LISTA_USUARIOS_LOGADOS, LISTA_MENSAGENS, SUBSCRIPTION_NOVA_MENSAGEM, SUBSCRIPTION_SAIU_USUARIO } from '../../querys'
import './index.css'

const Chat = ({history}) => {
    const [listaMensagens, setListaMensagens] = useState([])
    const { data: dataUsuarios, loading: loadingUsuarios, error: errorUsuarios } = useQuery(LISTA_USUARIOS_LOGADOS)
    const { data: dataMensagens, loading: loadingMensagens, error: errorMensagens } = useQuery(LISTA_MENSAGENS)
    const { data: dataAtualizarMensagens, loadingAtualizarMensagens } = useSubscription(SUBSCRIPTION_NOVA_MENSAGEM)
    const { data: dataLogoff, loadingLogoff } = useSubscription(SUBSCRIPTION_SAIU_USUARIO)

    useEffect(() => {
        const id = localStorage.getItem('id')
        const nome = localStorage.getItem('nome')

        if(!id || !nome)
            history.push('')
    }, []);
    
    useEffect(()=> {    
        if(dataMensagens?.mensagens)
            setListaMensagens(dataMensagens.mensagens)
    }, [loadingMensagens, dataMensagens])

    useEffect(() => {
        if(!loadingAtualizarMensagens && dataAtualizarMensagens?.atualizarMensagens)
            setListaMensagens([...listaMensagens, dataAtualizarMensagens.atualizarMensagens])            
    }, [dataAtualizarMensagens, loadingAtualizarMensagens]);

    useEffect(() => {
        if(!loadingLogoff)
            console.log(dataLogoff)

    }, [dataLogoff, loadingLogoff]);
        
    

    if(errorUsuarios || errorMensagens) return <p>Erro ao carregar Informações</p>


    return (<>
        <HeaderTitulo telaLogin={false} history={history}/>
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
                    <CaixaMensagens mensagens={listaMensagens}/>
                    <FormularioEnvio />
                </div>
            </div>
        </Container>
    </>)
}

export default Chat