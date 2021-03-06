import React, { useEffect, useState } from 'react'
import { useQuery, useSubscription } from '@apollo/client'
import CaixaMensagens from '../../components/CaixaMensagens'
import Container from '../../components/Container'
import FormularioEnvio from '../../components/FormularioEnvio'
import HeaderTitulo from '../../components/HeaderTitulo'
import Usuario from '../../components/Usuario'
import Notificacoes from '../../components/Notificacoes'
import { LISTA_USUARIOS_LOGADOS, LISTA_MENSAGENS, SUBSCRIPTION_NOVA_MENSAGEM, SUBSCRIPTION_SAIU_USUARIO, SUBSCRIPTION_NOVO_USUARIO } from '../../querys'
import './index.css'

const Chat = ({history}) => {
    const [listaMensagens, setListaMensagens] = useState([])
    const [listaUsuarios, setListaUsuarios] = useState([])
    const { data: dataUsuarios, loading: loadingUsuarios, error: errorUsuarios } = useQuery(LISTA_USUARIOS_LOGADOS)
    const { data: dataMensagens, loading: loadingMensagens, error: errorMensagens } = useQuery(LISTA_MENSAGENS)
    const { data: dataAtualizarMensagens, loading: loadingAtualizarMensagens } = useSubscription(SUBSCRIPTION_NOVA_MENSAGEM)
    const { data: dataLogin, loading: loadingLogin } = useSubscription(SUBSCRIPTION_NOVO_USUARIO)
    const { data: dataLogoff, loading: loadingLogoff } = useSubscription(SUBSCRIPTION_SAIU_USUARIO)

    useEffect(() => {
        const id = localStorage.getItem('id')
        if(!id)
            history.push('')
    }, []);
    useEffect(() => {
        if(!loadingAtualizarMensagens && dataAtualizarMensagens?.atualizarMensagens?.conteudo) {
            setListaMensagens([...listaMensagens, dataAtualizarMensagens.atualizarMensagens])            
        }
    }, [loadingAtualizarMensagens, dataAtualizarMensagens]);

    useEffect(() => {
        if(!loadingLogin && dataLogin?.entradaUsuario?.id)
            setListaUsuarios([...listaUsuarios, dataLogin.entradaUsuario])
    }, [loadingLogin, dataLogin]);
        
    useEffect(() => {
        let novaLista
        if(!loadingLogoff && dataLogoff?.saidaUsuario?.id) {
            const usuarioDeslogado = dataLogoff.saidaUsuario
            novaLista = listaUsuarios.filter(usuario => (usuario.id !== usuarioDeslogado.id))
        } else {
            novaLista = listaUsuarios
        }
        setListaUsuarios(novaLista)
    }, [loadingLogoff]);
             
    useEffect(()=> {    
        if(dataMensagens?.mensagens)
            setListaMensagens(dataMensagens.mensagens)
    }, [loadingMensagens, dataMensagens])
    useEffect(()=> {    
        if(dataUsuarios?.usuarios)
            setListaUsuarios(dataUsuarios.usuarios)
    }, [loadingUsuarios, dataUsuarios])

    

    if(errorUsuarios && errorMensagens) return <p>Erro ao carregar Informa????es</p>


    return (<>
        <HeaderTitulo telaLogin={false} history={history}/>
        <Container>
            <div className="notificacoes">
                {
                    (!loadingLogin && dataLogin) 
                    && <Notificacoes dados={dataLogin?.entradaUsuario} tipo='login'/>
                }
                
                {            
                    (!loadingLogoff && dataLogoff)
                    && <Notificacoes dados={dataLogoff?.saidaUsuario} tipo='logoff'/>
                }
            </div>
            <div className="conteudo-chat">
                <div className="box-usuarios">
                    <label htmlFor="" className="label">Usu??rios</label>
                    <div className="lista-usuarios">                        
                        {
                            listaUsuarios.map((usuario, index) => <Usuario usuario={usuario} key={index}/>)
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