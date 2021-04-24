import React, { useState, useEffect } from 'react'
import './index.css'

const Mensagem = ({mensagem}) => {
    const [logado, setLogado] = useState(false)
    useEffect(() => {
        const idUsuarioLogado = localStorage.getItem('id')
        if(mensagem?.nome)
            setLogado(mensagem.usuario.id === idUsuarioLogado)
    }, [mensagem])

    return (<div className={`mensagem ${logado ? 'mensagem-logado' : 'mensagem-outros'}`}>
        <div className={`usuario-mensagem ${logado ? 'usuario-mensagem-logado' : 'usuario-mensagem-outros'}`}>{mensagem?.usuario?.nome}</div>
        <div className="conteudo-mensagem">{mensagem?.conteudo}</div>
    </div>)
}

export default Mensagem